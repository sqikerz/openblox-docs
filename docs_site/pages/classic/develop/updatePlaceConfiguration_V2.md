
# updatePlaceConfiguration_V2
Updates the configuration for a place owned by the authenticated user.


## Parameters
| Name         | Type        | Description                                          |
| :----------- | :---------- | :--------------------------------------------------- |
| placeId      | PlaceId     | The ID of the place to update the configuration for. |
| name?        | Name        | The name for the place.                              |
| description? | Description | The description for the place.                       |



## Example
```ts copy showLineNumbers
const { data: updatedConfig } = await ClassicDevelopApi.updatePlaceConfiguration_V2({
  placeId: 16349154726,
  allowCopying: false,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 16349154726,
  universeId: 5638577595,
  name: "New name!",
  description: "",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/places/{placeId}
```
  