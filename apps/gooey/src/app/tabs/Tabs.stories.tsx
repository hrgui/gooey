import React from "react";
import { Story, Meta } from "@storybook/react";
import { Tabs, TabPanel, Tab } from "./index";
const meta: Meta = { title: "Tabs", component: Tabs };

export const Demo = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (event: React.MouseEvent, newValue: string | number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={0} index={value}>
        This is tab 1
      </TabPanel>
      <TabPanel value={1} index={value}>
        This is tab 2
      </TabPanel>
      <TabPanel value={2} index={value}>
        This is tab 3
      </TabPanel>
    </>
  );
};

export default meta;
