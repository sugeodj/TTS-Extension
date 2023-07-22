// Function to read text using Text-to-Speech
function readText(text) {
    chrome.tts.speak(text, { rate: 1.0 });
  }
  
  // Create the context menu item
  chrome.contextMenus.create({
    title: "Read with TTS",
    contexts: ["selection"],
    onclick: (info) => {
      const selectedText = info.selectionText;
      readText(selectedText);
    }
  });
  
