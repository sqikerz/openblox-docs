
# groupsPolicyInfo
Gets group policy info used for compliance.


## Parameters
| Name     | Type                          | Description                               |
| :------- | :---------------------------- | :---------------------------------------- |
| groupIds | ArrayNonEmptyIfConst<GroupId> | the ids of groups to get policy info for. |



## Example
```ts copy showLineNumbers
const { data: policyInfo } = await ClassicGroupsApi.groupsPolicyInfo({ groupIds: [5850082] }); 
```


## Example Data
```ts copy showLineNumbers
{ "5850082": { canViewGroup: true } } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/policies
```
  