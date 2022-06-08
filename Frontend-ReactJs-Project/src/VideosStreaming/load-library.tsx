let loader:any = false
declare global {
    interface Window {
        amp: boolean | undefined;
    }
}
export default (skin = 'amp-default') => {
  if (!loader && !window.amp) {
    loader = new Promise((resolve, reject) => {
      let scriptTag = document.createElement('script')
      let linkTag = document.createElement('link')
      let hotKeysScriptTag = document.createElement('script')
      linkTag.rel = 'stylesheet'
      scriptTag.id = 'amp-azure'
      scriptTag.src = '//amp.azure.net/libs/amp/2.3.5/azuremediaplayer.min.js'
      linkTag.href = `//amp.azure.net/libs/amp/2.3.5/skins/${skin}/azuremediaplayer.min.css`
      hotKeysScriptTag.src="//raw.githubusercontent.com/Azure-Samples/media-services-javascript-azure-media-player-hot-keys-plugin/master/hotkeys.js";
  
      document.body.appendChild(scriptTag)
      document.body.appendChild(hotKeysScriptTag)
      document.head.insertBefore(linkTag, document.head.firstChild)
      scriptTag.onload = () => resolve({ skin: skin })
    })
  }
  return loader || Promise.resolve({skin: skin})
}