let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ pasted: false });
  console.log('Pasted note');
});


chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'www.angel.co' },
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});