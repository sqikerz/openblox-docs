
# featuredEvent
Gets the featured event for a group.


## Parameters
| Name    | Type    | Description                               |
| :------ | :------ | :---------------------------------------- |
| groupId | GroupId | The ID of the group to get the event for. |



## Example
```ts copy showLineNumbers
const { data: eventId } = await ClassicGroupsApi.featuredEvent({ groupId: 15842838 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/featured-content/event
```
  