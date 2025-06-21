
# listStandardDataStores
Returns a list of data stores belonging to an experience.


## Parameters
| Name       | Type       | Description                                                                                                                                                                                                  |
| :--------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to list datastores for.                                                                                                                                                               |
| prefix?    | Prefix     | Provide to return only data stores with this prefix.                                                                                                                                                         |
| limit?     | number     | The maximum number of data stores to return. The service might return fewer than this value. If unspecified, at most 10 data stores are returned. The maximum value is 100 and higher values are set to 100. |
| cursor?    | string     | The paging cursor for the previous or next page.                                                                                                                                                             |



## Example
```ts copy showLineNumbers
const { data: datastores } = await StandardDataStoresApi_V2.listStandardDataStores({
  universeId: 5097539509,
  prefix: "Ba",
}); 
```


## Example Data
```ts copy showLineNumbers
[{ path: "universes/5097539509/data-stores/Bans", id: "Bans" }] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/data-stores
```
  