# SHI International Corp. OpenAPI Specifications Repository

[![Validate OpenAPI Spec Files](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/actions/workflows/Validate.yml/badge.svg)](https://github.com/Software-Hardware-Integration-Lab/OpenAPI/actions/workflows/Validate.yml)

This repository contains the OpenAPI specifications for SHI International Corp's APIs. These specifications are used to define the structure and behavior of our APIs, enabling seamless integration and interaction between different services within the SHI ecosystem.

## Add Submodule

This repository serves as a submodule in other SHI International Corp. projects, allowing for easy access to the API specifications. The specifications are used to automatically generate boilerplate code, aiding in the development and maintenance of our services.

All specifications are to be in JSON format, not YAML.

To use these specifications in your project, follow these steps:

1\. **Clone the Repository**: Include this repository as a submodule in your project by running:

```bash
git submodule add https://github.com/Software-Hardware-Integration-Lab/OpenAPI
```

2\. **Accessing API Specifications**: The API specifications are located in the root directory. Refer to the specific OpenAPI spec JSON files for detailed API documentation.

## Update Submodule

The API specs change over time and it will become necessary to update the specs in various repositories.

To do this, execute the following command in the project's root directory:

```bash
git submodule update --recursive --remote
```

## Contributing

We welcome contributions and feedback on our API specifications. If you would like to propose changes or improvements, please follow these steps:

1. Fork the repository and create a new branch for your changes.
2. Make the necessary modifications to the API specifications.
3. Submit a pull request detailing the changes made and the rationale behind them.

## See Also

- [SHI Lab - Documentation](https://docs.shilab.com)
- [SHI Lab - GitHub](https://github.com/Software-Hardware-Integration-Lab)
