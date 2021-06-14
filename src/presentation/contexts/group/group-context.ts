import { createContext } from 'react'

type Props = {
  visible?: boolean
  setVisible?: (visible: boolean) => void
  text?: string
  setText?: (text: string) => void
  loading?: any
  setLoading?: (loading: any) => void
}

export default createContext<Props>(null)
