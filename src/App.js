import React from 'react';
import logo from './logo.svg';
import './App.css';

import conctact from '/Contact.js';

const App = props => {
  const name = 'name';
  const avatar = 'avatar';
  const online = true;
  const contact={
      name: "Jean",
      avatar: "pouet",
      online: true,
  }
  return (
      <div>
          <Contact 
              name="Kenzo"
              avatar="https://www.pokepedia.fr/images/thumb/f/f2/L%C3%A9viator-RFVF.png/250px-L%C3%A9viator-RFVF.png"
              online="true"
          />
          <Contact 
              name="Maissa"
              avatar="https://i.skyrock.net/9729/74579729/pics/2940117767_1_3.jpg"
              online="false"    
          />
          <Contact 
              name="Imran"
              avatar="https://www.pokepedia.fr/images/thumb/3/39/Carapuce_de_Sacha.png/300px-Carapuce_de_Sacha.png"
              online="true"
          />
      </div>
  );
};

export default App;