// .storybook/preview.js

import React from "react";
import AppProvider from "../src/app/AppProvider";

export const decorators = [
  (Story) => (
    <AppProvider theme="default">
      <Story />
    </AppProvider>
  ),
];
