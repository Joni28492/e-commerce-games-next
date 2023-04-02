import { Game } from '@/api'
import { useEffect, useState } from 'react'
import { Container, Image } from 'semantic-ui-react'
import styles from './BannerLastGamePublished.module.scss'
import {DateTime} from 'luxon'
import Link from 'next/link'
import { ENV, fn } from '@/utils'
import { Label } from '@/shared'

const gameCtrl = new Game()



export const BannerLastGamePublished = () => {

  const [game, setGame] = useState(null)  

  useEffect(() => {
   (async ()=>{
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0])
      } catch (error) {
        console.error(error)
      }
   })()
  }, [])
  
  if(!game) return null;

  const wallpaper = game.attributes.wallpapper
  const releaseDate = new Date(game.attributes.releaseDate).toISOString()
  const price = fn.calcDiscount(game.attributes.price, game.attributes.discount)

  return (
    <div className={styles.container}>
        <Image src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`}  className={styles.wallpaper}/>

        <Link className={styles.infoContainer} href={game.attributes.slug} >

          <Container>
            <span className={styles.date}>
              {DateTime.fromISO(releaseDate, {locale: 'es'}).minus({days: 1}).toRelative()}
            </span>
            <h2>{game.attributes.title}</h2>

            <p className={styles.price}>
              <Label.Discount>-{game.attributes.discount}%</Label.Discount>
              <span className={styles.finalPrice}>
                {price}
              </span>
            </p>
          </Container>

        </Link>
    </div>
  )
}
