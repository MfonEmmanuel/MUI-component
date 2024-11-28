import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
} from "@mui/material";

// Sample data for the table
const tableData = [
  {
    id: 1,
    first_name: "Julie",
    last_name: "Ruff",
    email: "jruff0@theglobeandmail.com",
    gender: "Female",
    ip_address: "25.39.152.153",
  },
  {
    id: 2,
    first_name: "Zulema",
    last_name: "Frediani",
    email: "zfrediani1@ning.com",
    gender: "Female",
    ip_address: "95.72.9.122",
  },
  {
    id: 3,
    first_name: "Dewitt",
    last_name: "Hakonsen",
    email: "dhakonsen2@eepurl.com",
    gender: "Male",
    ip_address: "116.202.104.94",
  },
  {
    id: 4,
    first_name: "Petunia",
    last_name: "Amerighi",
    email: "pamerighi3@shutterfly.com",
    gender: "Female",
    ip_address: "112.193.81.211",
  },
  {
    id: 5,
    first_name: "Barbabas",
    last_name: "Eyckel",
    email: "beyckel4@scribd.com",
    gender: "Male",
    ip_address: "85.193.63.79",
  },
  {
    id: 6,
    first_name: "Lind",
    last_name: "Hamblett",
    email: "lhamblett5@sohu.com",
    gender: "Female",
    ip_address: "230.20.88.187",
  },
  {
    id: 7,
    first_name: "Tasia",
    last_name: "Titterington",
    email: "ttitterington6@homestead.com",
    gender: "Female",
    ip_address: "244.212.1.77",
  },
  {
    id: 8,
    first_name: "Germayne",
    last_name: "Gingel",
    email: "ggingel7@indiatimes.com",
    gender: "Male",
    ip_address: "28.199.107.19",
  },
  {
    id: 9,
    first_name: "Alfonso",
    last_name: "Scandred",
    email: "ascandred8@usgs.gov",
    gender: "Agender",
    ip_address: "27.242.248.45",
  },
  {
    id: 10,
    first_name: "Heywood",
    last_name: "Bettanay",
    email: "hbettanay9@biblegateway.com",
    gender: "Genderfluid",
    ip_address: "38.141.133.219",
  },
];

// Memoized component to prevent unnecessary re-renders
const MuiTable = React.memo(() => {
  return (
    // TableContainer provides a scrollable container for the table
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default MuiTable;
