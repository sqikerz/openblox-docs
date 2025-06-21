
# authedUserDevExCashOutInfo
Gets info data about whether the authenticated user can make a developer exchange cashout request.



## Example
```ts copy showLineNumbers
const { data: cashOutInfo } = await ClassicEconomyApi.authedUserDevExCashOutInfo(); 
```


## Example Data
```ts copy showLineNumbers
{
  hasCurrencyOperationError: false,
  currencyOperationErrorMessage: "",
  showOnlyExchangeRates: true,
  emailIsVerified: true,
  isImbursementBlacklistUser: false,
  canProceedToCashout: false,
  showProgressBar: false,
  percentRobux: 1,
  minRobuxToCashOut: 30000,
  maxRobuxCanCashOut: 20000000000,
  lastImbursementStatus: null,
  lastImbursementSubmissionDate: null,
  conversionPercent: 0.0035,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/developer-exchange/info
```
  