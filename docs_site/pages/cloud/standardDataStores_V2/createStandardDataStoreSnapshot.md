
# createStandardDataStoreSnapshot
Creates a snapshot of standard datastores for a universe.


## Parameters
| Name       | Type       | Description                                      |
| :--------- | :--------- | :----------------------------------------------- |
| universeId | Identifier | The ID of the universe to create a snapshot for. |



## Example
```ts copy showLineNumbers
const { data: snapshot } = await StandardDataStoresApi_V2.createStandardDataStoreSnapshot({ universeId: 5097539509 }); 
```


## Example Data
```ts copy showLineNumbers
{ newSnapshotTaken: false, latestSnapshotTime: 2024-07-29T22:08:49.588Z } 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /cloud/v2/universes/{universeId}/data-stores:snapshot
```
  