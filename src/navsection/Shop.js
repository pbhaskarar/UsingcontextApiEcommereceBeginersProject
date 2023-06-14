import React, { useContext } from 'react'
import { context } from '../context/AppContext'
import { Container } from '@mui/material'
import DataTablesInf from '../components/DataTablesInf'

const Shop = () => {
 const { Quality , name } = useContext(context)
  return (
    <>
    <Container>
      <h1>Welcome {Quality} {' '} {name}</h1>
      <DataTablesInf />
    </Container>
    </>
  )
}

export default Shop