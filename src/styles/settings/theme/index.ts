import { createTheme } from '@entire.se/components';

import { border } from './border';
import { palettes } from './palettes';
import { surfaces } from './surfaces';
import { typography } from './typography';

export const theme = createTheme({
  palettes,
  surfaces,
  typography,
  border
});
