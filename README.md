# Buyandship Checkbox Chrome Extension
![Demo](https://vip2.loli.io/2023/04/09/NcVThaSjoRHuZ4d.gif)

This Chrome extension allows users to add a checkbox next to each order on Amazon.com, indicating whether the order has been added to Buyandship or not. The extension saves the status of each checkbox and persists the data across different browsing sessions.

## Features

- Injects a checkbox labeled "Added to Buyandship?" into each order's `div` element with the class `a-color-offset-background`.
- Saves the status of each checkbox using the `chrome.storage.sync` API, allowing the data to persist across multiple devices where the user is logged in.
- Restores the saved status of the checkboxes upon page load.
- Provides custom CSS styles for the injected checkbox and label.

## Installation

1. Download or clone this repository to your local machine.
2. Open the Google Chrome browser and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner of the page.
4. Click the "Load unpacked" button and select the folder containing the extension files.
5. The Buyandship Checkbox Chrome Extension should now be installed and active.