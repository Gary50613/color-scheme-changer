(() => {
	const key = `dark-${location.hostname}`

	chrome.storage.sync.get([key], (items) => {
		if(!items[key])
			return document.querySelector('meta[name="color-scheme"][content="light only"]')?.remove()
		
		const meta = document.createElement("meta")
		
		meta.name = "color-scheme"
		meta.content = "light only"
		
		document.head.appendChild(meta)
	})
})()