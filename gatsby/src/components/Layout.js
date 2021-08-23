import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import Cursor from './Cursor';

export default function Layout({ children }) {
  // TODO: update each page tp setEventTrigger with new val + inside single page
  const [eventTrigger, setEventTrigger] = useState(1);

  return (
    <>
      <Nav />
      {React.cloneElement(children, { setEventTrigger, eventTrigger })}
      <Cursor eventTrigger={eventTrigger} />
    </>
  );
}
