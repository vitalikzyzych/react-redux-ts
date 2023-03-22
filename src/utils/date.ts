import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function formattedDate(date: string | Date | number) {
  return dayjs(date).format('DD-MM-YYYY');
}

export function formattedDateTime(date: string | Date | number) {
  return dayjs(date).format('DD-MM-YYYY HH:mm');
}
