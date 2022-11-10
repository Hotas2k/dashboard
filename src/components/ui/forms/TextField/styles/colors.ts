import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { TextFieldColor } from 'types/textField';

import { TextFieldProps } from '../TextField';

import {
  AddonLeft,
  AddonRight,
  Field,
  IconLeft,
  IconRight,
  Label
} from '../TextField.styles';

export const generateColor = ({
  label,
  field,
  addon,
  isDisabled,
  isReadOnly
}: TextFieldColor & {
  isDisabled?: boolean;
  isReadOnly?: boolean;
}) => {
  return css`
    ${Label} {
      color: ${label.default.color};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${Field} {
      background-color: ${field.default.backgroundColor};
      border-color: ${field.default.borderColor};

      &,
      & ~ ${IconRight}, & ~ ${IconLeft} {
        color: ${field.default.color};
      }

      ${({ theme }) =>
        theme.placeholder(`
          color: ${field.default.placeholder};
        `)}

      &:disabled {
        background-color: ${field.disabled.backgroundColor};
        border-color: ${field.disabled.borderColor};

        &,
        & ~ ${IconRight}, & ~ ${IconLeft} {
          color: ${field.disabled.color};
        }

        ${({ theme }) =>
          theme.placeholder(`
            color: ${field.disabled.placeholder};
          `)}
      }

      &:read-only {
        background-color: ${field.readOnly.backgroundColor};
        border-color: ${field.readOnly.borderColor};

        &,
        & ~ ${IconRight}, & ~ ${IconLeft} {
          color: ${field.readOnly.color};
        }

        ${({ theme }) =>
          theme.placeholder(`
            color: ${field.readOnly.placeholder};
          `)}
      }

      &:not(:disabled):not(:read-only):hover {
        border-color: ${field.hover.borderColor};
      }

      &:not(:disabled):not(:read-only):focus {
        border-color: ${field.focus.borderColor};
      }
    }

    ${AddonRight}, ${AddonLeft} {
      background-color: ${addon.default.backgroundColor};
      color: ${addon.default.color};
      border-color: ${addon.default.borderColor};

      ${isDisabled === true &&
      `
        background-color: ${addon.disabled.backgroundColor};
        color: ${addon.disabled.color};
        border-color: ${addon.disabled.borderColor};
      `}

      ${isReadOnly === true &&
      `
        background-color: ${addon.readOnly.backgroundColor};
        color: ${addon.readOnly.color};
        border-color: ${addon.readOnly.borderColor};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<TextFieldProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
      isReadOnly?: boolean;
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
      field: {
        default: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.dark[700],
          borderColor: theme.palettes.dark[700],
          placeholder: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.dark[400],
          placeholder: theme.palettes.dark[400]
        },
        readOnly: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.dark[400],
          placeholder: theme.palettes.dark[400]
        },
        hover: {
          borderColor: theme.surfaces.primary
        },
        focus: {
          borderColor: theme.surfaces.primary
        }
      },
      addon: {
        default: {
          backgroundColor: theme.palettes.dark[700],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.dark[400]
        },
        readOnly: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.dark[400]
        }
      }
    })
};
