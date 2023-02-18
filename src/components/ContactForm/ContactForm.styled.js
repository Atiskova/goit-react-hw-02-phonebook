import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgb(0, 0, 0);
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: capitalize;
  font-size: 20px;
  width: 300px;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 300px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  font-size: 20px;
`;
