CodeExample - Endpoints

```jsx
import Table from "./Table";
import { PALETTE } from "../shared";

<CodeExample title="Endpoints">
  <Table hasCodeFormat customColor={PALETTE.purple}>
    <tr>
      <th>
        <span>GET</span>
      </th>
      <td>
        <span>/operations/:operation_id</span>
      </td>
    </tr>
    <tr>
      <th>
        <span>GET</span>
      </th>
      <td>
        <span>/operations/:operation_id/effects</span>
      </td>
    </tr>
    <tr>
      <th>
        <span>GET</span>
      </th>
      <td>
        <span>/operations{"{?cursor,limit,order,include_failed}"}</span>
      </td>
    </tr>
  </Table>
</CodeExample>;
```
