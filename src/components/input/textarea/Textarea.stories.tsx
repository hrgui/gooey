import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { Textarea } from "./Textarea";
const meta: Meta<typeof Textarea> = { title: "Input", component: Textarea };

const Demo: StoryFn<any> = (props: any) => <Textarea {...props} />;

export const TextareaInput = Demo.bind({});
TextareaInput.args = {};

export default meta;
