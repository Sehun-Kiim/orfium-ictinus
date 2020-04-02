const grayPalette = {
  gray: '#F5F5F6',
  gray50: '#DFDFDF',
  gray100: '#9B9B9B',
  gray200: '#4A4A4A',
  gray300: '#232323',
};

export const lightPalette: Palette = {
  // Primary Palette
  primary: '',
  secondary: '',

  brand1: 'orange',
  brand2: 'yellow',

  ...grayPalette,

  //rest
  success: '#6bbc15',
  error: '#D40000',
  warning: '#F5781B',
  info: '#18AED2',
  light: '#FFFFFF',

  white: '#FFFFFF',

  text: {
    primary: grayPalette.gray300,
    secondary: grayPalette.gray200,
    light: '#FFFFFF',
  },
};

export const darkPalette: Palette = {
  // Primary Palette
  primary: '',
  secondary: '',

  brand1: 'orange',
  brand2: 'yellow',

  ...grayPalette,

  //rest
  success: '#6bbc15',
  error: '#D40000',
  warning: '#F5781B',
  info: '#18AED2',
  light: '#FFFFFF',

  white: '#FFFFFF',

  text: {
    primary: grayPalette.gray300,
    secondary: grayPalette.gray200,
    light: '#FFFFFF',
  },
};

export type Palette = {
  // Primary Palette
  primary: string;
  secondary: string;

  brand1: string;
  brand2: string;

  gray: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;

  success: string;
  error: string;
  warning: string;
  info: string;
  light: string;

  white: string;

  text: {
    primary: string;
    secondary: string;
    light: string;
  };
};
