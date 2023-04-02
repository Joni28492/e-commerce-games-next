import {Confirm as ConfirmSU} from 'semantic-ui-react'

export const Confirm = (Props) => {

    const {...rest} = Props

  return <ConfirmSU  className="confirm" size="mini" {...rest} />
}


