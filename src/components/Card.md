Card without an icon

```jsx
<Card title="Digital Asset Stack">
  Understand how the Stellar node software (Core), API (Horizon), and ecosystem
  standards (Stellar Ecosystem Proposals, or SEPs) work together to help you
  issue interoperable assets.
</Card>
```

Card with `isIconInline` set to `true`. This is for cards within only one column
grid on desktop.

```jsx
<Card
  title="Issue assets"
  icon="https://via.placeholder.com/48/999999"
  isIconInline
>
  Start building on the most powerful payment network today.
</Card>
```

Card with `isIconInline` set to `false`. This is for cards within multiple
column grid on desktop. On mobile, this design is adopted in all cards.

```jsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
  }}
>
  <Card title="Issue assets" icon="https://via.placeholder.com/48/999999">
    Start building on the most powerful payment network today.
  </Card>
  <Card title="Issue assets" icon="https://via.placeholder.com/48/999999">
    Start building on the most powerful payment network today.
  </Card>
</div>
```
