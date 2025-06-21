
# standardDatastoreKeys
Returns a list of entry keys within a data store.


## Parameters
| Name          | Type       | Description                                                                                                                                                            |
| :------------ | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId    | Identifier | The identifier of the experience with data stores that you want to access.                                                                                             |
| datastoreName | string     | The name of the data store.                                                                                                                                            |
| scope?        | string     | The value is global by default.                                                                                                                                        |
| allScopes?    | boolean    | Set to true to return keys from all scopes.                                                                                                                            |
| prefix?       | Prefix     | Provide to return only keys with this prefix.                                                                                                                          |
| limit?        | number     | The maximum number of items to return. Each call only reads one partition so it can return fewer than the given value when running out of objectives on one partition. |
| cursor?       | string     | Provide to request the next set of data.                                                                                                                               |



## Example
```ts copy showLineNumbers
const { data: keys } = await StandardDataStoresApi_V1.standardDatastoreKeys({
  universeId: 5097539509,
  datastoreName: "InventoryStore",
}); 
```


## Example Data
```ts copy showLineNumbers
["user/45348281"] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores/datastore/entries
```
  