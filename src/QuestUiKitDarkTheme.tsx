import React from 'react';

import { createTheme } from '@mui/material/styles';

const darkGlobalTheme: any = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {},
  customShadows: {},
} as any);

const darkQuestTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  },
  darkGlobalTheme
);

export default darkQuestTheme;
