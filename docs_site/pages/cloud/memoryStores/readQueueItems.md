
# readQueueItems
Reads queue items.


## Parameters
| Name                        | Type       | Description                                                                                                                                          |
| :-------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId                  | Identifier | The id of the universe to read queue items from.                                                                                                     |
| queue                       | string     | Name of the Queue.                                                                                                                                   |
| limit?                      | number     | Maximum entries to read, Max 200, Default 1.                                                                                                         |
| allOrNothing?               | boolean    | Whether to read any items if >= count can’t be read. Default false.                                                                                  |
| invisibilityTimeoutSeconds? | number     | Invisibility timeout for items read, default 30s. This will make previously read items invisible for the provided duration in the next Read request. |



## Example
```ts copy showLineNumbers
type Item = { isReal: boolean };
const { data: queueItems } = await MemoryStoresApi.readQueueItems<Item>({
  universeId: 5243626809,
  queue: "MyQueue",
  limit: 2,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  items: [
    { name: "Testing123", value: { isReal: true } },
    { name: "Testing1234", value: { isReal: true } },
  ],
  id: "48e44da3c8754a4ab7ed728d07ac9526",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/memory-store/queues/{queue}/items:read
```
  