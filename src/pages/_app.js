import 'semantic-ui-css/semantic.min.css';
import { AuthProvider, CartProvider,  } from '@/context';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/scss/global.scss"



export default function App(props) {

  const { Component, pageProps } = props;

  return  (
  
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
        
  );
}
