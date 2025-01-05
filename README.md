# mtg-rules-engine

Magic The Gathering rules engine.

## Status

Work in progress...

## Development

Install node version manager then use version defined for the project.
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm use
```

Run targets defined in `package.json`.
```shell
npm run build
```

Run project.
```shell
npm run start
```

Run test suite.
```shell
npm run test
```

Run [prettier](https://prettier.io/docs/en/) to format source code in `/src`.
```shell
npm run fmt
```

Run [prettier](https://prettier.io/docs/en/) to check if source code in `/src` is already formatted.
```shell
npm run fmt-check
``