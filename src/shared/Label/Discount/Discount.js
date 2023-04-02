import classNames from 'classnames';
import styles from './Discount.module.scss';


export const Discount = (Props) => {

    const {children, className} = Props;


    return (
        <span className={classNames(styles.labelDiscount,{[className]: className})}>
            {children}
        </span>
    )
}
