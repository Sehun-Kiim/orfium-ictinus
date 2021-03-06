import { css, SerializedStyles } from '@emotion/core';
import { rem, transparentize } from 'polished';
import { Theme } from '../../theme';
import { Props } from './CheckBox';

export const wrapperStyle = ({ disabled }: Props) => (): SerializedStyles => css`
  opacity: ${disabled ? 0.3 : 1};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const checkboxWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  border-radius: 100%;
  width: ${rem(50)};
  height: ${rem(50)};
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    border-radius: 100%;
    transition: all 0.2s;
    content: ' ';
    width: ${rem(50)};
    height: ${rem(50)};
    position: absolute;
  }
  &:hover:before {
    background: ${transparentize(0.7, theme.palette.flat.lightGray[400])};
  }
`;

export const checkboxStyle = ({ intermediate, checked }: Props) => (
  theme: Theme
): SerializedStyles => css`
  background: ${checked
    ? intermediate
      ? theme.palette.flat.darkGray[400]
      : theme.palette.branded1[300]
    : theme.palette.flat.lightGray[300]};
  border: 0;
  border-radius: ${rem(2)};
  width: ${rem(26)};
  height: ${rem(26)};

  position: absolute;
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    transition: all 0.2s;
    display: inline-block;
    vertical-align: text-top;
    width: ${rem(26)};
    height: ${rem(26)};
    background: ${theme.palette.flat.lightGray[300]};
    border-radius: ${rem(2)};
  }

  // Box checked
  &:checked + label:before {
    background: ${intermediate ? theme.palette.flat.darkGray[400] : theme.palette.branded1[400]};
  }

  // Disabled state label.
  &:disabled + label {
    cursor: not-allowed;
  }

  // Checkmark.
  &:checked + label:after {
    content: '';
    position: absolute;
    left: ${rem(7)};
    top: ${rem(13)};
    height: ${rem(2)};
    ${intermediate
      ? `width: ${rem(10)};`
      : `width: ${rem(2)};
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);`};
    background: white;
  }
`;

export const labelStyle = () => (theme: Theme): SerializedStyles => css`
  padding-left: ${rem(4)};
  font-size: ${theme.typography.fontSizes['15']};
  font-weight: ${theme.typography.weights.regular};
  color: ${theme.palette.flat.darkGray[600]};
  white-space: nowrap;
`;
