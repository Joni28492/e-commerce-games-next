import { Game } from "@/api";
import { Cart } from "@/components/Cart";
import { useCart } from "@/hooks";
import { CartLayout } from "@/layouts"
import { Seo } from "@/shared";
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";

const gameCtrl = new Game();



const CartPage = () => {

  const {query: {step=1}} = useRouter();
  const currentStep = Number(step)
  const [games, setGames] = useState(null)
  const { cart } = useCart()





  useEffect(() => {
    
    ( async ()=>{
      
      try {
        const data = [];
        //todo solve cart no iterable
        for await  (const item of cart) {
          const response = await gameCtrl.getGameById(item.id)
          data.push({...response.data, quantity: item.quantity})
        }
        setGames(data)
        console.log("cart page",games)

      } catch (error) {
        console.error(error);
      }
    })()


  }, [cart])
  



  return (

    <>
        <Seo  title="Carrito" />
        <CartLayout>
            {currentStep === 1  && <Cart.StepOne games={games} />}
            {currentStep === 2  && <Cart.StepTwo games={games}/>}
            {currentStep === 3  && <Cart.StepThree />}

        </CartLayout>
    </>
  )
}

export default CartPage