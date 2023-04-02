import Link from 'next/link'
import { Container, Image, Button} from 'semantic-ui-react'
import styles from './Footer.module.scss'




export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Gaming" />
                    </Link>
                </div>
            

                <div>
                    <ul>
                        <Link href="#">Terminos y condiciones</Link>
                        <Link href="#">Politica de privacidad</Link>
                        <Link href="#">Contacto</Link>
                        <Link href="#">FAQs</Link>
                    </ul>
                </div>
            
                <div className={styles.social}>
                    <Button as="a" href="#" circular color='facebook' icon="facebook" />
                    <Button as="a" href="#" circular color='twitter' icon="twitter" />
                    <Button as="a" href="#" circular color='linkedin' icon="linkedin" />
                    <Button as="a" href="#" circular color='youtube' icon="youtube" />

                </div>
            </div>

            <div className={styles.copyright}>
                <span>Copyright © 2023 Gaming - All rights reserved</span>
            </div>
        </Container>
    </div>
  )
}
