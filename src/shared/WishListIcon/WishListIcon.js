import { Icon } from 'semantic-ui-react'
import styles from './WishListIcon.module.scss'
import classNames from 'classnames'
import { Wishlist } from '@/api'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'


const wishlistCtrl = new Wishlist();

export const WishListIcon = (Props) => {

    const {gameId, className, removeCallback} = Props
    const [hasWishlist, setHasWishlist] = useState(null);

    const {user} = useAuth()


    useEffect(() => {
    
        (async ()=>{
            try {

                const response = await wishlistCtrl.check(user.id, gameId)
                setHasWishlist(response)                
              } catch (error) {
                setHasWishlist(false)
                console.error(error)
              }
        })()

    }, [gameId])

    const addWishlist = async() => {
        try {
            const response = await wishlistCtrl.add(user.id,gameId)
            setHasWishlist(response)
        } catch (error) {
            console.error(error)
        }

    }

    const deleteWishlist = async () => {
        try {
            const response = await wishlistCtrl.delete(hasWishlist.id)
            setHasWishlist(false);


            if(removeCallback) removeCallback();
            
        } catch (error) {
             console.error(error)
        }
    }


    if(hasWishlist === null) return null;

    

    return (
        <Icon name={hasWishlist ? "heart" : "heart outline"}
            onClick = { hasWishlist ? deleteWishlist : addWishlist }
             className={classNames(styles.wishListIcon, {
            [className]: className,
        })} />
    )
}
