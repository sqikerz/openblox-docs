
# orderedDatastoreEntry
Returns a list of entries from an ordered data store.


## Parameters
| Name             | Type             | Description                                                                        |
| :--------------- | :--------------- | :--------------------------------------------------------------------------------- |
| universeId       | UniverseId       | The identifier of the experience with ordered data stores that you want to access. |
| orderedDataStore | OrderedDataStore | The name of the target ordered data store.                                         |
| scope            | Scope            | The name of the data store scope.                                                  |
| id               | Id               | The id of the entry.                                                               |



## Example
```ts copy showLineNumbers
const { data: entry } = await OrderedDataStoresApi_V1.orderedDatastoreEntry({
  universeId: 5097539509,
  orderedDataStore: "PointsStore",
  scope: "global",
  id: "45348281",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/orderedDataStores/PointsStore/scopes/global/entries/45348281",
  value: 54,
  id: "45348281",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries
```
  