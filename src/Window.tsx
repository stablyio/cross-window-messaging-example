import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener("message", (event) => {

      console.log('window', event);

    }, false)
  }, [])

  function sendMessage(message: string) {
    try {
      window.parent.postMessage(message, "http://localhost:3000")
    } catch (e) {
      console.warn('error while posting message')
    }
  }

  return (
    <div className="Window">
      Window should be included in iframe

      <button onClick={ev => sendMessage("Helo App")}>Send Message to App</button>
    </div>
  );
}

export default App;
