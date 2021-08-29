import { Meta, Story } from "@storybook/react";
import React from "react";
import { Cell, CellProps } from "./Cell";

export default {
  title: "Cell",
  component: Cell,
} as Meta;

const Tepmlate: Story<CellProps> = (args, children) => <Cell {...args} />;

export const CellStory = Tepmlate.bind({});
CellStory.args = {
  coordinates: [3, 4],
};
