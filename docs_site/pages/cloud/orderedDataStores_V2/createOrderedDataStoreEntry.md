
# createOrderedDataStoreEntry
Creates a new entry in an ordered data store.


## Parameters
| Name        | Type        | Description                                             |
| :---------- | :---------- | :------------------------------------------------------ |
| universeId  | UniverseId  | The ID of the universe to create the entry in.          |
| dataStoreId | DataStoreId | The ID (name) of the data store to create the entry in. |
| scope       | Scope       | The scope for the data store entry.                     |
| entryId     | EntryId     | the ID (name) for the entry.                            |



## Example
```ts copy showLineNumbers
const { data: entry } = await OrderedDataStoresApi_V2.createOrderedDataStoreEntry({
  universeId: 5097539509,
  dataStoreId: "PointsStore",
  scope: "global",
  entryId: "453482811",
  entryValue: 15,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/ordered-data-stores/PointsStore/scopes/global/entries/45348281",
  value: 15,
  id: "45348281",
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/universes/{universeId}/ordered-data-stores/{dataStoreId}/scopes/{scope}/entries
```
  