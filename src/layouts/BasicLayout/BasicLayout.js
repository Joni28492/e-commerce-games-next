import styles from "./BasicLayout.module.scss"
import classNames from 'classnames'
import {Container} from "semantic-ui-react"
import { Footer, TopBar } from "@/components/layouts"


export const BasicLayout = (Props) => {

    const {children, isOpenSearch = false, isContainer = false, relative = false} = Props

  return (
    <>
        {/*Todo TopBar */}
        <TopBar isOpenSearch={isOpenSearch} />
        <Container fluid>
            <div className={classNames({[styles.relative]:relative})}>
                { isContainer ? <Container> {children} </Container> : children}
            </div>
        </Container>
        {/* Todo Fotter */}
        <Footer />
    </>
  )
}
