
# enqueueItem
Adds an item to a memory store queue.


## Parameters
| Name       | Type       | Description                                             |
| :--------- | :--------- | :------------------------------------------------------ |
| universeId | Identifier | The id of the universe to get the sorted map item from. |
| sortedMap  | 🤷         | The sorted map to get the item from.                    |
| itemId     | 🤷         | The id of the item to update.                           |
| etag       | 🤷         | Server generated id for conditional delete.             |



## Example
```ts copy showLineNumbers
const { data: enqueuedItem } = await MemoryStoresApi.enqueueItem({
  universeId: 5243626809,
  queue: "MyQueue",
  item: { name: "MyItem", value: "fooBar", ttl: "300s" },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "cloud/v2/universes/5243626809/memory-store/queues/MyQueue/items/7fffffffffffffff0000000000000003",
  data: { name: "MyItem", value: "fooBar" },
  priority: 0,
  expireTime: 2024-06-04T08:10:33.000Z,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universeId}/memory-store/queues/{queue}/items
```
  