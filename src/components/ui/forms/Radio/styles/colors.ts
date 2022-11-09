import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { RadioColor } from 'types/radio';

import { RadioProps } from '../Radio';

import { Label, RadioNotChecked, RadioChecked } from '../Radio.styles';

export const generateColor = ({
  label,
  radioNotChecked,
  radioChecked,
  isDisabled
}: RadioColor) => {
  return css`
    ${Label} {
      color: ${label.default.color};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${RadioNotChecked} {
      background-color: ${radioNotChecked.default.backgroundColor};
      border-color: ${radioNotChecked.default.borderColor};
      color: ${radioNotChecked.default.color};

      ${isDisabled === true &&
      `
        background-color: ${radioNotChecked.disabled.backgroundColor};
        border-color: ${radioNotChecked.disabled.borderColor};
        color: ${radioNotChecked.disabled.color};
      `}
    }

    ${RadioChecked} {
      background-color: ${radioChecked.default.backgroundColor};
      border-color: ${radioChecked.default.borderColor};
      color: ${radioChecked.default.color};

      ${isDisabled === true &&
      `
        background-color: ${radioChecked.disabled.backgroundColor};
        border-color: ${radioChecked.disabled.borderColor};
        color: ${radioChecked.disabled.color};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<RadioProps['color']>]: (
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
      radioNotChecked: {
        default: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.dark[700],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.light[400],
          borderColor: theme.palettes.light[400]
        }
      },
      radioChecked: {
        default: {
          backgroundColor: theme.palettes.dark[700],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.light[400]
        }
      }
    })
};
