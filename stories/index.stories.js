import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Input, Checkbox } from "../src/index";

function CheckboxWrapper({ isCheckedAtStart, ...props }) {
  const [isChecked, setChecked] = useState(isCheckedAtStart);

  return (
    <Checkbox
      {...props}
      checked={isChecked}
      onChange={() => setChecked(!isChecked)}
    />
  );
}

function InputWrapper({ valueAtStart, ...props }) {
  const [value, setValue] = useState(valueAtStart);

  return (
    <Input
      {...props}
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
    />
  );
}

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

      <CheckboxWrapper label="This is a really cool label, and good" />

      <h2>Checked</h2>

      <CheckboxWrapper
        label="This is a really cool label, and good"
        isCheckedAtStart
      />

      <h2>Disabled</h2>

      <CheckboxWrapper label="This is a really cool label, and good" disabled />

      <h2>Label first</h2>

      <CheckboxWrapper
        label="This is a really cool label, and good"
        labelFirst
        disabled
      />
    </>
  ))
  .add("Input", () => (
    <>
      <h2>Normal</h2>
      <InputWrapper type="text" valueAtStart="This is a v good input" />
      <h2>Empty</h2>
      <InputWrapper type="text" valueAtStart="" />
      <h2>Disabled</h2>
      <InputWrapper
        type="text"
        valueAtStart="This is a v good input"
        disabled
      />
    </>
  ));
