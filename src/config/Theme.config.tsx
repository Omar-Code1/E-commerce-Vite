import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
  interface Palette {
    deepPurple: Palette['primary'];
    indigo: Palette['primary'];
    violet: Palette['primary'];
  }
  interface PaletteOptions {
    deepPurple: PaletteOptions['primary'];
    indigo: PaletteOptions['primary'];
    violet: PaletteOptions['primary'];
  }
}

type Props = {
  children: JSX.Element;
};

enum ThemeCustom {
  PINK = '#fb2e86',
  BG = '#EBEBEB',
  TEXTCOLOR = 'rgb(21, 24, 117)',
  SUBTEXTCOLOR = '#8a8fb9',
  PURPLE = '#4852c1',
  FONTGLOBAL = "'Inter', sans-serif",
  RED = '#fb2448',
  VIOLET = '#8d5cf6',
  BLUE = '#546eff',
  WHITE = '#fff',
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
      xxl: 1536,
    },
  },
  palette: {
    primary: {
      main: ThemeCustom.PINK,
    },
    secondary: {
      main: ThemeCustom.TEXTCOLOR,
    },
    deepPurple: {
      main: ThemeCustom.PURPLE,
    },
    indigo: {
      main: ThemeCustom.BLUE,
    },
    violet: {
      main: ThemeCustom.VIOLET,
    },
    info: {
      main: ThemeCustom.SUBTEXTCOLOR,
    },
    error: {
      main: ThemeCustom.RED,
    },
    background: {
      default: ThemeCustom.BG,
    },
    text: {
      primary: ThemeCustom.TEXTCOLOR,
      secondary: ThemeCustom.SUBTEXTCOLOR,
    },
  },
  typography: {
    fontFamily: ThemeCustom.FONTGLOBAL,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        style: {
          boxShadow: 'none',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        style: {
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        style: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
