import { useContext, useState } from "react"
import { DataProvider } from "../../context"
import ListContacts from "./components/listContacts"
import { Button, Container, ContainerContact } from "./styled"
import { AiOutlineUserAdd } from "react-icons/ai"
import RegisterUser from "../registerUser"
import Modal from "../modal"

const Contacts = () => {
  const { user } = useContext( DataProvider )
  const [modal, setModal] = useState(false)

  return user ? (
    <Container>
      {modal ? (
        <Modal>
          <ContainerContact>
            <RegisterUser title="Criar contato"/>
            <Button onClick={() => setModal(false)}>
              Cancelar
            </Button>
          </ContainerContact>
        </Modal>
      ) : (<></>)}
      <div className="header">
          <h2>Contatos:</h2>
          <Button onClick={() => setModal(true)}>
              <AiOutlineUserAdd />
          </Button>
      </div>
      <ListContacts />
    </Container>
  )
  :
  ( <></> )
}

export default Contacts
