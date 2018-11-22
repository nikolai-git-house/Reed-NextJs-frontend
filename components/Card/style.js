import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/utils/colors'
import helpers from '../../styles/utils/helpers'

export const CardWrapper = styled.div`
  background: white;
  padding: 34px;
  box-shadow: 1px 1px 3px 2px #f3f3f3;
  border-radius: 6px;


  @media (max-width: 760px) {
    padding-left: ${helpers.squish};
    padding-right: ${helpers.squish};
  }

  h2 { margin-top:0; margin-bottom: 1.6rem; }
  width:85%;
  margin: 0 auto;
  margin-bottom: ${helpers.squish};
`;







