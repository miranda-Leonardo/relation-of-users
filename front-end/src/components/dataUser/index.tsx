import { useContext } from "react"
import { Circle, Container } from './styled'
import { FiLogOut } from 'react-icons/fi'
import { Button } from "../Contacts/styled"
import { DataProvider } from "../../context"

const getInitials = (name: string): string => {
  const newName = name.split(' ')

  return newName[0][0] + newName[newName.length-1][0]
}

const DataUser = () => {
  const { user } = useContext( DataProvider )
  console.log(user);

  return user ? (
        <Container>
            <Circle>
                <p>{getInitials(user!.full_name)}</p>
            </Circle>
            <div>
                <p>{user!.full_name}</p>
                <p>{user!.email}</p>
                <p>{user!.telephone}</p>
            </div>
            <Button>
                <FiLogOut />
            </Button>
        </Container>
    )
  :
    (
      <>
        <p>Usuário não logado</p>
      </>
    )
}

export default DataUser
