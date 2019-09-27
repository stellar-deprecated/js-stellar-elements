3 Column Grid Example with 20px grid gap of top/bottom and 10px grid gap of
left/right

```jsx
import Grid from "./Grid";
import GridItem from "./GridItem";

<Grid templateColumns="repeat(3, 1fr)" gap="20px 10px">
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 1
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 2
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 3
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 1
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 2
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 3
  </GridItem>
</Grid>;
```

2 Column Grid Example with 25px grid gap

```jsx
import Grid from "./Grid";
import GridItem from "./GridItem";

<Grid templateColumns="repeat(2, 1fr)" gap="25px">
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 1
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 2
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 1
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 2
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 1
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    Column 2
  </GridItem>
</Grid>;
```

Above examples do not explicitly place `<GridItem />` on the grid, which means
the auto-placement algorithm kicks in to automatically place the items. In order
to fill in each row and column, use `column` and `row` props on `<GridItem />`.

```jsx
import Grid from "./Grid";
import GridItem from "./GridItem";

<Grid templateColumns="repeat(4, 1fr)" gap="15px">
  <GridItem
    column="1 / 3"
    row="1 / 3"
    style={{
      padding: "10px",
      backgroundColor: "#FFE5B4",
    }}
  >
    column="1 / 3"
    <br />
    row="1 / 3"
  </GridItem>
  <GridItem
    column="3 / 5"
    style={{ padding: "10px", backgroundColor: "#E6E6FA" }}
  >
    column="3 / 5"
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    (no props)
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    (no props)
  </GridItem>
  <GridItem
    column="1 / 4"
    style={{ padding: "10px", backgroundColor: "#F5F5DC" }}
  >
    column="1 / 4"
  </GridItem>
  <GridItem style={{ padding: "10px", border: "1px solid #000" }}>
    (no props)
  </GridItem>
</Grid>;
```
