
# updateEvent
DESCRIPTION



## Example
```ts copy showLineNumbers
const { data: updatedEvent } = await ClassicVirtualEventsApi.updateEvent({
  eventId: "7512531542949494927",
  title: "Event Name",
  description: "Description",
  startTime: "2024-08-14T00:46:54.000Z",
  endTime: "2024-08-14T01:46:54.000Z",
  primaryCategory: "contentUpdate",
  secondaryCategory: "locationUpdate",
}); 
```


## Example Data
```ts copy showLineNumbers
{ isUpdated: true, thumbnailsUpdated: false, categoriesUpdated: true } 
```


## Endpoint
```ansi
REST /...
```
  