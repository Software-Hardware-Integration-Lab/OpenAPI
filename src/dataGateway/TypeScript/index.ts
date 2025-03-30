import type { TokenCredential } from "@azure/core-auth";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createDataGatewayClient } from "./sdk/dataGatewayClient.js";

// Export all of the SDK's types
export type * from './sdk/models/index.js';

/**
 * Function that initializes the Data Gateway SDK.
 * @param credential Configured authentication session.
 * @returns Configured API client that is able to make requests against SHI Data Gateway.
 */
export function dataGatewayClientFactory(credential: TokenCredential) {
    /** List of hosts that are allowed when making API calls, this is used to prevent token leaks to threat actors. */
    const allowedHostList = new Set(['https://api.shilab.com']);

    /** Authentication system that will be used to configure the SDK client. */
    const authProvider = new AzureIdentityAuthenticationProvider(credential, void 0, void 0, allowedHostList);

    /** Instance of the data gateway client initialization configuration. */
    const dataGatewayAdapter = new FetchRequestAdapter(authProvider);

    /** Instance of the API client that can be used for data gateway access. */
    return createDataGatewayClient(dataGatewayAdapter);
}
