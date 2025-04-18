# SHI Data Gateway - TypeScript SDK

This SDK provides a convenient TypeScript client for interacting with the SHI Data Gateway service. It is automatically generated from the OpenAPI specification located at [`Data-Gateway.json`](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/blob/main/specs/Data-Gateway.json) using [Kiota](https://github.com/microsoft/kiota).

All typing data is included in the package.

## Installation

Install the SDK using npm:

```bash
npm install @shi-corp/sdk-data-gateway
```

## Usage

Here's a basic example of how to use the SDK:

```TypeScript
import { DefaultAzureCredential } from '@azure/identity'
import { dataGatewayClientFactory } from '@shi-corp/sdk-data-gateway';

/** Authentication session used to authenticate to the SHI Data Gateway. */
const credential = new DefaultAzureCredential();

/** Configured client for the data gateway that can make authenticated web requests against SDG. */
const sdgClient = dataGatewayClientFactory(credential);

/** Collection of correlation records representing the available list of license reports for the current authenticated tenant. */
const results = await sdgClient.api.licenseReport.correlation.get();

// Loop through each available license report
for (const correlationRecord of results) {
    // Do something here
}
```

### Advanced Usage

You can optionally configure the SDK client with a custom base URL, including support for it being nested deep in a L7 load balancer:

```TypeScript
/** Custom host and endpoint base to as an example for something behind a layer 7 load balancer, E.g. Azure App Gateway or Azure API Gateway. If in debug mode, run against localhost. */
const customBaseUrl = debugMode ? new URL('http://localhost:3002') : new URL('https://custom-host.example.com/Ballance/Instance1/');

/** Configured instance of the Data Gateway client. */
const customConfiguredClient = dataGatewayClientFactory(credential, customBaseUrl);
```

and/or scope (permission) list:

```TypeScript
/**
 * This parameter defaults to ['4c40281b-a305-4aaf-90a4-d5bbee6eb8ed/.default'].
 * `.default` and explicit permissions can't exist in the same custom scope list at the same time, Entra ID doesn't support this.
 *
 * If not providing the `.default` scope, you can have any number of scopes (permissions) listed.
 */
const customScopes = ['your-custom-scope/something.read.all', 'your-custom-scope/everything.readwrite.all'];

// Initialize the SDK client with custom configuration.
const customConfiguredClient = dataGatewayClientFactory(credential, void 0, customScopes);
```

## Project Structure

- `bin/`: Compiled JavaScript files and type definitions.
- `sdk/`: Source TypeScript files generated by Kiota.
  - `api/`: API endpoint definitions.
  - `models/`: Data models used by the SDK.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) - Latest LTS version
- [Kiota](https://github.com/microsoft/kiota)

### Generating the SDK

To regenerate the SDK from the OpenAPI specification, run:

```bash
npm run-script generate:Sdk
```

### Building the SDK

To build the SDK for production, run:

```bash
npm run-script build:Prod
```

## License

This SDK is licensed under the [MIT License](./LICENSE).

## Support

For issues or feature requests, please visit the [GitHub Issues page](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/issues).

For more information, visit the [official documentation](https://docs.shilab.com).
