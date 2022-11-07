import styled from 'styled-components';

import { isTabbing } from 'styles/tools';

import { CheckboxProps } from './Checkbox';

export const Root = styled.div<{
  $hasError: boolean;
  $isDisabled?: CheckboxProps['disabled'];
}>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  transition: ${({ theme }) => theme.ease(['opacity'])};

  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      opacity: 0.5;

      &, * {
        cursor: not-allowed;
      }
    `}

  ${({ $hasError, theme }) =>
    $hasError &&
    `
      ${Input}:not(:checked) ~ ${CheckboxHolder} ${CheckboxNotChecked} {
        border-color: ${theme.surfaces.error};
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  color: ${({ theme }) => theme.surfaces.onLight};
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

export const CheckboxHolder = styled.div`
  position: relative;

  .is-tabbing ${Input}:focus ~ & {
    ${isTabbing};
  }
`;

export const CheckboxNotChecked = styled.div`
  border: 2px solid ${({ theme }) => theme.surfaces.onLight};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.border.radius};
  width: 18px;
  height: 18px;
  transition: ${({ theme }) => theme.ease(['opacity', 'border-color'])};

  ${Input}:checked ~ ${CheckboxHolder} & {
    opacity: 0;
  }
`;

export const CheckboxChecked = styled(CheckboxNotChecked)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: ${({ theme }) => theme.surfaces.onLight};

  ${Input}:checked ~ ${CheckboxHolder} & {
    opacity: 1;
  }
`;

export const LabelHolder = styled.span`
  padding-left: ${({ theme }) => theme.spacing(1)};
`;
