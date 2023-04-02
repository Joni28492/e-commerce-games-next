import { useCart } from '@/hooks'
import { WishListIcon } from '@/shared'
import { ENV, fn } from '@/utils'
import { useState } from 'react'
import { Button, Container, Icon, Image } from 'semantic-ui-react'
import styles from './Panel.module.scss'

export const Panel = (Props) => {

    const {gameId, game} = Props
    
    const { addCart } = useCart()
    const [loading, setLoading] = useState(false);
    
    
    const platform = game.platform.data
    const buyPrice = fn.calcDiscount(game.price, game.discount)
    

    const addCartWrapper = () => {
        setLoading(true)
        addCart(gameId);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }


    return (
        <Container className={styles.panel}>
            <div className={styles.imgContainer}>
                <Image  src={`${ENV.SERVER_HOST}${game.cover.data.attributes.url}`} />
            </div>

            <div className={styles.actionsContainer}>
                <div>
                    <h2> {game.title} </h2>

                    <div className= {styles.moreInfo}>
                        <span>
                            <Image src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`} />
                            {platform.attributes.title}
                        </span>
                        <span>
                            <Icon name='check' />
                            En Stock
                        </span>
                    </div>

                    <div className={styles.price}>
                        {   game.discount > 0 && 
                            (
                                <>
                                    <span className={styles.originalPrice}>
                                        <Icon name="tag" />
                                        {game.price}€ 
                                    </span>
                                    <span className={styles.discount}>-{game.discount}%</span>
                                </>
                            )
                        }

                        <span className={styles.price}>{buyPrice}€</span>
                    </div>

                    <Button primary fluid onClick={addCartWrapper} loading={loading}>
                        Comprar ahora
                    </Button>
                    <WishListIcon gameId={gameId}  className={styles.heart} />
                </div>
            </div>
        </Container>
    )
}
