
# sortedMapItem
Gets a sorted map item.


## Parameters
| Name       | Type       | Description                                             |
| :--------- | :--------- | :------------------------------------------------------ |
| universeId | Identifier | The id of the universe to get the sorted map item from. |
| sortedMap  | string     | The sorted map to get the item from.                    |
| itemId     | string     | The id of the item to get.                              |



## Example
```ts copy showLineNumbers
type Item = { isReal: boolean };
const { data } = await MemoryStoresApi.sortedMapItem<Item>({
  universeId: 5243626809,
  sortedMap: "MySortedMap",
  itemId: "Testing123",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "cloud/v2/universes/5243626809/memory-stores/sorted-maps/MySortedMap/items/Testing123",
  value: { isReal: true },
  etag: "12",
  expireTime: 2024-04-18T01:44:49.000Z,
  id: "Testing123",
  numericSortKey: 1,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/memory-store/sorted-maps/{sortedMap}/items/{itemId}
```
  