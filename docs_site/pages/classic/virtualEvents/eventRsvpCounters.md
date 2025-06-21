
# eventRsvpCounters
Gets rsvp counters for an event.


## Parameters
| Name    | Type       | Description                                   |
| :------ | :--------- | :-------------------------------------------- |
| eventId | Identifier | The ID of the event to get rsvp counters for. |



## Example
```ts copy showLineNumbers
const { data: counters } = await ClassicVirtualEventsApi.eventRsvpCounters({ eventId: "5904751593700196492" }); 
```


## Example Data
```ts copy showLineNumbers
{ none: 0, going: 1, maybeGoing: 0, notGoing: 0 } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/virtual-events/{eventId}/rsvps/counters
```
  