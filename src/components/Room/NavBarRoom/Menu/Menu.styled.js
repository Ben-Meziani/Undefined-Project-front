/* eslint-disable no-confusing-arrow */
/* /* eslint-disable import/prefer-default-export
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 1005;
  top: 0;
  left: 0;
  
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  transition: transform 0.3s ease-in-out;

  .menu-dropdown-item {
    position: relative;
    font-size: 2em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    color: black;
    transition: color 0.3s linear;
    text-align: left;
    z-index: 1006;

    &:hover {
      color: red;
    }
    
    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: #231f20;
    }
  }
  
  @media (max-width: 400px) {
    width: 80%;
    margin-top: 0.5em;
  }

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
}

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  }
`; */

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #d2b181;
  opacity: 0.8;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }
  @media (min-width: 767px) {
      width: 30%;
      justify-content: flex-start;
    }

    @media (min-width: 1400px) {
      width: 20%;
    }

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #231f20;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.2rem;
      text-align: left;
    }

    @media (min-width: 767px) {
      font-size: 1.2rem;
      text-align: left;
    }

    &:hover {
      color: #a53e31;
    }
  }
`;
