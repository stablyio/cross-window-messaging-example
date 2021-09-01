# Cross Window Communication Messaging Example

this example is to demonstrate communicating between window and iframe using `window.postmessage`

**to run this example**
```
yarn start
```

**open console window to see data interaction between parent/child**


## magic.link optain token via post message small sdk
### proof concept: how it works

when a user enters email, magic link is sent to their mail,
then when the user clicks on the link, it generates a login token
then on the sdk side, we send that token to parent window via `postMessage` protocol
then we can handel that token however we want, even use it as a challenge to generate user login token,
or even send `wallet address` after login, possibilities are based on requirement of implementation.


