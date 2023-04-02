import { BasicLayout } from '@/layouts'
import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import {size} from 'lodash'
import { GridGames, NoResult, Pagination, Separator } from '@/shared'


const SearchPage = (Props) => {

    const {games, pagination, searchText} = Props;
    const hasResult = size(games) > 0

    useEffect(() => {
        document.getElementById("search-games").focus(); //practica no recomendable
    
    }, [])
    

    return (
        <>
        <BasicLayout relative isOpenSearch>
            <Container >
                <Separator height={50}/>
                <h2>Buscando:  {searchText}</h2>
                { hasResult ? (
                    <>
                        <GridGames games={games} />
                        <Separator height={30}/>
                        <Pagination currentPage={pagination.page} totalPages={pagination.pageCount} />
                    </>
                ):(
                    <>
                        <NoResult tex="No se han encontrado resultados" />
                    </>
                )}
                  <Separator height={100}/>
            </Container>
        </BasicLayout>
        
        </>
    )
}

export default SearchPage