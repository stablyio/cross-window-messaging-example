import sdk from './sdk';

function App() {

  function sendMessage(message: string) {
    try {
      sdk.post({
        type: "message",
        payload: message
      }, window.parent)
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
