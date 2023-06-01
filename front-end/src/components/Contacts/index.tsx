import ListContacts from "./components/listContacts"
import { Button, Container } from "./styled"
import { AiOutlineUserAdd } from "react-icons/ai"

const Contacts = () => {
    return(
        <Container>
            <div className="header">
                <h2>Contatos:</h2>
                <Button>
                    <AiOutlineUserAdd />
                </Button>
            </div>
            <ListContacts />
        </Container>
    )
}

export default Contacts
