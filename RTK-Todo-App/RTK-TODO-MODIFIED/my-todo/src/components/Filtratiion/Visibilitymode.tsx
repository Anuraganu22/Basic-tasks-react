
import DateFilterButton from './DateFilterButton'


import Button from '@mui/material/Button';
import { DateFilter } from '../../Redux/filter/dateFilter'

export default function Footer(): JSX.Element {
  return (
    <div>
      <span>Show:</span>
      <DateFilterButton dateFilter={DateFilter.ShowAllDates} text={"All"}  />
      <DateFilterButton dateFilter={DateFilter.Showtoday} text={"Today"} />
      <DateFilterButton dateFilter={DateFilter.Showyesterday} text={"Yesterday"} />
      <DateFilterButton dateFilter={DateFilter.Showlastweek} text={"lastweek"} />
    </div>
  );
}