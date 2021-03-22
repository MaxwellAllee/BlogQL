import React, { useContext } from 'react';
import styled from 'styled-components';
import StyleContext from '../../contexts/StyleContext';
import Slider from '../Slider';

const MainHeader = styled.header`
  background: ${(props) => props.secondary};
`;
const HeaderContents = styled.div`    
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  padding-right: 25px;
`;
const Header = () => {
  const styleCont = useContext(StyleContext);
  return (
    <MainHeader secondary={styleCont.secondary}>
      <HeaderContents>
        <Slider cb={styleCont.themeSwitcher} />
      </HeaderContents>
    </MainHeader>
  );
};

export default Header;
