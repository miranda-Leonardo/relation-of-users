import { useContext } from "react"
import { Circle, Container } from './styled'
import { FiLogOut } from 'react-icons/fi'
import { Button } from "../Contacts/styled"
import { DataProvider } from "../../context"
import RegisterUser from "../registerUser"

const getInitials = (name: string): string => {
  const newName = name.split(' ')

  return newName[0][0] + newName[newName.length-1][0]
}

const DataUser = () => {
  const { user, setUser } = useContext( DataProvider )

  return user ? (
        <Container>
            <Circle>
                <p>{getInitials(user.full_name)}</p>
            </Circle>
            <div>
                <p>{user.full_name}</p>
                <p>{`${user.email} ${user.additional_data ? `| ${user.additional_data.email}` : ""}`}</p>
                <p>{`${user.telephone} ${user.additional_data ? `| ${user.additional_data.telephone}` : ""}`}</p>
            </div>
            <Button onClick={() => setUser(undefined)}>
                <FiLogOut />
            </Button>
        </Container>
    )
  :
    (
      <>
        <RegisterUser />
      </>
    )
}

export default DataUser
