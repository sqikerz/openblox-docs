
# groupsConfigMetadata
Gets groups configuration metadata.



## Example
```ts copy showLineNumbers
const { data: configMetadata } = await ClassicGroupsApi.groupsConfigMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  groupConfiguration: {
    nameMaxLength: 50,
    descriptionMaxLength: 1000,
    iconMaxFileSizeMb: 20,
    cost: 100,
    isUsingTwoStepWebviewComponent: true,
  },
  recurringPayoutsConfiguration: { maxPayoutPartners: 20 },
  roleConfiguration: {
    nameMaxLength: 100,
    descriptionMaxLength: 1000,
    limit: 40,
    cost: 25,
    minRank: 0,
    maxRank: 255,
  },
  groupNameChangeConfiguration: {
    cost: 100,
    cooldownInDays: 90,
    ownershipCooldownInDays: 90,
  },
  isPremiumPayoutsEnabled: true,
  isDefaultEmblemPolicyEnabled: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/configuration/metadata
```
  