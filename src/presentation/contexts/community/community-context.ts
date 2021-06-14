import { createContext } from 'react'

type Props = {
  visible?: boolean
  setVisible?: (visible: boolean) => void
  group?: any
  setGroup?: (group: any) => void
}

export default createContext<Props>(null)
