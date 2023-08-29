import React, { useContext, useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid, TextField } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { context } from '../context/AppContext';
import { CSVLink } from 'react-csv';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const DataTablesInf = () => {
    const {user, setUser} = useContext(context);
    // console.log(user)
    const [search, setSearch] = useState('')
    
const deleteHandle = (id) =>{
    const updatedData = user.filter((row) => row.id !== id)
    setUser(updatedData)
}
const hadleSearch = (e) =>{
  setSearch(e.target.value)
}

const updatedSearch = user.filter((item) =>
item.name.toLowerCase().includes(search.toLocaleLowerCase())
)

const currentDate = new Date().toLocaleDateString(); // Get the current date

  // Create a new array that includes the date along with each row of user data
  const dataWithDate = updatedSearch.map((row) => ({
    Date: currentDate,
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone.slice(0, 9),
    username: row.username,
  }));

  return (
    <>
    <Container>
     <Grid sx={{justifyContent: 'center', alignItems: 'center'}}> 
     <TextField label='search' value={search} onChange={hadleSearch} /> 
     <CSVLink data={dataWithDate} filename={`export_${currentDate}.csv`}>Export</CSVLink>
     </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="left">name</StyledTableCell>
            <StyledTableCell align="left">email</StyledTableCell>
            <StyledTableCell align="left">phone</StyledTableCell>
            <StyledTableCell align="left">username</StyledTableCell>
            <StyledTableCell align="left">delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedSearch.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.phone.slice(0,9)}</StyledTableCell>
              <StyledTableCell align="left">{row.username}</StyledTableCell>
              <StyledTableCell align="left"><Button onClick={()=>{deleteHandle(row.id)}}><DeleteRoundedIcon sx={{color: 'red'}} /></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  )
}

export default DataTablesInf