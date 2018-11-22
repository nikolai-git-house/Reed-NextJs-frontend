import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/utils/colors'
import helpers from '../../styles/utils/helpers'

export const TabWrapper = styled.div`
  box-shadow: 0px -3px 0px -1px ${colors.grey} inset;

  li {
    cursor: pointer;
    margin-bottom: 2rem;
    
    @media (min-width: 760px) {
      margin-bottom: 0;
    }
  }

  p {
    color: #172B4D;
    font-weight: 600;
  }

  .Tabs__tab--selected {
    border-bottom: 3px solid ${colors.blue}
  }

`;







