
# flushAllQueues
Removes all items from every queue in a given universe.


## Parameters
| Name       | Type       | Description                                           |
| :--------- | :--------- | :---------------------------------------------------- |
| universeId | UniverseId | The id of the universe to flush all queue items from. |



## Example
```ts copy showLineNumbers
const { data: createdOperation } = await MemoryStoresApi.flushAllQueues({ universeId: 5243626809 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "cloud/v2/universes/5243626809/operations/AAUAAAAAAADRMx55T0AKRxSgFCrSusMzqOKQNyVaQz8eMi9t-dwQwQ",
  done: false,
  id: "AAUAAAAAAADRMx55T0AKRxSgFCrSusMzqOKQNyVaQz8eMi9t-dwQwQ",
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/${universeId}/memory-store:flush
```
  