import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
type Props = {}
const data =
{
  columns: [
    {
      "name": "Job",
      "id": 1,
      "key": "job"
    },
    {
      "name": "Place of work",
      "id": 2,
      "key": "placeOfWork"
    },
    {
      "name": "Age",
      "id": 3,
      "key": "age"
    }
  ],
  rowList: [
    {
      "job": "SE",
      "placeOfWork": "Pune",
      "age": "10"
    },
    {
      "job": "acting",
      "placeOfWork": "EKM"
    },
    {
      "job": "dance",
      "placeOfWork": "TVMM"
    }
  ],
}

const Mui_table = (props: Props) => {
  return (
    <div>
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {
                  data.columns.map((row) =>
                    <TableCell >{row.name}</TableCell>
                  )
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.rowList.map((row: any) => {
                  return <TableRow>
                    {
                      data.columns.map((cols: any) => {
                      {
                        return <TableCell >{row[cols.key]}</TableCell>
                      }
                    })}
                  </TableRow>
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </div>
  )
}

export default Mui_table