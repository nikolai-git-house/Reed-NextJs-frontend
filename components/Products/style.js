import styled, { css, keyframes } from "styled-components";
import colors from "../../styles/utils/colors";

export const ProductListContainer = styled.div`
  display: flex;
`;

export const ProductThumb = styled.div`
  text-decoration: none;
  color: #172b4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 350px;
  @media (max-width: 767px) {
    width: 90%;
  }
  margin-left: 3.33%;
  box-shadow: 0px 1px 2px 1px #f3f3f3;
  text-align: center;
  a {
    cursor: pointer;
  }
  a:hover {
    color: #0065ff;
  }
  div {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 30px;
    margin-top: 70px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 25px;
    margin: 0;
  }
`;

export const ProductDetailContent = styled.div`
  p {
    font-weight: 400;
  }

  .ProductBreadcrum {
    .Separator {
      margin: 0 13px;
    }
    .Blue {
      color: ${colors.blue};
    }
    margin-bottom: 45px;
  }

  .Hero {
    display: flex;
    .left {
      flex: 0 0 40%;
      margin-right: 10%;
    }
    .right {
      flex: 0 0 50%;
    }

    .Title {
      margin-bottom: 0;
    }
    .Description {
      margin-top: 0;
    }
  }

  .Contact,
  .Contact-Mobile {
    border-top: 1px solid ${colors.grey};
    margin-top: 34px;
    padding: 21px 0;

    p {
      margin: 0;
      padding: 0;
      margin-bottom: 34px;
    }

    p a {
      color: ${colors.blue};
      text-decoration: none;
      float: right;
    }
    button {
      display: block;
      width: 100%;
    }
  }

  .Contact-Mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    .Hero {
      flex-direction: column;
    }
    .left {
      flex: 0 0 100%;
      margin-right: 0;
    }
    .right {
      flex: 0 0 100%;
    }
    .Contact {
      display: none;
    }
    .Contact-Mobile {
      display: block;
    }
  }

  .ProductInfo {
    padding: 34px 0;
    border-top: 1px solid ${colors.grey};
    margin-top: 34px;

    h2 {
      margin-bottom: 34px;
    }
  }

  .DetailTable {
    display: flex;
    padding: 21px 0;
    padding-bottom: 34px;
    border-top: 1px solid ${colors.grey};

    p {
      margin: 0;
    }
    .left {
      flex: 0 0 233px;
      font-weight: bold;
    }
    .right {
      flex: 1 1 auto;
    }
  }

  .Inthebox {
    padding: 21px 0;
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};

    .title {
      margin-bottom: 34px;
    }

    .items {
      margin-left: -5%;
      margin-top: -2%;
    }
    .item {
      display: inline-block;
      width: 25%;
      padding-left: 5%;
      padding-top: 5%;
      box-sizing: border-box;
      img {
        margin-bottom: 13px;
      }
      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 767px) {
    .Inthebox {
      .item {
        width: 50%;
      }
    }
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .Images {
    height: 180px;
    position: relative;
    transition: all 500ms;

    .ImageContainer {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .Dots {
    text-align: center;

    .Dot {
      display: inline-block;
      width: 13px;
      height: 21px;
      line-height: 21px;
      text-align: center;
      cursor: pointer;
      font-size: 21px;
      color: ${colors.darkgrey};
    }

    .Dot:hover,
    .Dot.active {
      color: ${colors.blue};
    }
  }
`;
