import {Table,TableHead,TableBody,TableRow,TableCell ,styled, Button} from '@mui/material'
import { getUsers ,deleteuser} from '../service/api'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;


const AllUsers = () => {

  const [users, setUsers] = useState([])
  console.log(users,"+++++");

  useEffect(() => {
    getAllUsers()
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers()
    setUsers(response.data)
  }
  
  const deleteuserDetails = async (id) => {
    await deleteuser(id);
    getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>

</THead>
      </TableHead>
      <TableBody key={users._id}>
        {users.map(user => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant='contained' color="secondary" onClick={()=> deleteuserDetails(user._id)}>Delete</Button>
            </TableCell>
  </TableRow>
))}
      </TableBody>
  </StyledTable>
  )
}

export default AllUsers