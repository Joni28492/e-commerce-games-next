import { useEffect, useState } from "react"
import {Wishlist as WishlistCtrl } from '@/api'
import { useAuth } from "@/hooks";
import { NoResult } from "@/shared";
import {size} from 'lodash'
import { GridGames } from "./GridGames";



const wishlistCtrl = new WishlistCtrl();

export const Wishlist = () => {

    const [wishlist, setWishlist] = useState(null)
    const [reload, setReload] = useState(false)
    

    const onReload = () => setReload(prevState => !prevState)


    const { user } = useAuth()

    useEffect(() => {
        
            (async()=>{

                try {
                    const response = await wishlistCtrl.getAll(user.id)
                    setWishlist(response)
                } catch (error) {
                    console.error(error);
                }


            })()
    
        
    }, [reload])
   

    return size(wishlist) === 0 ? (
        <NoResult text="No tiene ningun juego en la lista de deseos" />
    ):(
        <GridGames wishlist={wishlist} onReload={onReload} />
    )
}
