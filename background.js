let author = 'Pratik';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ author });
});
