import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/utils/colors'

export const ReccomendationContainer = styled.div`

  h2 {
    margin: 55px 0;
    text-align: center;
  }

  .Items{
    display:flex;
    height: 377px;
    padding-top: 21px;
  }

  .ItemBox{
    width: 33.33%;
    height: 176px;
    text-align: center;
  
    .Item{
      margin-top: -21px;
      display:flex;
      flex-direction: column;
      height: 267px;

      .Image{ 
        flex: 1 1 auto; 
        img{
          margin: auto;
          max-width: 60%;
          max-height: 170px;
        }

        &.new img{
          max-height: 131px;
        }
      }

      .New{ color: red; flex: 0 0 auto; line-height: 55px; height: 55px;}
      h2{ 
        margin: 0px 0; 
        flex: 0 0 auto; 
        padding: 0 55px;

        .New{ display: none }
      }
      h3{ 
        margin: 8px 0; line-height: 1.3em; flex: 0 0 auto; 
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 34px
      }
    }

  }

  .ItemBox:first-child{ box-shadow: 2px 0px 0px -1px ${colors.darkgrey} }
  .ItemBox:nth-child(2){ box-shadow: 2px 0px 0px -1px ${colors.darkgrey} }

  @media (max-width: 1023px){

    h2{ text-align: left;}

    .Items {
      flex-direction: column;
    }

    .ItemBox:first-child{ box-shadow: 0px 0px 0px 0px ${colors.darkgrey} }
    .ItemBox:nth-child(2){ box-shadow: 0px 0px 0px 0px ${colors.darkgrey} }

    .ItemBox{
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 34px;

      .Item{
        margin: 0;
        display:flex;
        flex-direction: row;
        text-align: left;
        height: auto;

        .New{ display:none; }

        .Image{
          flex: 0 0 25%;
          margin-right: 34px;
          img{ max-height: 100%; max-width: 100%; height: auto; width: 100%; }
        }
        .Text{
          h2,h3{ text-align: left; padding:0; }
          h2 .New{
            display: inline;
            margin-left: 13px;
            font-size: 12px;
            font-weight: 400;
            line-height: initial;
          }
        }

      }
    }
  }
`