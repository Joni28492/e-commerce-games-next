import { Game } from "@/api"
import { GridGames } from "@/shared"
import { useEffect, useState } from "react"

const gameCtrl = new Game()



export const LastestGames = (Props) => {


    const { title, limit = 9,  platformId = null } = Props
    const [games, setGames] = useState(null)

    useEffect(() => {
      
      (async()=> {

        try {
            const response = await gameCtrl.getLastestPublished({limit,platformId})
            setGames(response.data)
        } catch (error) {
            console.error(error)
        }
      })()


    }, [])
    
    if(!games) return null

    return (
        <div>
            <h2>{title}</h2>
            <GridGames games={games} /> 
        </div>
    )
}
