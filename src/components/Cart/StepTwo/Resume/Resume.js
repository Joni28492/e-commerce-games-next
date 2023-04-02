import styles from './Resume.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import {forEach, map} from 'lodash'
import { useAuth, useCart } from '@/hooks';
import { Cart } from '@/api';
import { fn } from '@/utils';


import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const cartCtrl = new Cart()

export const Resume = (Props) => {


    const {addressSelected, games} = Props
    const [total, setTotal] = useState(null)
    const [loading, setLoading] = useState(false)
    const {user} = useAuth();
    const { deleteAllItems } = useCart()
    const router = useRouter()
    const stripe = useStripe()
    const elements = useElements()


    useEffect(() => {
      
        let totalTemp = 0;
        
        //todo arreglar el calculo del pago
        forEach(games, (game)=>{
            const price = fn.calcDiscount(game.attributes.price, game.attributes.discount);
            totalTemp += price * game.quantity;
        })

        setTotal(totalTemp.toFixed(2))
        
        console.log("resume effect", total)
    }, [games])

    const onPay = async() => {
        setLoading(true);

        if(!stripe || !elements) {
            setLoading(false);
            return;
        }



        const cardElement = elements.getElement(CardElement)
        const result = await stripe.createToken(cardElement) //tambien valida la tarjeta 

        if(result.error) { //error en el pago
            console.error(result.error.message)
        } else {
            const response = await cartCtrl.paymentCart(result.token, games, user.id, addressSelected);
            
            if(response.status === 200) {
                deleteAllItems()
                goToStepEnd()
                
            } else {
                console.error("Error al realizar el pedido")
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    const goToStepEnd = () => {
        router.replace({query: {...router.query, step: 3}})
    }



    if(!total) return null;

    return (
        <div className={styles.resume}>
            <h2>Resumen</h2>


            <div className={styles.block}>
                <div className={styles.products}>
                    {map(games, (game)=>(
                        <div key={game.id} className={styles.product}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <span>{game.attributes.platform.data.attributes.title}</span>
                            </div>
                            <span>
                                {game.quantity > 0 && `${game.quantity}x`}
                                {fn.calcDiscount(game.attributes.price, game.attributes.discount)}€
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.blockTotal}>
                <div>
                    <span>Total</span>
                    <span>{total}€</span>
                </div>

                <Button primary fluid disabled={!addressSelected} onClick={onPay} loading={loading}>
                    Pagar
                </Button>
            </div>
        </div>
    )
}
