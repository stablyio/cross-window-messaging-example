import { useEffect } from "react"
import sdk from "./sdk"

function App() {

  useEffect(() => {
    sdk.listen(window, 'http://localhost:3000');
  }, [])

  function sendMessage(message: string) {
    const refIframe: any = document.querySelector('#windowFrame')
    if (!refIframe) { return }

    try {
      sdk.post({
        type: "fromParent",
        payload: message
      }, refIframe.contentWindow)
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
      <iframe id="windowFrame" title="window" src="http://localhost:3000/login" width={200} height={400}></iframe>
    </div>
  )
}

export default App
