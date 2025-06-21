
# authedUserGetBundleFavorite
Gets the authenticated users favorite for a specific bundle.


## Parameters
| Name     | Type     | Description                               |
| :------- | :------- | :---------------------------------------- |
| userId   | UserId   | The ID of the authenticated user.         |
| bundleId | BundleId | The ID of the bundle to get favorite for. |



## Example
```ts copy showLineNumbers
const { data: favorite } = await ClassicCatalogApi.authedUserGetBundleFavorite({ userId: 45348281, bundleId: 429 }); 
```


## Example Data
```ts copy showLineNumbers
{ bundleId: 429, userId: 45348281, created: 2024-07-30T23:23:36.501Z } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/favorites/users/{userId}/bundles/{bundleId}/favorite
```
  