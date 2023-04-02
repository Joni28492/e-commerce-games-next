import { Info, Settings,Adress, Wishlist,  Orders} from "@/components/account"
import { useAuth } from "@/hooks"
import { BasicLayout } from "@/layouts"
import { Seo, Separator } from "@/shared"
import { useRouter } from "next/router"
import { useState } from "react"
import { Tab } from "semantic-ui-react"
import styles from  "./account.module.scss"





const AccountPage = () => {


  const {user, logout} = useAuth()
  const router = useRouter()
  if(!user){
    router.push("/")
    return null;
  }

  
  const [reload, setReload] = useState(false)

  const onReload = () => setReload( (prevState) => !prevState)

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <Separator height={80} />
          <Orders />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
          <Separator height={80} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Adress.AddAddress onReload={onReload} />
          <Adress.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        key: 20,
        icon: "settings",
        content: "Ajustes"
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailFrom />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    }
  ]


  return (
    <>
      <Seo title="Mi cuenta" />
      <BasicLayout isContainer relative>
        <Info />
        <Tab  menu={{secondary: true, pointing: true}} panes={panes} className={styles.tabs} />
      </BasicLayout>
    </>
  )
}

export default AccountPage