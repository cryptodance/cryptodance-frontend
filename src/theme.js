import { grommet, dark } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const cryptoDanceThemeLight = deepMerge(grommet, {
  dataTable: {
    pinned: {
      header: {
        background: {
          opacity: "small",
        },
        extend: `backdrop-filter: blur(8px);`,
      },
    },
  },
});

const cryptoDanceThemeDark = deepMerge(dark, {
  dataTable: {
    pinned: {
      header: {
        background: {
          opacity: "small",
        },
        extend: `backdrop-filter: blur(8px);`,
      },
    },
  },
});

export { cryptoDanceThemeLight, cryptoDanceThemeDark };
