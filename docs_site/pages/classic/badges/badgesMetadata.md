
# badgesMetadata
Gets metadata about the badges system.



## Example
```ts copy showLineNumbers
const { data: metadata } = await ClassicBadgesApi.badgesMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  badgeCreationPrice: 100,
  maxBadgeNameLength: 50,
  maxBadgeDescriptionLength: 1000,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/badges/metadata
```
  