import { library } from '@fortawesome/fontawesome-svg-core';

import { fal } from '@fortawesome/pro-light-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';

export function setupFontAwesomeIcons() {
  // Register icon(s)
  library.add(fal);

  library.add(fat);
}
