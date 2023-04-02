import { ENV } from '@/utils';
import { Image } from 'semantic-ui-react';
import styles from './HeaderWallpaper.module.scss'

export const HeaderWallpaper = (Props) => {
  
  
    const {image} = Props;
  
  
  
    return (
    <div className={styles.headerWallpaper}>
        <Image src={`${ENV.SERVER_HOST}${image}`} />

    </div>
  )
}
