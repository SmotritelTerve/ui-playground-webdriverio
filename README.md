1. To run tests with specifig "tags" use Mocha Grep options:

add Smoke in ``it`` section of the spec file and then:

```
npx wdio run src/configs/wdio.conf.js --mochaOpts.grep Smoke
```
2. To run a separate spec file:

```
npx wdio run src/configs/wdio.conf.js --spec src/specs/inputSubmit.e2e.js
```