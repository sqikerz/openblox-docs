
# listSortedMapItems
Lists items of a sorted map.


## Parameters
| Name         | Type            | Description                                             |
| :----------- | :-------------- | :------------------------------------------------------ |
| universeId   | Identifier      | The id of the universe to get the sorted map item from. |
| sortedMap    | string          | The sorted map to get the item from.                    |
| maxPageSize? | number          | The id of the item to get.                              |
| orderBy?     | "asc" \| "desc" | The order of the returned sorted map items.             |
| filter?      | string          | filter returned sorted map items.                       |



## Example
```ts copy showLineNumbers
const { data: items } = await MemoryStoresApi.listSortedMapItems<Item>({
  universeId: 5243626809,
  sortedMap: "MySortedMap",
  maxPageSize: 1,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "cloud/v2/universes/5243626809/memory-store/sorted-maps/MySortedMap/items/Testing123",
    value: { isReal: true },
    etag: "24",
    expireTime: 2024-04-18T04:31:14.000Z,
    id: "Testing123",
    numericSortKey: 1,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/memory-store/sorted-maps/{sortedMap}/items
```
  