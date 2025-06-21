
# updateInstance
Updates an Instance.


## Parameters
| Name       | Type                   | Description                                      |
| :--------- | :--------------------- | :----------------------------------------------- |
| universeId | UniverseId             | The ID of the universe to get the Instance from. |
| placeId    | PlaceId                | The ID of the place to get the Instance from.    |
| instanceId | InstanceId             | The ID of the Instance to get.                   |
| newData    | UpdateInstance_NewData | The new data to apply to the Instance.           |



## Example
```ts copy showLineNumbers
const { data: updatedInstance } = await EngineApi.updateInstance({
  universeId: 5795192361,
  placeId: 16866553538,
  instanceId: "4b70b051-16c0-dede-0691-7e9e00004e03",
  newData: {
    script: {
      source: "-- editing a script via typescript :)",
    },
  },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538/instances/4b70b051-16c0-dede-0691-7e9e00004e03/operations/7a865423-3566-4377-8b9e-ffd831341399",
  done: true,
  response: {
    "@type": "type.googleapis.com/roblox.open_cloud.cloud.v2.Instance",
    path: "universes/5795192361/places/16866553538/instances/4b70b051-16c0-dede-0691-7e9e00004e03",
    hasChildren: false,
    engineInstance: {
      id: "4b70b051-16c0-dede-0691-7e9e00004e03",
      parent: "44b188da-ce63-2b47-02e9-c68d004815fc",
      name: "Script",
      details: {
        script: {
          enabled: true,
          runContext: "Legacy",
          source: "-- editing a script via typescript :)",
        },
      },
    },
  },
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/universes/{universe}/places/{place}/instances/{instance}
```
  