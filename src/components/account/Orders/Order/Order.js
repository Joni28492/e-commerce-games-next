import styles from './Order.module.scss'
import {DateTime} from 'luxon'
import {forEach, map} from 'lodash'
import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { BasicModal } from '@/shared'
import { ENV, fn } from '@/utils'



export const Order = (Props) => {

    const { order } = Props 
    const [showModal, setShowModal] = useState(false)
    

    const createdAt = new Date(order.attributes.createdAt).toISOString();
    const products = order.attributes.products;
    const address = order.attributes.addressShipping;


    const opneCloseModal = () => setShowModal((prevState)=>!prevState)

    const getTotalProducts = () => {
        let total = 0;
        forEach(products,(product)=> {
            total += product.quantity;
        })


        return total;

    }


    return (
        <>
            <div className={styles.order} onClick={opneCloseModal}>
                <div>
                    <span>{DateTime.fromISO(createdAt,  {locale: 'es'}).toFormat("dd/MM/yyyy")  }</span>
                    <p> {getTotalProducts()} productos </p>
                </div>
                    <p>{order.attributes.totalPayment.toFixed(2)}€</p>
            </div>

            <BasicModal show={showModal} onClose={opneCloseModal} title="Información del pedido">
                {map(products, (product)=> (
                    <div key={product.id} className={styles.product}>
                        <Image src={`${ENV.SERVER_HOST}${product.attributes.cover.data.attributes.url}`} />
                        <div>
                            <div className={styles.info}>
                                <div>
                                    <p>{product.attributes.title}</p>
                                    <p>{product.attributes.platform.data.attributes.title}</p>

                                </div>
                            </div>
                            <div className={styles.quantity}>
                                <span>x{product.quantity}</span>
                                <span>{fn.calcDiscount(product.attributes.price, product.attributes.discount)}€</span>
                            </div>
                        </div>

                    </div>
                ))}

                <div className={styles.address}>
                    <div>
                        <p className={styles.title}>{address.attributes.title}</p>
                        <p className={styles.addressInfo}>
                            {address.attributes.name} , {address.attributes.address}, {" "}
                            {address.attributes.state}, {address.attributes.city}, {" "}
                            {address.attributes.postal_code}
                        </p>

                    </div>
                </div>

                <div className={styles.total}>
                    <p>Total: {order.attributes.totalPayment.toFixed(2)}€ </p>
                </div>
            </BasicModal>
        </>
    )
}
