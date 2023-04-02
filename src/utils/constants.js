export const ENV = {
    // SERVER_HOST: "http://192.168.1.94:1337",//el SSR da problemas si usamos localhost usar la ip directamente
    // API_URL: "http://192.168.1.94:1337/api",
    SERVER_HOST: "https://games-ecommerce.up.railway.app",
    API_URL: "https://games-ecommerce.up.railway.app/api",
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/local/register",
            LOGIN: "auth/local",
        },
        USERS_ME: "users/me",
        USERS: "users",
        PLATFROM: "platforms",
        ADDRESS: "adresses",
        GAME: "games",
        WISHLIST: "whislists",
        PAYMENT_ORDER: "payment-order",
        ORDER: "orders",
    },
    TOKEN: "token",
    CART: "cart",
    STRIPE_TOKEN:"pk_test_51MiDHHLvo3juCzlZ1OkHUDTStR12hvjIlhwvz2TRzeXrtdeILowL8gplH1gSObisuOjVGOZ6NEGWORGlVyAWdPXW00lOfQzxqk",
}


