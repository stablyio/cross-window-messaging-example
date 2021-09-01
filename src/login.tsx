import { useCallback, useState } from "react"
import { useHistory } from "react-router"
import { magic } from "./magic"
import sdk from "./sdk"

export default function Login() {
  const [email, setEmail] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const history = useHistory()

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const login = useCallback(async () => {
    setIsLoggingIn(true)

    try {
      const token = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      })

      console.log('send token', token);

      if (window.parent) {
        sdk.post({
          type: 'magic-link-token',
          payload: {
            email,
            token,
          },
        }, window.parent);
      }

      history.push("/window")
    } catch {
      setIsLoggingIn(false)
    }
  }, [email])

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback(event => {
    setEmail(event.target.value)
  }, [])

  return (
    <div className="container">
      <h1>Please sign up or login</h1>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        onChange={handleInputOnChange}
        disabled={isLoggingIn}
      />
      <button onClick={login} disabled={isLoggingIn}>Send</button>
    </div>
  )
}

