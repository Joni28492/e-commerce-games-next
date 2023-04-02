
import { Platfrom } from '@/api'
import { useEffect, useState } from 'react'
import {map} from 'lodash';
import { Image, Icon, Input } from 'semantic-ui-react'
import styles from './Menu.module.scss'
import Link from "next/link"
import {useRouter} from 'next/router'

import classNames from 'classnames'
import { ENV } from '@/utils';

const platfromCtrl = new Platfrom()

export const Menu = (Props) => {

    const {isOpenSearch} = Props
    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch] = useState(isOpenSearch)
    const [searchText, setSearchText] = useState("")
    const router = useRouter()

    const openCloseSearch = () => setShowSearch((prevState)=>!prevState)

    useEffect(() => {
        
        ( async ()=>{
            try {
                const response = await platfromCtrl.getAll()
                setPlatforms(response.data)
            } catch (error) {
                console.error(error)
            }
        })()
    
      
    }, [])


    useEffect(() => {
      
        setSearchText(router.query.s || "")


    }, [])
    


    const onSearch = (text) => {
        setSearchText(text)
        router.replace(`search?s=${text}`)
    }
    

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`} />
                    {platform.attributes.title}
                </Link>
            ))}

            <button 
                className={styles.search} 
                onClick={openCloseSearch}>
                <Icon name="search"/>
            </button>


            <div className={classNames(styles.inputContainer, {
                [styles.active]: showSearch,
            })}>
                <Input 
                    onChange={(_, data) => {
                         onSearch(data.value)
                    }}
                    value={searchText}
                    id="search-games" placeholder="Buscador" className={styles.input} focus type='text'/>
                <Icon name='close' className={styles.closeInput} onClick={openCloseSearch} />
            </div>
        </div>
    )

}
