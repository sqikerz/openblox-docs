
# eventRsvps
Gets rsvps for an event.


## Parameters
| Name    | Type       | Description                           |
| :------ | :--------- | :------------------------------------ |
| eventId | Identifier | The ID of the event to get rsvps for. |



## Example
```ts copy showLineNumbers
const { data: rsvps } = await ClassicVirtualEventsApi.eventRsvps({ eventId: "5904751593700196492" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userId: 45348281,
    rsvpStatus: "going",
    shouldSeeNotificationsUpsellModal: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/virtual-events/{eventId}/rsvps
```
  