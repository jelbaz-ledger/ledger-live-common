// @flow
import type { DatasetTest } from "../dataset";
// import { NotEnoughBalance } from "@ledgerhq/errors";

const dataset: DatasetTest = {
  implementations: ["libcore", "mock", "ripplejs"],
  currencies: {
    ripple: {
      accounts: [
        {
          transactions: [
            {
              name: "not enough balance with base reserve",
              transaction: {
                family: "ripple",
                recipient: "rMLgQYP7up5xP3f9o51F9k1q1JEf9doaAi",
                amount: "1000",
                tag: null,
                fee: "1",
                feeCustomUnit: null,
                networkInfo: null
              },
              expectedStatus: {
                amount: "1000",
                estimatedFees: "1",
                recipientError: null,
                recipientWarning: null,
                showFeeWarning: false,
                totalSpent: "1001",
                // transactionError: new NotEnoughBalance(), // <- how to match?
                useAllAmount: false
              }
            }
          ],
          raw: {
            id:
              "libcore:1:ripple:xpub6BemYiVNp19a2SqH5MuUUuMUsiMU4ZLcXQgfoFxbRSRjPEuzcwcjx5SXezUhwcmgCTKGzuGAqHxRFSCn6YLAqydEdq11LVYENwxNC6ctwrv:",
            seedIdentifier:
              "02b96ea039567968d11d12e3195e4b6194a016c18511e51814e5cca03fcd800a29",
            name: "XRP 1",
            derivationMode: "",
            index: 0,
            freshAddress: "rJfzRJHcM9qGuMdULGM7mU4RikqRY47FxR",
            freshAddressPath: "44'/144'/0'/0/0",
            freshAddresses: [
              {
                address: "rJfzRJHcM9qGuMdULGM7mU4RikqRY47FxR",
                derivationPath: "44'/144'/0'/0/0"
              }
            ],
            blockHeight: 49806548,
            operations: [],
            pendingOperations: [],
            currencyId: "ripple",
            unitMagnitude: 6,
            lastSyncDate: "2019-09-04T12:29:54.298Z",
            balance: "20000000",
            xpub:
              "xpub6BemYiVNp19a2SqH5MuUUuMUsiMU4ZLcXQgfoFxbRSRjPEuzcwcjx5SXezUhwcmgCTKGzuGAqHxRFSCn6YLAqydEdq11LVYENwxNC6ctwrv"
          }
        }
      ]
    }
  }
};

export default dataset;
