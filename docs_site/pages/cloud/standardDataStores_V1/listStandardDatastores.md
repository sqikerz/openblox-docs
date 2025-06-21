
# listStandardDatastores
Returns a list of data stores belonging to an experience.


## Parameters
| Name       | Type       | Description                                                                                                                                                            |
| :--------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId | Identifier | The identifier of the experience with data stores that you want to access.                                                                                             |
| prefix?    | Prefix     | Provide to return only data stores with this prefix.                                                                                                                   |
| limit?     | number     | The maximum number of items to return. Each call only reads one partition so it can return fewer than the given value when running out of objectives on one partition. |
| cursor?    | string     | Provide to request the next set of data.                                                                                                                               |



## Example
```ts copy showLineNumbers
const { data: datastores } = await StandardDataStoresApi_V1.listStandardDatastores({ universeId: 5097539509 }); 
```


## Example Data
```ts copy showLineNumbers
[{ name: "InventoryStore", createdTime: 2023-09-16T11:03:03.868Z }] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/standard-datastores
```
  