import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  width: 50%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
