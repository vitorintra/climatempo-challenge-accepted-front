import styled from 'styled-components';
import { blue, gray } from '../../styles/constants';
import Button from '../Button';
import Image from '../Image';
import { StyledProps } from './types';

const borderRadius = '26px';

const blueColorFilter = 'invert(27%) sepia(9%) saturate(3432%) hue-rotate(185deg) brightness(94%) contrast(91%)';
const grayColorFilter = 'invert(77%) sepia(2%) saturate(252%) hue-rotate(188deg) brightness(98%) contrast(92%)';

const unfocusedFormShadow = '0 0 3rem 0.1rem rgba(0, 0, 0, 0.2)';
const focusedFormShadow = '0 0 3rem 0.1rem rgba(52, 72, 121, 0.5)';

const transition = 'box-shadow 0.2s ease-in-out';

export const Form = styled.form<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 40rem);
  border-radius: ${borderRadius};
  margin: 0 auto;
  box-shadow: ${({ isFocused }) => isFocused ? focusedFormShadow : unfocusedFormShadow};
  transition: ${transition};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  color: ${blue};
  padding: 1rem 1rem 1rem 2.4rem;
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  border: none;
  outline: none;

  &::placeholder {
    color: ${gray};
  }
`;

export const SearchButton = styled(Button)`
  width: 2.4rem;
  height: 2.4rem;
  margin: 10px;
`;

export const SearchIcon = styled(Image) <StyledProps>`
  width: 100%;
  filter: ${({ isFocused }) => isFocused ? blueColorFilter : grayColorFilter};
  transition: ${transition};
`;
