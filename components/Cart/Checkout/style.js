import styled, { css, keyframes } from 'styled-components';
import colors from '../../../styles/utils/colors'

export const ShippingItem = styled.div`

  position:relative;
  margin-bottom: 34px;

  &>div{
    border: 1px solid ${colors.grey};
    padding: 18px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 55px;
    border-radius: 3px;
  }

  p { margin: 0; }

  &>div.active{
    border: 1px solid ${colors.green};  
  }

  &>button{
    position:absolute;
    top: 8px;
    right: ${55+8}px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 21px;
    width: 21px;
  }
`