import { Separator } from "@/shared"
import { Container } from "semantic-ui-react"
import { Gallery } from "./Gallery"
import { Video } from "./Video"

export const Media = (Props) => {

    const {video, screenshots} = Props

    return (
        <Container>
            <h2>Visuales</h2>
            <Separator height={30} />
            <Video  video={video} />
            <Separator height={30} />
            <Gallery  screenshots={screenshots} />

        </Container>
    )
}
