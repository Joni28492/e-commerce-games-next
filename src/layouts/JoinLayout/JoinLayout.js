
import Link from "next/link"
import styles from './JoinLayout.module.scss'
import { Icon, Image } from "semantic-ui-react"
import { useAuth } from "@/hooks"
import { useRouter } from "next/router"


export const JoinLayout = (props) => {

    const {children} = props
    const {user} = useAuth()
    const router = useRouter()

    if(user) {
        router.push("/")
        return null;
    }

    return (
    <div className={styles.container}>

        <div className={styles.topBar}>
            <Link href="/">
                <Image src="/images/logo.png" alt="Gaming" />
            </Link>
            <Link href="/">
                <Icon name="close" />
            </Link>

        </div>


        <div className={styles.blockLeft}>{children}</div>
        <div className={styles.blockRight} />
    </div>
  )
}
