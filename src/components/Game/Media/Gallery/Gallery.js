import { Image } from 'semantic-ui-react';
import {map} from 'lodash'
import styles from './Gallery.module.scss'
import { FullModal } from '@/shared';
import { useState } from 'react';

import Slider from 'react-slick'
import { ENV } from '@/utils';



export const Gallery = (Props) => {


    const {screenshots} = Props;
    const screenshotsClone = [...screenshots]
    const principalImg = screenshotsClone.shift();



    const [show, setShow] = useState(false)
    const onOpenClose = () => setShow( prevState => !prevState )

    const settings = {
        dots: true,
        dotsClass: styles.dots,
        infinite: true,
        slidersToShow: 1,
        siidersToScroll: 1,
        arrows: false,
        customPaging: (index)=> {
            return <Image src={`${ENV.SERVER_HOST}${screenshots[index].attributes.url}`} />
        }
    }


    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <Image src={`${ENV.SERVER_HOST}${principalImg.attributes.url}`} onClick={onOpenClose} />
                </div>

                <div className={styles.grid}>

                {map(screenshots, (screenshot, i)=>(
                    (i<4)&&
                    <div key={screenshot.id}>
                        <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`} onClick={onOpenClose} />
                    </div>
                ))}

                </div>


            </div>

            <FullModal show={show} onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {
                            map(screenshots, (screenshot)=> (
                                <div key={screenshot.id}>
                                    <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </FullModal>
        
        </>
    )
}
