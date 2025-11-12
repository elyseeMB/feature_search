import { Transmit } from '@adonisjs/transmit-client'
import { useEffect } from 'react'

export default function Chat(props) {
  console.log(props)

  console.log(window)

  useEffect(() => {
    const transmit = new Transmit({
      baseUrl: window.location.origin,
    })

    const subscription = transmit.subscription('chats/1/messages')

    subscription.create()

    subscription.onMessage((data) => {
      console.log('Message reçu:', data)
    })

    return () => {
      subscription.delete()
    }
  }, [])
  return <div>je suis le chat</div>
}
