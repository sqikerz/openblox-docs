
# orderedDataStoreEntry
Gets an new entry in an ordered data store.


## Parameters
| Name        | Type        | Description                                            |
| :---------- | :---------- | :----------------------------------------------------- |
| universeId  | UniverseId  | The ID of the universe to get the entry from.          |
| dataStoreId | DataStoreId | The ID (name) of the data store to get the entry from. |
| scope       | Scope       | The scope of the data store entry.                     |
| entryId     | EntryId     | the ID (name) of the entry.                            |



## Example
```ts copy showLineNumbers
const { data: entry } = await OrderedDataStoresApi_V2.orderedDataStoreEntry({
  universeId: 5097539509,
  dataStoreId: "PointsStore",
  scope: "global",
  entryId: "45348281",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/ordered-data-stores/PointsStore/scopes/global/entries/45348281",
  value: 78,
  id: "45348281",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/ordered-data-stores/{dataStoreId}/scopes/{scope}/entries
```
  