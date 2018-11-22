import styled, { css, keyframes } from "styled-components";
import colors from "../../styles/utils/colors";
import helpers from "../../styles/utils/helpers";

export const NavWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => (props.dark ? colors.line8 : "white")};
  margin-bottom: 2.5rem;
  ul {
    margin: 0;
  }
  li {
    display: inline;
    margin: 0;
    color: ${props => (props.dark ? colors.blue : "white")};

    a {
      color: ${props => (props.dark ? colors.blue : "white")};
      text-decoration: none;
      font-weight: 500;
    }
  }
`;

export const Menu = styled.ul`
  display: ${props => (props.showMenu ? "flex" : "none")};

  li a,
  li span {
    display: inline-block;
    line-height: 73px;
    margin-right: 34px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    li {
      height: 44px;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 760px) {
    display: flex;
  }
`;

export const Left = styled.div`
  flex: 1;
  img {
    display: block;
    cursor: pointer;
    @media (min-width: 760px) {
      display: none;
    }
    @media (max-widt: 760px) {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
  .dashboard_menu {
    @media (min-width: 760px) {
      display: none;
    }
  }
  button {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Right = styled.div`
  flex: 0 auto;
  align-items: center;
  display: flex;
  li {
    font-weight: bold;
    font-family: Barlow;
  }
  button {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
