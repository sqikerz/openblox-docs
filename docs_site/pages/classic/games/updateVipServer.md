
# updateVipServer
Updates a vip server.


## Parameters
| Name         | Type        | Description                             |
| :----------- | :---------- | :-------------------------------------- |
| vipServerId  | VipServerId | The ID of the vip server to update.     |
| name?        | Name        | The new name for the vip server.        |
| newJoinCode? | boolean     | If the join code should be regenerated. |
| active?      | Active      | If the vip server should be active.     |



## Example
```ts copy showLineNumbers
const { data: serverInfo } = await ClassicGamesApi.updateVipServer({ vipServerId: 1630945839, name: "New Name" }); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 1630945839,
  name: "New Name",
  game: {
    id: 6430220996,
    name: "Get Id",
    rootPlace: { id: 18980972074, name: "Get Id" },
  },
  joinCode: "70420354791950165689950670608627",
  active: true,
  subscription: {
    active: false,
    expired: false,
    expirationDate: "2024-09-17T15:49:02.8879762Z",
    price: null,
    canRenew: false,
    hasInsufficientFunds: false,
    hasRecurringProfile: true,
    hasPriceChanged: true,
  },
  permissions: {
    clanAllowed: false,
    enemyClanId: null,
    friendsAllowed: false,
    users: [],
  },
  voiceSettings: { enabled: false },
  link: "https://www.roblox.com/games/18980972074?privateServerLinkCode=70420354791950165689950670608627",
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/vip-servers/{vipServerId}
```
  