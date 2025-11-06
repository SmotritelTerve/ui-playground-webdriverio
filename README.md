# To run all tests

(see package.json file scripts section)

```
npm run test
```

# To run tests with specifig "tags" use Mocha Grep options

add Smoke in `it` section of the spec file and then:

```
npx wdio run src/configs/wdio.conf.js --mochaOpts.grep Smoke
```

# To run a separate spec file

```
npx wdio run src/configs/wdio.conf.js --spec src/specs/inputSubmit.e2e.js
npx wdio run src/configs/wdio.conf.js --spec src/specs/alerts.e2e.js
```

# To run in headless mode

Use `--headless` option enabled in wdio.conf.js when you run the whole regression test suite

# Install a specific version of chromedriver

`npm install chromedriver@140 --save-dev`
