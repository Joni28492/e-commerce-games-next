import  styles  from "./sign-up.module.scss";
import Link  from "next/link";
import { RegisterForm } from "@/components/Auth";
import { JoinLayout } from "@/layouts";
import { Seo } from "@/shared";




const signUpPage = () => {
  return (
    <>
    <Seo title="registrarse" />
    <JoinLayout>
      <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in" >Atras</Link>
          </div>
      </div>
    </JoinLayout>
    </>
  )
}



export default signUpPage