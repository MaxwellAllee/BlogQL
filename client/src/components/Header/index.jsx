import React, { useContext } from 'react';
import styled from 'styled-components';
import StyleContext from '../../contexts/StyleContext';

const Header = () => {
  const styleCont = useContext(StyleContext);
  const MainHeader = styled.header`
    background: ${styleCont.secondary};
  `;
  const HeaderContents = styled.div`    
    display: flex;
    justify-content: flex-end;
    padding: 10px
  `;
  return (
    <MainHeader>
      <HeaderContents>
        <button type="button">
          test
        </button>
      </HeaderContents>
    </MainHeader>
  );
};

export default Header;
