import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { GlobalStyle, Button, Input, Checkbox } from "../src/index";

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

storiesOf("Elements", module)
  .add("GlobalStyle", () => (
    <>
      <GlobalStyle />
      <h1>This is an H1</h1>
      <p>
        This is a <em>very nice and good</em> paragraph.
      </p>

      <blockquote>…nice and good…</blockquote>

      <p>
        Some <strong>good ways</strong> it is nice:
      </p>

      <ul>
        <li>Nice beginning</li>
        <li>Good end</li>
        <li>Middle ok</li>
      </ul>

      <p>What we plan to do to make it better / nicer:</p>

      <ol>
        <li>Make middle nicer</li>
        <li>Make middle better</li>
        <li>Make middle good</li>
      </ol>
    </>
  ))
  .add("Button", () => (
    <>
      <GlobalStyle />
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
      <GlobalStyle />
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
      <GlobalStyle />
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
