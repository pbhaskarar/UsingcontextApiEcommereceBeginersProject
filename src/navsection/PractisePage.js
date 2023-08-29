import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const PracticePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object to represent the data entry
    const newEntry = {
      id: uuidv4().slice(0, 5),
      name,
      email,
      amount: parseFloat(amount),
    };

    // Update the data state with the new entry
    setData((prevData) => [...prevData, newEntry]);

    // Clear the input fields after submission
    setName("");
    setEmail("");
    setAmount("");
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure to delete?")) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    }
  };

  const getTotal = () => {
    return data.reduce((total, entry) => {
      if (!isNaN(entry.amount)) {
        return total + entry.amount;
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Name"
              variant="filled"
              color="success"
              focused
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              label="Email"
              variant="filled"
              color="success"
              focused
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              label="Amount"
              variant="filled"
              color="success"
              focused
              name="amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <Button type="submit">Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.id}</TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.email}</TableCell>
                    <TableCell>{entry.amount}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(index)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right">{getTotal()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PracticePage;
