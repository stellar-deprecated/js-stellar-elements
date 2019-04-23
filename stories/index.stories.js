import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import {
  GlobalStyle,
  Button,
  ButtonThemes,
  Input,
  Textarea,
  TextareaResizing,
  Checkbox,
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

storiesOf("Elements", module)
  .addDecorator(withKnobs)
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

      <Button
        onClick={() => console.log("This button IS clickable!!!")}
        disabled={boolean("`disabled`", false)}
        theme={select(
          "`theme`",
          Object.keys(ButtonThemes),
          ButtonThemes.primary,
        )}
      >
        Click button
      </Button>
    </>
  ))
  .add("Checkbox", () => (
    <>
      <GlobalStyle />

      <CheckboxWrapper
        label={text("Label text", "This is a really cool label, and good")}
        isCheckedAtStart={false}
        disabled={boolean("`disabled`", false)}
        labelFirst={boolean("`labelFirst`", false)}
      />
    </>
  ))
  .add("Input", () => (
    <>
      <GlobalStyle />

      <InputWrapper
        type="text"
        valueAtStart="Some really good text"
        disabled={boolean("disabled", false)}
      />
    </>
  ))
  .add("Textarea", () => (
    <>
      <GlobalStyle />

      <InputWrapper
        isTextarea={true}
        valueAtStart="Some really good text that's so long that we need a big box to hold it all"
        disabled={boolean("disabled", false)}
        resizing={select("`resizing`", Object.keys(TextareaResizing), "yes")}
      />
    </>
  ));
