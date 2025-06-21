
# listOrderedDatastoreEntries
Returns a list of entries from an ordered data store.


## Parameters
| Name             | Type             | Description                                                                                                                                                                                         |
| :--------------- | :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId       | UniverseId       | The identifier of the experience with ordered data stores that you want to access.                                                                                                                  |
| orderedDataStore | OrderedDataStore | The name of the target ordered data store.                                                                                                                                                          |
| scope            | Scope            | The name of the data store scope.                                                                                                                                                                   |
| maxPageSize?     | number           | The maximum number of entries to return. The service may return fewer than this value. The default value is 10. The maximum value is 100, and any input above 100 is coerced to 100.                |
| orderBy?         | "desc" \| "asc"  | The enumeration direction. The order by default is ascending. Input a desc suffix for descending.                                                                                                   |
| filter?          | string           | The range of qualifying values of entries to return.                                                                                                                                                |
| cursor?          | string           | A page token received from a previous List call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to List must match the call providing the page token. |



## Example
```ts copy showLineNumbers
const { data: entries } = await OrderedDataStoresApi_V1.listOrderedDatastoreEntries({
  universeId: 5097539509,
  orderedDataStore: "PointsStore",
  scope: "global",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "universes/5097539509/orderedDataStores/PointsStore/scopes/global/entries/45348281",
    value: 54,
    id: "45348281",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries
```
  