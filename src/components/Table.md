Table with `hasBorder` props set to `true`

```jsx
<Table hasBorder>
  <thead>
    <tr>
      <th>Field</th>
      <th>Requirements</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>ORG_KEYBASE</span>
      </td>
      <td>
        <span>string</span>
      </td>
      <td>
        <span>
          A Keybase account name for your organization. Should contain proof of
          ownership of any public online accounts you list here, including your
          organization's domain.
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>ORG_TWITTER</span>
      </td>
      <td>
        <span>string</span>
      </td>
      <td>
        <span>Your organization's Twitter account</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>ORG_GITHUB</span>
      </td>
      <td>
        <span>string</span>
      </td>
      <td>
        <span>Your organization's Github account</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>ORG_OFFICIAL_EMAIL</span>
      </td>
      <td>
        <span>string</span>
      </td>
      <td>
        <span>
          An email where clients can contact your organization. Must be hosted
          at your ORG_URL domain.
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>ORG_LICENSING_AUTHORITY</span>
      </td>
      <td>
        <span>string</span>
      </td>
      <td>
        <span>
          Name of the authority or agency that licensed your organization, if
          applicable
        </span>
      </td>
    </tr>
  </tbody>
</Table>
```

Table with `customColor` props set to `${PALETTE.purple}`

```jsx
import { PALETTE } from "../shared";

<Table customColor={PALETTE.purple}>
  <tr>
    <th>
      <span>HTTP Status Codes</span>
    </th>
    <td>
      <span>Generic HTTP result codes that indicate success or failure.</span>
    </td>
  </tr>
  <tr>
    <th>
      <span>Horizon-Specific Codes</span>
    </th>
    <td>
      <span>Result codes specific to the Horizon server’s setup.</span>
    </td>
  </tr>
  <tr>
    <th>
      <span>Transaction Codes</span>
    </th>
    <td>
      <span>
        Result codes indicating the failure reasons at the transaction level.
      </span>
    </td>
  </tr>
  <tr>
    <th>
      <span>Operation Codes</span>
    </th>
    <td>
      <span>
        Result codes indicating the failure reasons at the operation level.
      </span>
    </td>
  </tr>
  <tr>
    <th>
      <span>Operation-Specific Codes</span>
    </th>
    <td>
      <span>Result codes specific to each operation type.</span>
    </td>
  </tr>
</Table>;
```

Table with `hasCodeFormat` props and `customColor` props set to
`${PALETTE.purple}`

```jsx
import { PALETTE } from "../shared";

<Table customColor={PALETTE.purple} hasCodeFormat>
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
</Table>;
```
