import React from 'react'
import { Container } from 'semantic-ui-react'
import {size} from 'lodash'
import { BasicLayout } from '@/layouts'
import { GridGames, NoResult, Pagination, Seo, Separator } from '@/shared'




const PlatformPage = (Props) => {

    const { games, platform, pagination } = Props
    const hasProducts = size(games) > 0;


    return (
      <>
          <Seo title={`Juegos de ${platform.attributes.title}`} />
          <BasicLayout relative >
            <Container>
              <Separator height={50} />
            
              <h2> {platform.attributes.title} </h2>

              {
                hasProducts ? (
                  <>
                    <GridGames  games={games} />
                    <Separator height={30} />
                    <Pagination currentPage={pagination.page}  totalPages={pagination.pageCount} />
                  </>
                ):
                ( <NoResult text={`La categoria ${platform.attributes.title} aunno tiene productos`} /> )
              }

              <Separator height={100} />
            </Container>
          </BasicLayout>
      </>
    )
}
 
export default PlatformPage