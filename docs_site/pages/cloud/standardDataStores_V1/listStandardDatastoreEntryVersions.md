
# listStandardDatastoreEntryVersions
Returns a list of data stores belonging to an experience.


## Parameters
| Name          | Type                        | Description                                                                                                                                                            |
| :------------ | :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId    | Identifier                  | The identifier of the experience with data stores that you want to access.                                                                                             |
| datastoreName | string                      | The name of the data store.                                                                                                                                            |
| entryKey      | string                      | The key identifying the entry.                                                                                                                                         |
| scope?        | string                      | The value is global by default.                                                                                                                                        |
| startTime?    | Date \| ISODateTime         | Provide to not include versions earlier than this timestamp.                                                                                                           |
| endTime?      | Date \| ISODateTime         | Provide to not include versions later than this timestamp.                                                                                                             |
| sortOrder?    | "Ascending" \| "Descending" | Either "Ascending" (earlier versions first) or "Descending" (later versions first).                                                                                    |
| limit?        | number                      | The maximum number of items to return. Each call only reads one partition so it can return fewer than the given value when running out of objectives on one partition. |
| cursor?       | string                      | Provide to request the next set of data.                                                                                                                               |



## Example
```ts copy showLineNumbers
const { data: versions } = await StandardDataStoresApi_V1.listStandardDatastoreEntryVersions({
  universeId: 5097539509,
  datastoreName: "InventoryStore",
  entryKey: "user/45348281",
  sortOrder: "Ascending",
  limit: 1,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    version: "08DBB6A47FDE6132.0000000010.08DBB781B9579F00.01",
    deleted: false,
    contentLength: 20,
    createdTime: 2023-09-17T13:26:39.124Z,
    objectCreatedTime: 2023-09-16T11:03:03.922Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries/entry/versions
```
  