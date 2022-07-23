import styled from 'styled-components';

export const Notifications = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.accent};
`;
