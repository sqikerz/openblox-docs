
# createSortedMapItem
Creates a sorted map item.


## Parameters
| Name       | Type                                               | Description                                              |
| :--------- | :------------------------------------------------- | :------------------------------------------------------- |
| universeId | Identifier                                         | The id of the universe to create the sorted map item in. |
| sortedMap  | string                                             | The sorted map to create the item in.                    |
| item       | CreateSortedMapItem_ConstructItemConfig<ItemValue> | The sorted map item data.                                |



## Example
```ts copy showLineNumbers
type Item = { isReal: boolean };
const { data } = await MemoryStoresApi.createSortedMapItem<Item>({
  universeId: 5243626809,
  sortedMap: "MySortedMap",
  item: { id: "Testing123", value: { isReal: true }, ttl: "300s", numericSortKey: 1 },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "cloud/v2/universes/5243626809/memory-store/sorted-maps/MySortedMap/items",
  value: { isReal: true },
  etag: "10",
  expireTime: 2024-04-18T00:30:14.000Z,
  id: "Testing123",
  numericSortKey: 1,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universeId}/memory-store/sorted-maps/{sortedMap}/items
```
  