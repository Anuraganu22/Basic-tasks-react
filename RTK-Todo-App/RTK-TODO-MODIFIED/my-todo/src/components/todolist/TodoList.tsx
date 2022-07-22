import React from 'react'
//import TodoListItem from './TodoListItem'
import { RootState } from '../../Redux/Reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { DateFilter } from '../../Redux/filter/dateFilter';
import { Todo } from '../../Redux/types';

//Meterial ui imports

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const getVisibleTodos = (todos: Todo[], filter: DateFilter) => {
  console.log(todos,"!!!!!");
  console.log(filter,"@@@@");

  switch (filter) {
    case DateFilter.ShowAllDates:
      return todos
    case DateFilter.Showtoday:
      return todos.filter(t => t.day)
    case DateFilter.Showyesterday:
      return todos.filter(t => moment().subtract(1, 'days').calendar())
    case DateFilter.Showlastweek:
      return todos.filter(t => moment().subtract(6, 'days').calendar())
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: RootState) => getVisibleTodos(state.todos, state.dateFilter)
  );
  console.log(todos, "####")
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center" >Text</TableCell>
            <TableCell>Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(todo => (
            <TableRow
              key={todo.id}
            >
              <TableCell align='center'>{todo.text}</TableCell>
              <TableCell>{todo.day}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}