import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Input } from "../src/index";

storiesOf("Form elements", module)
  .add("Button", () => (
    <>
      <h2>Normal</h2>
      <Button onClick={action("clicked")}>Mark button as clicked</Button>
      <h2>Disabled</h2>
      <Button onClick={action("clicked")} disabled>
        Mark button as clicked
      </Button>
    </>
  ))
  .add("Input", () => (
    <>
      <h2>Normal</h2>
      <Input type="text" value="This is a v good input" />
      <h2>Empty</h2>
      <Input type="text" value="" />
      <h2>Disabled</h2>
      <Input type="text" value="This is a v good input" disabled />
    </>
  ));
