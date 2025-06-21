
# authedUserAssetResellableCopies
Gets resellable copies of an asset that the authenticated user owns.


## Parameters
| Name    | Type       | Description                                       |
| :------ | :--------- | :------------------------------------------------ |
| userId  | Identifier | The ID of the authenticated user.                 |
| assetId | Identifier | The ID of the asset to get resellable copies for. |



## Example
```ts copy showLineNumbers
const { data: resellableCopies } = await ClassicEconomyApi.authedUserAssetResellableCopies({
  userId: 45348281,
  assetId: 3798248888,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userAssetId: 45867931761,
    seller: {
      hasVerifiedBadge: false,
      id: 45348281,
      type: "User",
      name: "MightyPart",
    },
    price: null,
    serialNumber: null,
    isOnHold: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/assets/{assetId}/users/{userId}/resellable-copies
```
  