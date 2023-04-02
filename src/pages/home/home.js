import { Home } from "@/components/Home"
import { BasicLayout } from "@/layouts"
import { BannerAd, BarTrust, Seo, Separator } from "@/shared"
import { Container } from "semantic-ui-react"


const platformsId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
}


export default function HomePage() {

 

  return (
    <>
      <Seo />
      <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />

        <Container>
          <Home.LastestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />
          <BarTrust />
        <Separator height={100} />
        <Container>
        <Home.LastestGames title="PlayStation" limit={3} platformId={platformsId.playstation}/> 
        </Container>
        <Separator height={100} />
        <BannerAd  
          title="Registrate y obten los mejores precios" 
          subtitle="¡Compara con otros juegos y elige el tuyo!" 
          btnTitle="Entra ahora" 
          btnLink="/account"
          image="/images/img01.png"
          
        />
        <Separator height={50} />
        <Container>
          <Home.LastestGames title="Xbox" limit={3} platformId={platformsId.xbox}/> 
        </Container>
        <Separator height={100} />

      </BasicLayout>
    </>
  )
}

