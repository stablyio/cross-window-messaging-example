interface postEvent {
    type: string,
    payload: any,
}

class SimpleSDK {
    origin: string = window.location.origin;

    constructor() {
        this.listen(window);
    }

    post(postEvent: postEvent, target: Window, origin: string = window.location.origin) {
        target.postMessage(postEvent, origin)
    }

    listen(target: Window) {
        target.addEventListener("message", (event) => {
            switch (event.type) {
                case 'magic-link-token':
                    this.mockGenerateJWT(event.data.payload.token);
                    break;
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