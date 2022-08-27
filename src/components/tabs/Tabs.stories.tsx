import React, { useEffect } from "react";
import { Story, Meta, ComponentMeta } from "@storybook/react";
import { Tabs, TabPanel, Tab } from "./index";
const meta: Meta = { title: "Tabs", component: Tabs } as ComponentMeta<
  typeof Tabs
>;

export const Default: Story = (args) => {
  const [value, setValue] = React.useState<string | number>(+args.value || 0);

  useEffect(() => {
    if (args.value !== undefined) {
      setValue(+args.value);
    }
  }, [args.value]);

  const handleChange = (event: React.MouseEvent, newValue: string | number) => {
    setValue(newValue);
  };

  return (
    <div className="dark:text-white">
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
    </div>
  );
};

Default.args = {
  value: 0,
};

export default meta;
