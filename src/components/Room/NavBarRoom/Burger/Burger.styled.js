/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBurger = styled.button`
position: absolute;
top: 1%;
left: 0.4%;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 3rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 2100;

@media (min-width: 767px) {
  position: absolute;
  left: 1em;
  top: 3%;
}

@media (min-width: 1024px) {
  position: absolute;
  left: 1em;
  top: 2%;
}

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: #d2b181;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
}
`;
