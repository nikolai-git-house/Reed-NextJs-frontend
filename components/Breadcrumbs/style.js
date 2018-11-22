import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/utils/colors'

export const BreadcrumbContainer = styled.div`
  padding: 0 2rem;
  margin-top: 34px;

  @media (max-width: 766px){
    margin:0;
    padding:0;
    width: 100%;
    background: ${colors.grey};
    height: 28px;
    padding: 1px 0;
    box-sizing: border-box;
  }
`

export const Breadcrumb = styled.div`
  
  display:inline-block;
  line-height: 1.68em;
  background: ${colors.blue};
  margin-right:15px;
  margin-bottom:13px;
  box-sizing: border-box;
  position: relative;

  &:after{
    position: absolute;
    display:inline-block;
    width: 0px; 
    height: 0px; 
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 13px solid ${colors.blue};
    top:0;
    left: 100%;
    content: "";
  }

  &:before{
    position: absolute;
    display:inline-block;
    width: 0px; 
    height: 0px; 
    border-top: 13px solid ${colors.blue};
    border-bottom: 13px solid ${colors.blue};
    border-left: 13px solid transparent;
    top:0;
    left: -13px;
    content: "";
  }

  &:first-child:before{
    display:none;
  }

  &.last:after{
    display:none;
  }

  a {
    color: white;
    padding: 0 8px;
    text-decoration:none;
    cursor: pointer;
  }
  
`