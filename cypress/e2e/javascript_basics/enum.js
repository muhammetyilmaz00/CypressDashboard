const browsers = {
    CHROME: 'chrome',
    FF: ' firefox',
    EDGE: 'Edge',
    SAFARI: 'safari'
}

let browser = browsers.CHROME

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log('execute chrome')
            break
        case browsers.FF:
            console.log('execute firefox')
            break
        case browsers.EDGE:
            console.log('execute edge')
            break
        case browsers.SAFARI:
            console.log('execute safari')
            break
    }
}

console.log(execute());









