import { Button, Container, Image } from 'semantic-ui-react';
import styles from './BannerAd.module.scss'

import Link from 'next/link'


export const BannerAd = (Props) => {


    const { title, subtitle, btnTitle, btnLink, image } = Props;

    return (
        <div className={styles.container}>
            <Container className={styles.containerImage}>
                <Image src={image} />
            </Container>
            <div className={styles.infoContainer}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <Button as={Link} href={btnLink} primary>
                    {btnTitle}
                </Button>
            </div>
        </div>
    )
}
