import { assert, assertGuardEquals } from 'typia';
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import type { TokenCredential } from '@azure/core-auth';
import { createShieldClient } from './sdk/shieldClient.js';

// Export all of the SDK's types
export type * from './sdk/models/index.js';

/**
 * Function that initializes the SHIELD SDK.
 * @param credential Configured authentication session from Entra ID.
 * @param baseUrl Root of the URL that should have endpoints appended to it by the query building system.
 * @param scopeList Where each array item is a different Entra ID standard scope to request on token retrieval. E.g. `['313f3894-325a-4aae-ba2b-bbdfdc1f063b/.default']`.
 * @returns Configured API client that is able to make requests against the specified SHIELD instance.
 */
export function shieldClientFactory(credential: TokenCredential, baseUrl: URL, scopeList: string[]): ReturnType<typeof createShieldClient> {
    // #region Input Validation
    assert(credential);

    assertGuardEquals(baseUrl);

    assertGuardEquals(scopeList);
    // #endregion Input Validation

    /** List of hosts that are allowed when making API calls, this is used to prevent token leaks to threat actors. */
    const allowedHostList = new Set([baseUrl.host]);

    /** Authentication system that will be used to configure the SDK client. */
    const authProvider = new AzureIdentityAuthenticationProvider(credential, scopeList, void 0, allowedHostList);

    /** Instance of the SHIELD SDK client initialization configuration. */
    const shieldAdapter = new FetchRequestAdapter(authProvider);

    // Set the base URL to be what is provided, since the host name is unique every deployment
    shieldAdapter.baseUrl = baseUrl.href.endsWith('/') ? baseUrl.href.substring(0, baseUrl.href.length - 1) : baseUrl.href;

    /** Instance of the API client that can be used for SHIELD access. */
    return createShieldClient(shieldAdapter);
}
