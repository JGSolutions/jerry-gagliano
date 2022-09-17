import { format } from 'date-fns';

export default function FormatDate({ dateString }) {
  return <time dateTime={dateString}>{format(new Date(dateString), 'MMMM dd, yyyy')}</time>;
}