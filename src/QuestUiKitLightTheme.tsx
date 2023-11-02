import React from 'react';

import { createTheme } from '@mui/material/styles';

const lightGlobalTheme: any = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {},
  customShadows: {},
} as any);

const lightQuestTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  },
  lightGlobalTheme
);

export default lightQuestTheme;
