
# inventoryItemsForUser


## Parameters
| Name    | Type                                        | Description                                                  |
| :------ | :------------------------------------------ | :----------------------------------------------------------- |
| userId  | Identifier                                  | The id of the user to get the inventory items for.           |
| limit?  | number                                      | The maximum amount of items to return.                       |
| filter? | UnionPrettify<InventoryItemsForUser_Filter> | Filters the returned inventory items by specified criterias. |
| cursor? | string                                      | A paging cursor for a specified page.                        |



## Example
```ts copy showLineNumbers
const { data: inventoryItems } = await InventoryApi.inventoryItemsForUser({
  userId: 45348281,
  limit: 3,
  filter: { privateServers: true },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  inventoryItems: [
    {
      path: "users/45348281/inventory-items/R0FNRV9QQVNTX0lEPTEyNTI3",
      gamePassDetails: { gamePassId: "12527" },
    },
  ],
  nextPageToken: "djEveyJGaWVsZEluZGV4IjoyLCJWYWx1ZUluZGV4IjowLCJDdXJzb3IiOiIxMjUyNyIsIkZpbHRlckhhc2giOiJrV3Y2VFQ0ZW1FOGgzT1RQL1hjOXFkdGIwR0JiWjNySkRMU3FTSmV5TUVJPSJ9",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/users/{userId}/inventory-items
```
  