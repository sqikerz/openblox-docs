
# bundleFavoritesCount
Gets favorites count for a bundle.


## Parameters
| Name     | Type       | Description                                      |
| :------- | :--------- | :----------------------------------------------- |
| bundleId | Identifier | The ID of the bundle to get favorites count for. |



## Example
```ts copy showLineNumbers
const { data: favoritesCount } = await ClassicCatalogApi.bundleFavoritesCount({ bundleId: 429 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/favorites/bundles/{bundleId}/count
```
  