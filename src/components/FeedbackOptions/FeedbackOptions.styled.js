import styled from 'styled-components';
export const FeedbackButtonsStyle = styled.button`
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
  background-color: #ffff;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px, rgb(0 0 0 / 20%) 0px 2px 2px,
    rgb(0 0 0 / 20%) 0px 2px 2px;
  :active {
    background-color: #5793f4;
    color: #fffffffa;
    border: 1px solid #5793f4;
  }
`;
