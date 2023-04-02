const { ENV, authFetcher } = require("@/utils");

export class Wishlist {


    async check(userId, gameId) {


        try {
            
            const filterUser = `filters[user][id][$eq][0]=${userId}`;
            const filterGame = `filters[game][id][$eq][1]=${gameId}`

            const urlParams = `${filterUser}&${filterGame}`;

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

            const response = await authFetcher(url);
            const result = await response.json()
            
            if(response.status !== 200) throw result;

            if(result.data.length === 0) return false;

            return result.data[0]


        } catch (error) {
            throw error;
        }


    }

    async add(userId, gameId) {

        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
            const params = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        user: userId,
                        game: gameId,
                    }
                })
            };

            const response = await authFetcher(url,params);
            const result = await response.json()

            if(response.status !== 200) throw result;
            
            return result.data;
            
        } catch (error) {
            throw error;
        }


    }


    //es el id del registro
    async delete(id) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${id}`;
            const params = { method: 'DELETE'}

            const response = await authFetcher(url,params);
            const result = await response.json()

            if(response.status !== 200) throw result;
            
            return result.data;

        } catch (error) {
            throw error
        }
    }


    async getAll(userId) {

        try {
            const filters = `filters[user][id][$eq]=${userId}`;
            const populate = "populate[0]=game&populate[1]=game.cover"
            
            const urlParams = `${filters}&${populate}`

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

            const response = await authFetcher(url);
            const result = await response.json()

            if(response.status !== 200) throw result;
            
            return result.data;

            
        } catch (error) {
            throw error;
        }


    }

}