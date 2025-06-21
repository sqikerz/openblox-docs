
# authedUserCreateBundleFavorite
Favorites a specific bundle for the authenticated user.


## Parameters
| Name     | Type    | Description                                  |
| :------- | :------ | :------------------------------------------- |
| userId   | UserId  | The ID of the authenticated user.            |
| bundleId | AssetId | The ID of the bundle to create favorite for. |



## Example
```ts copy showLineNumbers
const { data: favorite } = await ClassicCatalogApi.authedUserCreateBundleFavorite({ userId: 45348281, bundleId: 429 }); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/favorites/users/{userId}/bundles/{bundleId}/favorite
```
  