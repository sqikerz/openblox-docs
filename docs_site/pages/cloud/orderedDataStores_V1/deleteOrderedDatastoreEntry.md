
# deleteOrderedDatastoreEntry
Deletes the specified entry in an ordered datastore.


## Parameters
| Name             | Type       | Description                                                                        |
| :--------------- | :--------- | :--------------------------------------------------------------------------------- |
| universeId       | Identifier | The identifier of the experience with ordered data stores that you want to access. |
| orderedDataStore | string     | The name of the target ordered data store.                                         |
| scope            | string     | The name of the data store scope.                                                  |
| id               | string     | The id of the entry.                                                               |



## Example
```ts copy showLineNumbers
const { data: success } = await OrderedDataStoresApi_V1.deleteOrderedDatastoreEntry({
  universeId: 5097539509,
  orderedDataStore: "PointsStore",
  scope: "global",
  id: "45348281",
}); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries
```
  