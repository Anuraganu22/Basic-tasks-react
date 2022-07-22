import React from 'react'

import { setDateFilter, DateFilter } from '../../Redux/filter/dateFilter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Reducers/rootReducer';

interface FilterButtonProps {
  dateFilter: DateFilter,
  text: string,
  
}

export default function DateFilterButton({ dateFilter, text }: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();

  const currentvisibilityFilter = useSelector(
    (state: RootState) => state.dateFilter
  );

  return (
    <button
      disabled={currentvisibilityFilter === dateFilter}
      onClick={() => dispatch(setDateFilter(dateFilter))}>
      {text}
    </button>
  );
}