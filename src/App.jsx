import './App.css';
import { useState } from "react";
import { VisibilityContext } from './VisibilityContext'; 

import styled from 'styled-components';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const Wrapper = styled.section`

  width: 740px;
  margin: 0 auto;
  background: #f6f6f6;
  font-family: 'Nunito', sans-serif;

  @media(max-width: 739.9px) {
    width: 100vw;
    min-width: 350px;
  }
  `;

  const HeaderWrap = styled.section`
      position: sticky;
    top: 0;
    z-index: 5;
  `;

function App() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = (value) => {
    setVisibility(value);
  }
  return (
  <VisibilityContext.Provider value={{visibility: visibility, toggleVisibility: toggleVisibility}}>
      <Wrapper>
        <HeaderWrap>
        <Header />
        <Navigation />
        </HeaderWrap>
        <Main />
        <Footer />
      </Wrapper>
    </VisibilityContext.Provider>
  );
}

export default App;
