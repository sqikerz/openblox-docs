
# listOrderedDatastoreEntries
Lists entries in an ordered data store.


## Parameters
| Name          | Type        | Description                                                                                                                |
| :------------ | :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| universeId    | UniverseId  | The ID of the universe to get ordered data store entries from.                                                             |
| dataStoreId   | DataStoreId | The ID (name) of the data store to get entries from.                                                                       |
| scope         | Scope       | The scope to get entries from.                                                                                             |
| sortOrder?    | SortOrder   | Whether to return the results from biggest to smallest (Desc) or smallest to biggest (Asc).                                |
| lessThanOrEq? | number      | Filters the results to include those less than or equal to a specific number (can be used in tangent with `moreThabOrEq`). |
| moreThanOrEq? | number      | Filters the results to include those more than or equal to a specific number (can be used in tangent with `lessThabOrEq`). |
| limit?        | number      | The number of results per request.                                                                                         |
| cursor?       | string      | The paging cursor for the previous or next page.                                                                           |



## Example
```ts copy showLineNumbers
const { data: entries } = await OrderedDataStoresApi_V2.listOrderedDatastoreEntries({
  universeId: 5097539509,
  dataStoreId: "PointsStore",
  scope: "global",
  sortOrder: "Desc",
  lessThanOrEq: 80,
  moreThanOrEq: 70,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "universes/5097539509/ordered-data-stores/PointsStore/scopes/global/entries/45348281",
    value: 78,
    id: "45348281",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/ordered-data-stores/{dataStoreId}/scopes/{scope}/entries
```
  