
# updateDeveloperProductIcon
Updates a developer product's icon.


## Parameters
| Name               | Type           | Description                                         |
| :----------------- | :------------- | :-------------------------------------------------- |
| developerProductId | Identifier     | The ID of the developer product to update icon for. |
| icon               | string \| File | The new icon for the developer product.             |



## Example
```ts copy showLineNumbers
const {
  data,
  response: { body },
} = await ClassicDeveloperProductsApi.updateDeveloperProductIcon({
  developerProductId: 975462435,
  icon: "./developerProductIcon.png",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/developer-products/{developerProductId}/image
```
  