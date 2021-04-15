import React, { useState } from 'react';
import GlobalStyles from './styles/global';

import * as Atom from './components/Atoms';
import * as Organisms from './components/Organisms';

function App() {
  const [formInput, setFormInput] = useState({
    user: '',
    password: '',
  })

  const handleClick = () => {
    console.log({ formInput })
  }

  return (
    <>
      <GlobalStyles />
      <Atom.Container>
        <Organisms.Form
          title="Bem-vindo!"
          text="Preencha os campos"
          buttonText="ENTRAR"
          type="password"
          onChangeText={(e) => setFormInput(prevState => ({ ...prevState, user: e.target.value }))}
          onChangePassword={(e) => setFormInput(prevState => ({ ...prevState, password: e.target.value }))}
          buttonClick={() => handleClick()}
        />
      </Atom.Container>
    </>
  );
}

export default App;
