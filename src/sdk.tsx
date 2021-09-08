interface postEvent {
    type: string,
    payload: any,
}

class SimpleSDK {
    origin: string = window.location.origin;

    post(postEvent: postEvent, target: Window, origin: string = window.location.origin) {
        target.postMessage(postEvent, origin)
    }

    listen(target: Window, senderUrl: string) {
        target.addEventListener("message", (event) => {
            // only receive msg from trusted senderUrl
            if(event.origin === senderUrl) {
                switch (event.data.type) {
                    case 'magic-link-token':
                        this.mockGenerateJWT(event.data.payload.token);
                        break;
                    case 'fromParent':
                        console.log(event.data.payload);
                        break;
                    case 'fromIframe':
                        console.log(event.data.payload);
                        break;
                }
            } else {
                console.error("should not receive msg from unauthorized urls");
            }
        }, false)
    }

    setOrigin(origin: string) {
        this.origin = origin;
    }

    // this is just to mock calling server with magiclink token and generating 
    mockGenerateJWT(recievedToken: string) {
        console.log(recievedToken);
    }
}

const sdk = new SimpleSDK();

export default sdk;