import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const SliderSpan = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
border-radius: 34px;
&:before {
  border-radius: 50%;
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

`;
const MoonSpan = styled.span`

position: absolute;
margin: auto;
top: 0;
right: 40px;
bottom: 5px;
left: 0;
width: 20px;
height: 20px;
background-color: transparent;
border-radius: 50%;
box-shadow: 5px 2px 0px 0px #fff; 
`;
const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${SliderSpan}:before{
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: #838383
  }
  &:checked + ${SliderSpan}{
    background-color: black;
  }
  &:checked + ${MoonSpan}{
    background-color: yellow;
    display: block;
  }
`;
const Slider = (props) => {
  const toggle = () => props.cb();

  return (
    <SwitchLabel>
      <CheckBox type="checkbox" onClick={toggle} />
      <SliderSpan>
        <MoonSpan />
      </SliderSpan>
    </SwitchLabel>
  );
};

export default Slider;
// position: absolute;
// margin: auto;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 20px;
// height: 20px;
// background-color: transparent;
// border-radius: 50%;
// box-shadow: 5px 2px 0px 0px #fff;
