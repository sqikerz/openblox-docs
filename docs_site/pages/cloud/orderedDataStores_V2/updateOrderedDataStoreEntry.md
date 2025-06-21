
# updateOrderedDataStoreEntry
Updates an entry in an ordered data store.


## Parameters
| Name        | Type        | Description                                             |
| :---------- | :---------- | :------------------------------------------------------ |
| universeId  | UniverseId  | The ID of the universe to update the entry in.          |
| dataStoreId | DataStoreId | The ID (name) of the data store to update the entry in. |
| scope       | Scope       | The scope of the data store entry to update.            |
| entryId     | EntryId     | the ID (name) of the entry to update.                   |



## Example
```ts copy showLineNumbers
const { data: entry } = await OrderedDataStoresApi_V2.updateOrderedDataStoreEntry({
  universeId: 5097539509,
  dataStoreId: "PointsStore",
  scope: "global",
  entryId: "45348281",
  newEntryValue: 45,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5097539509/ordered-data-stores/PointsStore/scopes/global/entries/45348281",
  value: 45,
  id: "45348281",
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universeId}/ordered-data-stores/{dataStoreId}/scopes/{scope}/entries/{entryId}
```
  