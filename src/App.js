import React from 'react';
import GlobalStyles from './styles/global';

import * as Atom from './components/Atoms';
import * as Molecules from './components/Molecules';

function App() {
  return (
    <>
      <GlobalStyles />
      <Atom.Container>
        <Atom.Box>
          <Atom.Title label="Título" />
          <Atom.Text label="Oi" />
          <Molecules.FormInput label="Usuário" placeholder="Teste" />
          <Molecules.FormInput label="Senha" placeholder="Teste" />
          <Atom.Button text="Texto" />
        </Atom.Box>
      </Atom.Container>
    </>
  );
}

export default App;
