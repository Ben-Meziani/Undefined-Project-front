/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(241, 230, 219);
  opacity: 0.9;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 400px) {
    width: 80%;
  }

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  @media (min-width: 1600px) {
    font-size: 1.5em;
    text-align: center;
    width: 20%;
  }

  .menu-dropdown-item {
    font-size: 1em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;

    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: #494052;

      @media (max-width: 400px) {
        margin-top: 0.5em;
      }

      &:hover {
        color: black;
      }
    }
    
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  }
`;
