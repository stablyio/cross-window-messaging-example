import { useEffect } from "react"

function App() {

  useEffect(() => {
    window.addEventListener("message", (event) => {
  
      console.log('app', event)
  
    }, false)
  }, [])

  function sendMessage(message: string) {
    const refIframe: any = document.querySelector('#windowFrame')
    if (!refIframe) { return }

    try {
      refIframe.contentWindow.postMessage(message, "http://localhost:3000")
    } catch (e) {
      console.warn('error while posting message')
    }
  }


  return (
    <div className="App">
      <div>
        <h1>App</h1>
        <button onClick={ev => sendMessage("Hello Iframe Window")}>Send Message to Window</button>
      </div>
      <hr />
      <iframe id="windowFrame" title="window" src="http://localhost:3000/window" width={200} height={400}></iframe>
    </div>
  )
}

export default App
