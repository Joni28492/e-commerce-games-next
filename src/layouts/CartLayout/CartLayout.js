import { Footer, HeaderCart } from '@/components/layouts';
import { Separator } from '@/shared'
import React from 'react'
import { Container } from 'semantic-ui-react'



export const CartLayout = (Props) => {

    const {children} = Props;


  return (
    <>
        <HeaderCart />
        {/* todo header */}
        <Separator height={150} />
        <Container>
            {children}
        </Container>
        <Separator height={70} />
        <Footer />
    </>
  )
}
