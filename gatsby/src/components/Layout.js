import React, { useState } from 'react';
import Nav from './Nav';
import 'normalize.css';
import Cursor from './Cursor';
import Footer from './Footer';

export default function Layout({ children }) {
  // TODO: update each page tp setEventTrigger with new val + inside single page
  const [eventTrigger, setEventTrigger] = useState(1);

  return (
    <>
      <div>
        <Nav />
        {React.cloneElement(children, { setEventTrigger, eventTrigger })}
        <Cursor eventTrigger={eventTrigger} />
      </div>
      <Footer />
    </>
  );
}
