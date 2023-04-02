

import Head from 'next/head'

export const Seo = (Props) => {


    const {title = "Gaming - Tus juegos favoritos", description = "Tus juegos favoritos para steam,Playstation, Xbox, Switch al mejor precio"} = Props

  return (
    <Head>
        <title>{title}</title>
        <meta property='description' content={description} />

    </Head>
  )
}
