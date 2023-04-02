import styles from './GridGames.module.scss'
import Link from 'next/link'

import { map } from "lodash";
import { ENV, fn } from '@/utils';
import { Label } from '../Label';



export const GridGames = (Props) => {

    const {games} = Props


    return (
        <div className={styles.gridGames}>

            {map(games, (game) => (

                <Link key={game.id} href={`/${game.attributes.slug}`} className={styles.game}>
                    <div>
                        <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} />
                        { game.attributes.discount > 0  && (
                            <Label.Discount className={styles.discount}>
                                {`-${game.attributes.discount}`}
                            </Label.Discount>
                        )}
                    </div>
                    <div>
                        <span>{game.attributes.title}</span>
                        <span className={styles.price}>
                            {fn.calcDiscount(game.attributes.price, game.attributes.discount)}€
                        </span>
                            
                    
                    </div>
                </Link>
            ))}

        </div>
    )
}
