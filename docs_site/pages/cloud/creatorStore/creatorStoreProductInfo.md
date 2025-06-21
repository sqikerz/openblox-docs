
# creatorStoreProductInfo


## Parameters
| Name              | Type  | Description                                                       |
| :---------------- | :---- | :---------------------------------------------------------------- |
| modelAssetId      | 🤷    | Use this if the creator product you are getting is a model.       |
| pluginAssetId     | 🤷    | Use this if the creator product you are getting is a plugin.      |
| audioAssetId      | 🤷    | Use this if the creator product you are getting is an audio.      |
| decalAssetId      | 🤷    | Use this if the creator product you are getting is a decal.       |
| meshPartAssetId   | 🤷    | Use this if the creator product you are getting is a mesh part.   |
| videoAssetId      | 🤷    | Use this if the creator product you are getting is a video.       |
| fontFamilyAssetId | 🤷    | Use this if the creator product you are getting is a font family. |



## Example
```ts copy showLineNumbers
const { data: productInfo } = await CreatorStoreApi.creatorStoreProductInfo({ modelAssetId: 16989381169 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "creator-store-products/CreatorMarketplaceAsset-Model-16989381169",
  displayName: "monkey",
  description: "",
  basePrice: {
    currencyCode: "USD",
    quantity: { significand: 0, exponent: 0 },
  },
  purchasePrice: {
    currencyCode: "USD",
    quantity: { significand: 0, exponent: 0 },
  },
  published: false,
  restrictions: [],
  purchasable: false,
  userSeller: "45348281",
  modelAssetId: "16989381169",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/creator-store-products/{productId}
```
  