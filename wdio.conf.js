exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],

    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/../components/**/*steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}