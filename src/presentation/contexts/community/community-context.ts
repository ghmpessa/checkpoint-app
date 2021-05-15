import { createContext } from 'react'

type Props = {
  visible?: boolean
  setVisible?: (visible: boolean) => void
}

export default createContext<Props>(null)
