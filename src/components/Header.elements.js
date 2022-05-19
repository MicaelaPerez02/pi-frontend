import styled from "styled-components";

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 767px) {
    background-color: var(--main-color);
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "25%" : "100%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-left: 18rem;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    svg {
      fill: #e07924;
      margin-right: 0.5rem;
    }
    
  }
`;