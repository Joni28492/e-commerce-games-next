import styles from './Video.module.scss';
import ReactPlayer from 'react-player'

export const Video = (Props) => {


    const  {video} = Props
    // console.log(video) //todo resolver errror

    return (
        <ReactPlayer  url={video} className={styles.video} width="100%" height={634}/>
    )
}
