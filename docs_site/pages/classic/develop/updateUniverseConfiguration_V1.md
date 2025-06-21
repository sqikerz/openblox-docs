
# updateUniverseConfiguration_V1
Updates the configuration for a universe owned by the authenticated user.


## Parameters
| Name                          | Type  | Description                                             |
| :---------------------------- | :---- | :------------------------------------------------------ |
| universeId                    | 🤷    | The ID of the universe to set configuration for.        |
| name                          | 🤷    | The new name for the universe.                          |
| avatarType                    | 🤷    | The new avatarType for the universe.                    |
| scaleType                     | 🤷    | The new scaleType for the universe.                     |
| animationType                 | 🤷    | The new animationType for the universe.                 |
| collisionType                 | 🤷    | The new collisionType for the universe.                 |
| bodyType                      | 🤷    | The new bodyType for the universe.                      |
| jointPositioningType          | 🤷    | The new jointPositioningType for the universe.          |
| isArchived                    | 🤷    | If the universe is to be archived.                      |
| isFriendsOnly                 | 🤷    | If the universe is to be for friends only.              |
| genre                         | 🤷    | The new genre for the universe.                         |
| playableDevices               | 🤷    | The allowed devices the universe can be played on.      |
| isMeshTextureApiAccessAllowed | 🤷    | If mesh and texture apis can be used for this universe. |
| isForSale                     | 🤷    | If the universe is for sale.                            |
| price                         | 🤷    | The price of the universe.                              |



## Example
```ts copy showLineNumbers
const { data: updatedConfig } = await ClassicDevelopApi.updateUniverseConfiguration_V1({
  universeId: 5638577595,
  playableDevices: ["Computer"],
  avatarType: "PlayerChoice",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  allowPrivateServers: false,
  privateServerPrice: null,
  isMeshTextureApiAccessAllowed: true,
  id: 5638577595,
  name: "Terrain Gen Tech Demo",
  universeAvatarType: "PlayerChoice",
  universeScaleType: "AllScales",
  universeAnimationType: "PlayerChoice",
  universeCollisionType: "OuterBox",
  universeBodyType: "Standard",
  universeJointPositioningType: "ArtistIntent",
  isArchived: false,
  isFriendsOnly: false,
  genre: "All",
  playableDevices: ["Computer"],
  isForSale: false,
  price: 0,
  isStudioAccessToApisAllowed: false,
  privacyType: "Public",
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/universes/{universeId}/configuration
```
  