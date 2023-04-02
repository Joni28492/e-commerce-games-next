

import { Address } from '@/api'
import { useAuth } from '@/hooks'
import { useEffect, useState } from 'react'
import styles from './Addresses.module.scss'
import {map} from 'lodash'
import classNames from 'classnames'

const addressCtrl = new Address()


export const Addresses = (Props) => {

    const {user} = useAuth()
    const [addresses, setAddresses] = useState(null)
    const {addressSelected, setAddressSelected} = Props;

    useEffect(() => {
      
      (async() => {
        try {
            const response = await addressCtrl.getAll(user.id)
            setAddresses(response.data)
        } catch (error) {
            console.error(error)
        }
      })();
      console.log(addresses)
    }, [])


    return (
        <div className={styles.addresses}>
            <h2>Direcciones</h2>

            {map(addresses, (address)=>(
                <div 
                    key={address.id} 
                    className={classNames(styles.address, {
                        [styles.active]: address.id === addressSelected?.id
                    })} 
                    onClick={()=>setAddressSelected(address)}
                >
                    <p>{address.attributes.name} {address.attributes.title}</p>
                    <p>{address.attributes.address}, {address.attributes.postal_code}, {address.attributes.state}, {address.attributes.city} </p>
                </div>
            ))}
        </div>
    )
}
