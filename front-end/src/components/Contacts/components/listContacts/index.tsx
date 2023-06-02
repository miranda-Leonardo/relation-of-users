import { useContext } from "react"
import { FaEdit } from "react-icons/fa"
import { Button } from "../../styled"
import { Alert, Item } from "./styled"
import { AiFillDelete } from "react-icons/ai"
import { DataProvider } from "../../../../context"

const ListContacts = () => {
  const { contacts } = useContext( DataProvider )

  return contacts[0] ?
  (
    <ul>
      {
        contacts.map(({ id, full_name, email, telephone, additional_data }) => {
          return(
            <Item key={id}>
                <div>
                    <p>Name: {full_name}</p>
                    <p>{`Email: ${email} ${additional_data ? `| ${additional_data.email}` : ""}`}</p>
                    <p>{`Telefone: ${telephone} ${additional_data ? `| ${additional_data.telephone}` : ""}`}</p>
                </div>
                <div>
                    <Button>
                        <FaEdit />
                    </Button>
                    <Button>
                        <AiFillDelete />
                    </Button>
                </div>
            </Item>
          )
        })
      }
    </ul>
    )
  :
    (
      <>
        <Alert>Sem contatos no momento</Alert>
      </>
    )
}

export default ListContacts
