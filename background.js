// Function to read text using Text-to-Speech
function readText(text) {
  const options = {
    rate: 1.2,
    lang: 'en-US', // Change the language code if needed
    voiceName: 'Google UK English Male', // Set the ID of the desired male voice
    volume: 0.8, // Additional parameters for adjusting the voice quality, pitch, and volume can be added here.
    pitch: 0.9,
  };

  chrome.tts.speak(text, options);
}

// Create the context menu item
chrome.contextMenus.create({
  id: "readTTS",
  title: "Read with TTS",
  contexts: ["selection"],
});

// Add a listener for the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "readTTS") {
    const selectedText = info.selectionText;
    readText(selectedText);
  }
});

// Get the available voices
chrome.tts.getVoices((voices) => {
  // Uncomment the following line to see the available voices in the console.
  console.log(voices);
});