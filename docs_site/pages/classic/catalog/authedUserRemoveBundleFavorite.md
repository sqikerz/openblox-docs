
# authedUserRemoveBundleFavorite
Removes the authenticated users favorite for a specific asset.


## Parameters
| Name    | Type       | Description                         |
| :------ | :--------- | :---------------------------------- |
| userId  | Identifier | The ID of the authenticated user.   |
| assetId | 🤷         | The ID of the bundle to unfavorite. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicCatalogApi.authedUserRemoveBundleFavorite({ userId: 45348281, bundleId: 429 }); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/favorites/users/{userId}/bundles/{bundleId}/favorite
```
  