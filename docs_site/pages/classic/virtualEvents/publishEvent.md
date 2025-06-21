
# publishEvent
Publishes an event.


## Parameters
| Name    | Type       | Description                               |
| :------ | :--------- | :---------------------------------------- |
| eventId | Identifier | The ID of the event to update status for. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicVirtualEventsApi.publishEvent({ eventId: "6533473338141704368" }); 
```


## Example Data
```ts copy showLineNumbers
{ isUpdated: true } 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/virtual-events/{eventId}/status
```
  