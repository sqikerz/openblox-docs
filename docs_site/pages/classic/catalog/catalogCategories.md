
# catalogCategories
Lists catalog categories and their corresponding ID.



## Example
```ts copy showLineNumbers
const { data: categories } = await ClassicCatalogApi.catalogCategories(); 
```


## Example Data
```ts copy showLineNumbers
{
  Featured: 0,
  All: 1,
  Collectibles: 2,
  Clothing: 3,
  BodyParts: 4,
  Gear: 5,
  Models: 6,
  Plugins: 7,
  Decals: 8,
  Audio: 9,
  Meshes: 10,
  Accessories: 11,
  AvatarAnimations: 12,
  CommunityCreations: 13,
  Video: 14,
  Recommended: 15,
  LayeredClothing: 16,
  Characters: 17,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/asset-to-category
```
  