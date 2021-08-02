import {Meta, Story} from "@storybook/react";
import React from "react";
import {Field, FieldProps} from "./Field";

export default {
    title: 'Field',
    component: Field
}as Meta;

const Tepmlate: Story<FieldProps> = (args) => <Field {... args} />

export const FieldStory = Tepmlate.bind({});
FieldStory.args = {
    countCell: 5
}