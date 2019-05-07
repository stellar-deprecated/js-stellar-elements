The React Native version of Stellar Elements. Import elements from
`@stellar/elements/native` instead of `@stellar/elements`:

```js static
import { Button } from "@stellar/elements/native";
```

Remember in React Native that you must wrap your text in a `<Text />` component,
and that there's no concept of global styles. Our solution for both was to make
our own `<Text />` component:

```jsx static
import { Button, Text } from "@stellar/elements/native";

export const FullButton = ({ onPress }) => (
  <Button onPress={onPress}>
    <Text>This text will look very nice and good</Text>
  </Button>
);
```

However, because `<Checkbox />` takes a `label` prop as a string, that component
automatically uses our styled `<Text />` component:

```jsx static
import { Checkbox } from "@stellar/elements/native";

export const Checkbox = ({ onPress }) => (
  <Checkbox label="This text is auto-wrapped" onPress={onPress} />
);
```
