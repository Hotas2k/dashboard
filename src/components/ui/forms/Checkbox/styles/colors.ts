import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { CheckboxColor } from 'types/checkbox';

import { CheckboxProps } from '../Checkbox';

import { Label, CheckboxNotChecked, CheckboxChecked } from '../Checkbox.styles';

export const generateColor = ({
  label,
  checkboxNotChecked,
  checkboxChecked,
  isDisabled
}: CheckboxColor) => {
  return css`
    ${Label} {
      color: ${label.default.color};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${CheckboxNotChecked} {
      background-color: ${checkboxNotChecked.default.backgroundColor};
      border-color: ${checkboxNotChecked.default.borderColor};
      color: ${checkboxNotChecked.default.color};

      ${isDisabled === true &&
      `
        background-color: ${checkboxNotChecked.disabled.backgroundColor};
        border-color: ${checkboxNotChecked.disabled.borderColor};
        color: ${checkboxNotChecked.disabled.color};
      `}
    }

    ${CheckboxChecked} {
      background-color: ${checkboxChecked.default.backgroundColor};
      border-color: ${checkboxChecked.default.borderColor};
      color: ${checkboxChecked.default.color};

      ${isDisabled === true &&
      `
        background-color: ${checkboxChecked.disabled.backgroundColor};
        border-color: ${checkboxChecked.disabled.borderColor};
        color: ${checkboxChecked.disabled.color};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<CheckboxProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  light: (theme, color = {}) =>
    generateColor({
      ...color,
      label: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      checkboxNotChecked: {
        default: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.dark[700],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.dark[400]
        }
      },
      checkboxChecked: {
        default: {
          backgroundColor: theme.palettes.dark[700],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.dark[400],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.dark[400]
        }
      }
    })
};
