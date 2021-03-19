import React, { useState } from 'react';
import styled from 'styled-components';
import StyleContext from '../../contexts/StyleContext';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';

function App() {
  const [styleCont, setStyleCont] = useState(
    {
      primary: '#FFE66D',
      secondary: '#6CA6C1',
      link: '#2F3061',
      background: '#F7FFF7',
      text: '#343434',
      darkTheme: {
        primary: '#712F79',
        secondary: '#F7996E',
        link: '#A06B9A',
        background: '#001021',
        text: '#F7FFF7',
      },
      lightTheme: {
        primary: '#FFE66D',
        secondary: '#6CA6C1',
        link: '#2F3061',
        background: '#F7FFF7',
        text: '#343434',
      },
      currentTheme: 'lightTheme',
      themeSwitcher: () => {
        setStyleCont((curr) => {
          const nextTheme = curr.currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
          return { ...curr, ...curr[nextTheme], currentTheme: nextTheme };
        });
      },
    },
  );
  const MainDiv = styled.div`
    background-color: ${styleCont.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${styleCont.text};
  `;
  const Button = styled.a`
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: 2px solid white;
    cursor: pointer;
    background: ${styleCont.secondary};
    color: ${styleCont.text};
  `;
  const ButtonSwitch = styled.button`
    border-radius: 8px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    background: ${styleCont.primary};
    color: ${styleCont.text};
    border: 2px solid white;
    cursor: pointer;
    font-size: calc(10px + 2vmin);
  `;
  return (
    <>
      <StyleContext.Provider value={styleCont}>
        <Header />
        <MainDiv>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code> src/App.js </code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>test</Button>
          <ButtonSwitch
            onClick={styleCont.themeSwitcher}
          >
            Theme
          </ButtonSwitch>
        </MainDiv>
      </StyleContext.Provider>
    </>
  );
}

export default App;
