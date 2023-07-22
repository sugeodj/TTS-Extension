# Text-to-Speech Highlight Chrome Extension

The Text-to-Speech Highlight Chrome extension allows users to read highlighted text using Text-to-Speech (TTS) functionality. It adds an option to the right-click context menu, enabling users to listen to the selected text on web pages.

## Features

- Simple and intuitive: Just highlight any text on a webpage, right-click, and choose "Read with TTS."
- Customizable voice: The extension provides options to adjust the voice rate, language, and select between male, female, or neutral voices (based on availability).
- Works offline: No internet connection required to read the highlighted text.

## Installation

1. Download the latest release from the [Releases](https://github.com/sugeodj/TTS-Extension/releases) page.
2. Unzip the downloaded file to a location of your choice.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Turn on "Developer mode" using the toggle switch in the top right corner.
5. Click "Load unpacked" and select the folder containing the extension files.

## How to Use

1. Highlight any text on a webpage.
2. Right-click to open the context menu.
3. Select "Read with TTS" from the context menu.

The highlighted text will be read using the Text-to-Speech functionality. Adjust voice options or other settings by accessing the extension's options in the Chrome Extensions page.

## Customizing Voice and Options

The extension uses the Chrome TTS API to read text. You can customize the voice by modifying the `background.js` file:

```javascript
// Function to read text using Text-to-Speech
function readText(text) {
  const options = {
    rate: 1.0,
    lang: 'en-US', // Change the language code if needed
    voiceName: 'Google US English Male', // Set the ID of the desired male voice
    // Additional parameters for adjusting the voice quality, pitch, and volume can be added here.
  };

  chrome.tts.speak(text, options);
}
```
Known Issues
------------

-   The extension might not work on some websites with strict Content Security Policies (CSP) that block external scripts.
-   Customization options may vary depending on the TTS engine available on the user's system.

Contributing
------------

Contributions are welcome! To contribute to the project, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature/fix: `git checkout -b feature-name`.
3.  Commit your changes: `git commit -m 'Add new feature'`.
4.  Push to the branch: `git push origin feature-name`.
5.  Submit a pull request.

Please ensure to follow the project's code style and guidelines.

Credits
-------

The Text-to-Speech Highlight extension was created by [Daniel Geovanovich](https://github.com/sugeodj).
