import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "Button";
import Input from "Input";

storiesOf("Form elements", module)
  .add("Button", () => (
    <Button onClick={action("clicked")}>Mark button as clicked</Button>
  ))
  .add("Input", () => <Input type="text" value="This is a v good input" />);
