
# updateUniverseConfiguration_V2
Updates the configuration for a universe owned by the authenticated user.


## Parameters
| Name                          | Type  | Description                                             |
| :---------------------------- | :---- | :------------------------------------------------------ |
| universeId                    | 🤷    | The ID of the universe to set configuration for.        |
| allowPrivateServers           | 🤷    | If private servers are allowed for the universe.        |
| privateServerPrice            | 🤷    | The price of private servers.                           |
| name                          | 🤷    | The new name for the universe.                          |
| description                   | 🤷    | The universes description.                              |
| avatarType                    | 🤷    | The new avatarType for the universe.                    |
| animationType                 | 🤷    | The new animationType for the universe.                 |
| collisionType                 | 🤷    | The new collisionType for the universe.                 |
| bodyType                      | 🤷    | The new bodyType for the universe.                      |
| jointPositioningType          | 🤷    | The new jointPositioningType for the universe.          |
| isArchived                    | 🤷    | If the universe is to be archived.                      |
| isFriendsOnly                 | 🤷    | If the universe is to be for friends only.              |
| genre                         | 🤷    | The new genre for the universe.                         |
| playableDevices               | 🤷    | The allowed devices the universe can be played on.      |
| avatarAssetOverrides          | 🤷    | The overrides for avatar assets.                        |
| avatarMinScales               | 🤷    | The min scales allowed for avatars.                     |
| avatarMaxScales               | 🤷    | The max scales allowed for avatars.                     |
| studioAccessToApisAllowed     | 🤷    | If studio is allowed to access apis.                    |
| isThirdPartyTeleportAllowed   | 🤷    | If third party teleports are allowed.                   |
| isThirdPartyAssetAllowed      | 🤷    | if third party assets are allowed.                      |
| isThirdPartyPurchaseAllowed   | 🤷    | If third party purchases are allowed.                   |
| isMeshTextureApiAccessAllowed | 🤷    | If mesh and texture apis can be used for this universe. |
| isForSale                     | 🤷    | If the universe is for sale.                            |
| price                         | 🤷    | The price of the universe.                              |



## Example
```ts copy showLineNumbers
const { data: universe } = await ClassicDevelopApi.updateUniverseConfiguration_V2({
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
  optInRegions: [],
  isMeshTextureApiAccessAllowed: true,
  id: 5638577595,
  name: "New name!",
  description: "",
  universeAvatarType: "PlayerChoice",
  universeAnimationType: "PlayerChoice",
  universeCollisionType: "OuterBox",
  universeJointPositioningType: "ArtistIntent",
  isArchived: false,
  isFriendsOnly: false,
  genre: "All",
  playableDevices: ["Computer"],
  isForSale: false,
  price: 0,
  universeAvatarMinScales: {
    height: 0.9,
    width: 0.7,
    head: 0.95,
    depth: 0,
    proportion: 0,
    bodyType: 0,
  },
  universeAvatarMaxScales: {
    height: 1.05,
    width: 1,
    head: 1,
    depth: 0,
    proportion: 1,
    bodyType: 1,
  },
  studioAccessToApisAllowed: false,
  universeAvatarAssetOverrides: [],
  permissions: {
    isThirdPartyTeleportAllowed: false,
    isThirdPartyAssetAllowed: false,
    isThirdPartyPurchaseAllowed: false,
  },
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/${universeId}/configuration
```
  