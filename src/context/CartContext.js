import { Cart } from "@/api";
import { createContext, useEffect, useState } from "react";



const cartCtrl = new Cart()

export const CartContext = createContext()


export const CartProvider = (Props) => {

    const { children } = Props
    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(cartCtrl.count())

 

    useEffect(() => {
        const response = cartCtrl.getAll()
        setCart(response)
    }, []);


    //metodos
    const addCart = (gameId) => {
        cartCtrl.add(gameId)  
        refreshTotalCart()  
    }


    const changeQuantityItem = (gameId, quantity) => {
        cartCtrl.changeQuantity(gameId, quantity)
        refreshTotalCart()
    }


    const refreshTotalCart = () => {

        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())

    }

    
    const deleteItem = (gameId) => {
        cartCtrl.delete(gameId)
        refreshTotalCart()

    }


    const deleteAllItems = () => {
        cartCtrl.deleteAll();
        refreshTotalCart()
    }

    const data = {
        cart,
        total,
        //
        addCart,
        deleteItem,
        deleteAllItems,
        changeQuantityItem
    }


    return  <CartContext.Provider value={data}>{children}</CartContext.Provider>

}