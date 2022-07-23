import styled from 'styled-components';

export const FeedbackOptionsStyled = styled.button`
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  color: #000;
  font-size: 1em;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: #fff;
  }
`;
