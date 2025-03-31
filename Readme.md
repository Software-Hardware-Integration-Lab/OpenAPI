# SHI International Corp. OpenAPI Specifications Repository

[![Validate OpenAPI Spec Files](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/actions/workflows/Validate.yml/badge.svg)](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/actions/workflows/Validate.yml)

This repository contains the OpenAPI specifications for SHI International Corp's APIs. These specifications define the structure and behavior of our APIs, enabling seamless integration and interaction between different services within the SHI ecosystem.

## Repository Structure

```text
.
├── specs/                  # Raw OpenAPI specification files (JSON format)
├── src/
│   ├── dataGateway/        # Source code and SDK for Data Gateway
│   └── shield/             # Source code and SDK for SHIELD
└── .github/workflows/      # CI/CD workflows for validation and SDK generation
```

- `specs/`: Contains raw OpenAPI specification files in JSON format. These files serve as the source of truth for our APIs and are used to automatically generate SDKs.

- `src/`: Contains SDK implementations automatically generated from the OpenAPI specifications using [Kiota](https://github.com/microsoft/kiota).

## Using the Specifications

### Accessing Raw Specifications

The raw OpenAPI specification files are located in the [`specs`](./specs) folder.
All specifications are provided in JSON format.

### Using Published SDK Packages

We provide SDK packages generated from these specifications, available on npm:

- [SHI - Data Gateway SDK](https://www.npmjs.com/package/@shi-corp/sdk-data-gateway)
- [SHIELD SDK](https://www.npmjs.com/package/@shi-corp/sdk-shield)

You can install these packages using npm:

```bash
npm install @shi-corp/sdk-data-gateway
```

or

```bash
npm install @shi-corp/sdk-shield
```

Our packages are cryptographically attested upon publishing, ensuring higher security assurance.

## Development

To regenerate SDKs from the OpenAPI specifications, use the provided scripts in each SDK's directory:

```bash
npm run-script generate:Sdk
```

## Security Assurance

All SDK packages published by SHI International Corp. are cryptographically attested during the publishing process. This ensures the integrity and authenticity of the packages you consume.

## Contributing

To contribute to the specifications or SDKs:

1. Fork the repository and create a new branch for your changes.
2. Make the necessary modifications to the API specifications or SDK generation scripts.
3. Submit a pull request detailing the changes made and the rationale behind them.

## See Also

- [SHI Lab - Documentation](https://docs.shilab.com)
