import styled from "styled-components";
import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import {
  GlobalStyle,
  Button,
  Input,
  Textarea,
  TextareaResizing,
  Checkbox,
  Select,
} from "../src/index";

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

function InputWrapper({ isTextarea, valueAtStart, ...props }) {
  const [value, setValue] = useState(valueAtStart);

  const El = isTextarea ? Textarea : Input;

  return (
    <El {...props} value={value} onChange={(ev) => setValue(ev.target.value)} />
  );
}

function SelectWrapper({ valueAtStart, placeholder, values, ...props }) {
  const [value, setValue] = useState(valueAtStart);

  return (
    <Select
      {...props}
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
    >
      <option value="">{placeholder}</option>
      {values.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </Select>
  );
}

storiesOf("Elements", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addParameters({
    options: {
      panelPosition: "right",
    },
    info: {
      inline: true,
      source: false,
    },
  })
  .add("GlobalStyle", () => (
    <>
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
  .add(
    "Button",
    () => (
      <Button
        onClick={() => console.log("This button IS clickable!!!")}
        disabled={boolean("`disabled`", false)}
        level={select(
          "`level`",
          Object.keys(Button.Levels),
          Button.Levels.primary,
        )}
      >
        Click button
      </Button>
    ),
    {
      info: {
        text: Button.__docs,
      },
    },
  )
  .add("Checkbox", () => (
    <CheckboxWrapper
      label={text("Label text", "This is a really cool label, and good")}
      isCheckedAtStart={false}
      disabled={boolean("`disabled`", false)}
      labelFirst={boolean("`labelFirst`", false)}
    />
  ))
  .add("Input", () => (
    <InputWrapper
      type="text"
      valueAtStart="Some really good text"
      disabled={boolean("disabled", false)}
    />
  ))
  .add("Select", () => (
    <SelectWrapper
      valueAtStart=""
      placeholder="-- Pick one of these to hodl --"
      values={[
        { value: "a", label: "Bird in hand" },
        { value: "b", label: "Two birds in bush" },
      ]}
      disabled={boolean("disabled", false)}
    />
  ))
  .add("Textarea", () => (
    <InputWrapper
      isTextarea={true}
      valueAtStart="Some really good text that's so long that we need a big box to hold it all"
      disabled={boolean("disabled", false)}
      resizing={select("`resizing`", Object.keys(TextareaResizing), "yes")}
    />
  ));
