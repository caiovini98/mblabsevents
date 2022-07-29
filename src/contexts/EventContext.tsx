import React, {createContext, useState} from 'react';
import {Event} from '../models/Event';

export const EventContext = createContext<any>({});

export default function EventProvider({children}) {
  const [events, setEvents] = useState<Event[]>([]);

  function buyEvent(
    objEvent: Event,
    price: number,
    quantityTicket: number,
    quantityHalfTicket: number,
  ) {
    const event: Event = {
      ...objEvent,
      valueTotal: price,
      quantityTicket,
      quantityHalfTicket,
    };
    setEvents((arrayEvents: Event[]) => [...arrayEvents, event]);
  }

  return (
    <EventContext.Provider value={{events, buyEvent}}>
      {children}
    </EventContext.Provider>
  );
}
