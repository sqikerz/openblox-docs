
# eventInfo
Gets information about an event.


## Parameters
| Name    | Type       | Description                                 |
| :------ | :--------- | :------------------------------------------ |
| eventId | Identifier | The ID of the event to get information for. |



## Example
```ts copy showLineNumbers
const { data: eventInfo } = await ClassicVirtualEventsApi.eventInfo({ eventId: "5904751593700196492" }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: "5904751593700196492",
  title: "My Cool Event Of Epic Awesomeness",
  displayTitle: "My Cool Event Of Epic Awesomeness",
  description: "hello",
  displayDescription: "hello",
  eventTime: {
    startUtc: 2024-07-12T19:18:00.000Z,
    endUtc: 2024-07-13T20:30:00.000Z,
  },
  host: {
    hostName: "Bloxfolio",
    hasVerifiedBadge: false,
    hostType: "group",
    hostId: 15842838,
  },
  universeId: 6255645791,
  eventStatus: "active",
  createdUtc: 2024-07-12T19:01:41.661Z,
  updatedUtc: 2024-07-13T20:29:50.734Z,
  eventCategories: [
    { category: "activity", rank: 0 },
    { category: "systemUpdate", rank: 1 },
  ],
  thumbnails: [{ mediaId: 18459197740, rank: 0 }],
  allThumbnailsCreated: false,
  userRsvpStatus: "going",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/virtual-events/{eventId}
```
  