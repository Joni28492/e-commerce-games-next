import styles from './GridGames.module.scss'
import Link from 'next/link';
import {map} from 'lodash'
import { Label, WishListIcon } from '@/shared';
import { ENV, fn } from '@/utils';


export const GridGames = (Props) => {

    const {wishlist, onReload} = Props;

    


    return (
        <div className={styles.gridGames}>
            {
                map(wishlist, (item) => {

                    const game = item.attributes.game.data;
                    const cover = game.attributes.cover.data

                    return (
                        <div key={item.id} className={styles.game}>
                            <Link href={`/${game.attributes.slug}`}>
                                <div>
                                    <img src={`${ENV.SERVER_HOST}${cover.attributes.url}`} />
                                    {
                                        game.attributes.discount > 0 && (
                                            <Label.Discount className={styles.discount}>
                                                {`-${game.attributes.discount}%`}
                                            </Label.Discount>
                                        )   
                                    }
                                </div>

                                <div>
                                    <span>{game.attributes.title}</span>
                                    <span className={styles.price}>
                                        {
                                            fn.calcDiscount(game.attributes.price, game.attributes.discount)
                                        }€
                                    </span>
                                </div>
                            </Link>
                            <WishListIcon gameId={game.id} className={styles.wishlistIcon} removeCallback={onReload}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
