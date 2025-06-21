
# listStandardDataStoreEntries
Lists entries for a standard datastore.


## Parameters
| Name       | Type       | Description                                                                                                                                                                                                                |
| :--------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get data store entries for.                                                                                                                                                                      |
| prefix?    | Prefix     | Provide to return only data store entries with this prefix.                                                                                                                                                                |
| limit?     | number     | The maximum number of data store entries to return. The service might return fewer than this value. If unspecified, at most 10 data store entries are returned. The maximum value is 256 and higher values are set to 256. |
| cursor?    | string     | The paging cursor for the previous or next page.                                                                                                                                                                           |



## Example
```ts copy showLineNumbers
await StandardDataStoresApi_V2.listStandardDataStoreEntries({
  universeId: 5097539509,
  dataStore: "InventoryStore",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "universes/5097539509/data-stores/InventoryStore/entries/user/45348281",
    id: "user/45348281",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/entries
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universe}/data-stores/{data-store}/scopes/{scope}/entries
```
  