chrome.action.onClicked.addListener((tab) => {
	const url = new URL(tab.url)
	const key = `dark-${url.hostname}`
	
	chrome.storage.sync.get([key], (items) => {
		chrome.storage.sync.set({
			[key]: !items[key]
		}, () => {
			chrome.scripting.executeScript({
				target: {
					tabId: tab.id
				},
				files: ["runner.js"]
			})
		})
	})
})