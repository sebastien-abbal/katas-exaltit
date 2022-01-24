# Welcome to Exalt-IT Test

This is a proposal for the [Katas Node.js test](https://gitlab.com/exalt-it-dojo/katas-nodejs) was made by **[Sébastien Abbal](https://github.com/sebastien-abbal)** based on node.js language with Typescript.

# 🚀 Get started

To start, create a `.env` file with this format. ([Don't forget to put your Krates ID](https://app.krat.es/dashboard))

```
NODE_ENV="dev"
KRATES_ID="619205f54bd518ab9de7"
```

Now you have to run some commands to init the project.

```bash
$ yarn
$ yarn build
```

Well done ! :)

### Check the bigparsing_confirmed

```bash
$ yarn run_bigparsing_confirmed 62359

# Will return `Damon Jerde`
```

### Check the data_correction_junior

```bash
$ yarn run_data_correction_junior

# Will generate a final.json file on ./data/data_correction_junior directory
```

# 🚦 Tests

To test all the app with unit/e2e/integration tests, you jest need to run this command line:

```bash
$ yarn test

# Test Suites: 4 passed, 4 total
# Tests:       7 passed, 7 total
# Snapshots:   0 total
# Time:        9.063 s
```

# 🛠 Docs

- [Big parsing (Confirmed test)](docs/BIGPARSING_CONFIRMED.md)
- [Data correction (Junior test)](docs/DATA_CORRECTION_JUNIOR.md)
