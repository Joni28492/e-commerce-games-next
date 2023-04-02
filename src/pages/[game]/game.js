import { Game } from "@/components/Game"
import { BasicLayout } from "@/layouts"
import { Seo, Separator, WishListIcon } from "@/shared"


const GamePage = (Props) => {
    const {game} = Props
    // console.log(Props)
    const wallpaper =game.attributes.wallpapper

    return (
      <>
            <Seo title= {game.attributes.title} description={game.attributes.summary} />
          <BasicLayout>
              <Game.HeaderWallpaper image={wallpaper.data.attributes.url} />
              <Game.Panel  gameId={game.id}  game={game.attributes} />
              <Separator height={50} />
              <Game.Info  game={game.attributes} />
              <Separator height={30} />
              <Game.Media  video = {game.attributes.video}  screenshots={game.attributes.screenshots.data}/>
              <Separator height={50} />
              

          </BasicLayout>
      </>
    )
}

export default GamePage