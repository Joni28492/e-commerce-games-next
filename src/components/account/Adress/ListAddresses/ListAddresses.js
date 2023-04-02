import { Address as AddressCtrl} from '@/api'
import { Address } from './Address'
import { useAuth } from '@/hooks'
import { map } from 'lodash'
import { useEffect, useState } from 'react'
import styles from './ListAddresses.module.scss'

const addressCtrl = new AddressCtrl()

export const ListAddresses = (Props) => {

    const {reload,onReload} = Props

    const [addresses, setAddresses] = useState(null)
    const {user} = useAuth()

    useEffect(() => {
      
        (async () =>{
            try {

                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)                
            } catch (error) {
                console.error(error)
            }
        })();
    
    }, [reload])

    
    

    if(!addresses) return null

    return (
    <div className={styles.addresses}>
        {map(addresses, (address)=>(
            <Address key={address.id}  addressId={address.id}  address={address.attributes} onReload={onReload}/>
        ))}
    </div>
    )
}
