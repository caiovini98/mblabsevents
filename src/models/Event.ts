import {Location} from './Location';
import {DateEvent} from './DateEvent';

export type Event = {
  title: string;
  date: DateEvent;
  price: number;
  space: string;
  location: Location;
  image: string;
  description: string;
};
