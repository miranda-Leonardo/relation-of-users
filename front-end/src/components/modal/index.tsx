import { ContainerModal } from "./styled"

interface iModal {
  children: JSX.Element
}

const Modal = ({ children }: iModal) => {
  return(
    <ContainerModal>
      { children }
    </ContainerModal>
  )
}

export default Modal
