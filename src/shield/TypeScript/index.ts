import type { TokenCredential } from "@azure/core-auth";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createShieldClient } from "./sdk/shieldClient.js";
import { assert, assertGuardEquals, tags } from 'typia';

// Export all of the SDK's types
export type * from './sdk/models/index.js';

/**
 * Function that initializes the SHIELD SDK.
 * @param credential Configured authentication session from Entra ID.
 * @returns Configured API client that is able to make requests against the specified SHIELD instance.
 */
export function shieldClientFactory(credential: TokenCredential, baseUrl: string & tags.Format<'hostname'>) {
    // #region Input Validation
    assert(credential);

    assertGuardEquals(baseUrl);
    // #endregion Input Validation

    /** List of hosts that are allowed when making API calls, this is used to prevent token leaks to threat actors. */
    const allowedHostList = new Set([baseUrl]);

    /** Authentication system that will be used to configure the SDK client. */
    const authProvider = new AzureIdentityAuthenticationProvider(credential, void 0, void 0, allowedHostList);

    /** Instance of the SHIELD SDK client initialization configuration. */
    const shieldAdapter = new FetchRequestAdapter(authProvider);

    // Set the base URL to be what is provided, since the host name is unique every deployment
    shieldAdapter.baseUrl = `https://${ baseUrl }`;

    /** Instance of the API client that can be used for SHIELD access. */
    return createShieldClient(shieldAdapter);
}
