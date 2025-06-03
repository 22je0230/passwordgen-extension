import { defineContentScript } from 'wxt/utils/define-content-script';

export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'autofill' && request.credentials) {
        const { username, password } = request.credentials;

        const userInput = document.querySelector('input[type="text"], input[name*="user"], input[name*="email"]') as HTMLInputElement;
        const passInput = document.querySelector('input[type="password"]') as HTMLInputElement;

        if (userInput && passInput) {
          userInput.value = username;
          passInput.value = password;
        }

        sendResponse({ status: 'success' });
      }
    });
  }
});
