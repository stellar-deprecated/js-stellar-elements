import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Input, Checkbox } from "../src/index";

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
  .add("Checkbox", () => (
    <>
      <h2>Normal</h2>

      <Checkbox label="This is a really cool label, and good" />

      <h2>Checked</h2>

      <Checkbox label="This is a really cool label, and good" checked />

      <h2>Disabled</h2>

      <Checkbox label="This is a really cool label, and good" disabled />

      <h2>Label first</h2>

      <Checkbox
        label="This is a really cool label, and good"
        labelFirst
        disabled
      />
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
