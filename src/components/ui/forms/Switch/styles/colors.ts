import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { SwitchColor } from 'types/switch';

import { SwitchProps } from '../Switch';

import { Label, SwitchHolder, Input, Switch } from '../Switch.styles';

export const generateColor = ({
  label,
  switch: switchColor,
  isDisabled
}: SwitchColor) => {
  return css`
    ${Label} {
      color: ${label.default.color};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${SwitchHolder} {
      background-color: ${switchColor.default.trackBackgroundColor};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.trackBackgroundColor};
      `}
    }

    ${Input}:checked ~ ${SwitchHolder} {
      background-color: ${switchColor.default.trackBackgroundColorWhenChecked};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.trackBackgroundColorWhenChecked};
      `}
    }

    ${Switch}::after {
      background-color: ${switchColor.default.knobBackgroundColor};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.knobBackgroundColor};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<SwitchProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  primary: (theme, color = {}) =>
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
      switch: {
        default: {
          trackBackgroundColor: theme.palettes.dark[700],
          trackBackgroundColorWhenChecked: theme.surfaces.primary,
          knobBackgroundColor: theme.palettes.light[100]
        },
        disabled: {
          trackBackgroundColor: theme.palettes.light[400],
          trackBackgroundColorWhenChecked: theme.palettes.light[400],
          knobBackgroundColor: theme.palettes.dark[400]
        }
      }
    })
};
