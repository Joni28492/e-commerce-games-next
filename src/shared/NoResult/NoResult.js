import styles from './NoResult.module.scss'

export const NoResult = (Props) => {

    const { text } = Props

    return (
    <div className={styles.noResult}>
        <p>{text}</p>
    </div>
    )
}
