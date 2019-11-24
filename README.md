# Fastmail Favicon Count
This browser extension adds a count of your unread messages (excluding the
drafts folder) to the Fastmail favicon. It works with both Firefox and Chrome.

![favicon screenshot](./icons/128x128.png)

Chrome web store: https://chrome.google.com/webstore/detail/fastmail-favicon-count/edphkeodanpjkllbfopplbdpofglfpdm

Firefox add-ons: https://addons.mozilla.org/en-US/firefox/addon/fastmail-favicon-count/


## Installation
To install:
1) `git clone git@github.com:mgeraci/fastmail-favicon-count.git`
1) `cd fastmail-favicon-count`
1) `yarn install`

## Compilation
To compile the app for development, run `yarn watch`. This will start a webpack
watcher and compile files on change. To compile the files once without watching,
run `yarn build`.

The root of the app is `src/index.js`.

## Adding to your browser for development

### Adding to Firefox
To add the extension to Firefox, go to the "This Firefox" section of the
firefox debugging page (`about:debugging#/runtime/this-firefox`), expand the
"Temporary extensions" section, press the "Load temporary Add-on" button,
navigate into the cloned repo, and select the `manifest.json` file.

### Adding to Chrome
To add the extension to Chrome, go to your extensions page (`chrome://extensions/`),
click the "Load Unpacked Extension" button, navigate to the extension folder,
and click "open".
