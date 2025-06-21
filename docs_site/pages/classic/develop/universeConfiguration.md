
# universeConfiguration
Gets the configuration for a universe owned by the authenticated user.


## Parameters
| Name       | Type       | Description                                          |
| :--------- | :--------- | :--------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get the configuration for. |



## Example
```ts copy showLineNumbers
const { data: config } = await ClassicDevelopApi.universeConfiguration({ universeId: 6069031486 }); 
```


## Example Data
```ts copy showLineNumbers
{
  allowPrivateServers: false,
  privateServerPrice: null,
  isMeshTextureApiAccessAllowed: false,
  id: 6069031486,
  name: "MightyPart's Place: 06032024_1",
  universeAvatarType: "MorphToR15",
  universeScaleType: "AllScales",
  universeAnimationType: "PlayerChoice",
  universeCollisionType: "OuterBox",
  universeBodyType: "Standard",
  universeJointPositioningType: "ArtistIntent",
  isArchived: false,
  isFriendsOnly: false,
  genre: "All",
  playableDevices: ["Computer", "Phone", "Tablet", "VR"],
  isForSale: false,
  price: 0,
  isStudioAccessToApisAllowed: false,
  privacyType: "Private",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/configuration
```
  