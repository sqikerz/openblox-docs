
# placeConfiguration
Gets the configuration for a place owned by the authenticated user.


## Parameters
| Name    | Type    | Description                                        |
| :------ | :------ | :------------------------------------------------- |
| placeId | PlaceId | The ID of the place to get the configuration from. |



## Example
```ts copy showLineNumbers
const { data: config } = await ClassicDevelopApi.placeConfiguration({ placeId: 16349154726 }); 
```


## Example Data
```ts copy showLineNumbers
{
  maxPlayerCount: 50,
  socialSlotType: "Automatic",
  customSocialSlotsCount: 15,
  allowCopying: false,
  currentSavedVersion: 1537,
  isAllGenresAllowed: true,
  allowedGearTypes: [],
  maxPlayersAllowed: 700,
  id: 16349154726,
  universeId: 5638577595,
  name: "New name!",
  description: "",
  isRootPlace: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/places/{placeId}
```
  