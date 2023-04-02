import { Basket } from './Basket'
import { Resume } from './Resume'
import styles from './StepOne.module.scss'

export const StepOne = (Props) => {


    const {games} = Props
    

    return (
        <div className={styles.stepOne}>
            <div className={styles.center}>
                <Basket  games={games} />
            </div>
            <div className={styles.right}>
                <Resume   games={games} />
            </div>

        </div>
    )
}
