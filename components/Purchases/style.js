import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/utils/colors'

export const PurchaseListContainer = styled.div`
  
  .flex{ display: flex }
  .left{ flex: 1 1 auto; } 
  .right{ 
    flex: 0 0 233px; 
    padding-left: 34px;
    box-sizing: border-box;
  } 

  .rc-pagination-item:hover,
  .rc-pagination-prev:hover,
  .rc-pagination-next:hover{
    border-color: #0052CC;
  }
  .rc-pagination-item:hover a
  .rc-pagination-prev:hover a,
  .rc-pagination-next:hover a{
    color: #0052CC;
  }

  .rc-pagination-item-active{
    background-color: ${colors.blue};
    border-color: #0052CC;
  }

  .rc-pagination-item-active a,
  .rc-pagination-item-active:hover a{
    color: white;
  }

  .rc-pagination-item:focus,
  .rc-pagination-prev:focus,
  .rc-pagination-next:focus{
    outline: none;
  }

  p, h4{ margin: 0; }

  .list{ 
    margin: 13px 0; 
    margin-bottom: 34px; 
  }

  .purchase-item{

    border-top: 0px solid ${colors.blue};
    border-bottom: 1px solid ${colors.grey};
    padding: 34px 0;
    transition: all 200ms linear;

    .purchase-item-header{

      cursor:pointer;
      transition: all 200ms linear;
      padding-bottom: 0px;
      border-bottom: 0px solid ${colors.grey};

      .left {
        h4{ 
          font-size: 21px; 
          font-weight: 500;
        }

      }
      .right h4{ font-size: 34px; }

    }

    .purchase-item-header:hover .left h4{
      color: ${colors.blue}
    }

    .purchase-item-content{

      transition: all 200ms linear;

      padding-top: 0px;
      box-sizing: border-box;
      max-height: 0px;
      overflow: hidden;
      opacity:0;

      .right h4{
        font-weight: 500;
        margin-bottom: 8px;
      }

      .right .address{
        margin-top: 8px;
      }

      .left{
        overflow: auto;
      }

      .left.img{
        width: 144px;
        height: auto;
        flex: 0 0 144px; 
      }

      .left .right {
        flex: 1 1 auto; 
        padding-left: 21px;
      }

      .flex{ margin-bottom: 18px; }

    }

    &.active { 
      border-color: ${colors.blue};
      border-top: 1px solid ${colors.blue};
    }
    &.active .purchase-item-header{
      padding-bottom: 21px;
      border-bottom: 1px solid ${colors.grey}
    }
    &.active .purchase-item-content{
      opacity:1;
      max-height: 500px;
      padding-top: 21px;
    }

  }

`