import { Game, Platfrom } from '@/api';
export {default} from './platform'




export async function getServerSideProps(context) {
    
    const {query, params} = context;
    const { page = 1 } = query;
    const { platform }  = params
    
    const platformCtrl = new Platfrom()
    const responsePlatform = await platformCtrl.getBySlug(platform)
    
    const gameCtrl = new Game()
    const repsonseGame = await gameCtrl.getGamesByPlatformSlug(platform, page)

    return {
        props: {
            platform: responsePlatform,
            games: repsonseGame.data,
            pagination: repsonseGame.meta.pagination,
        }
    }

}  