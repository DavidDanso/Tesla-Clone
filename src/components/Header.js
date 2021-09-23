import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <TopMenu>
        <p>
          <span>Read Tesla's 2020 Impact Report</span>
        </p>
      </TopMenu>
      <a href="/">
        <img src="/images/teslaLogoSmall.svg" alt="" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <a href="/#" onClick={() => setBurgerStatus(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-In</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Power Wall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Find Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Investors Relationships</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 8.4vh;
  padding: 0 20px;
  z-index: 1;
`;

const TopMenu = styled.div`
  background: var(--bg-color);
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 40px;
  z-index: 16;

  p {
    font-family: var(--text-font);
    color: var(--text-color);
    leter-spacing: 1px;
    font-size: 1.8vh;
    margin: 18px 0;

    span {
      border-bottom: 1px solid var(--text-color);
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;

  a {
    font-family: var(--text-font);
    color: var(--text-color);
    leter-spacing: 1px;
    font-size: 1.8vh;
    margin: 0 10px;
  }
`;

const RightMenu = styled(Menu)``;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--bg-color);
  width: 300px;
  z-index: 20;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-family: var(--text-font);
    color: var(--text-color);
    leter-spacing: 1px;
    font-size: 1.7vh;
    text-transform: capitalize;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3vh;
  cursor: pointer;
`;

const CustomClose = styled(CloseIcon)``;
export default Header;
