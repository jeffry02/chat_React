import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

export default new Echo({
  broadcaster: 'pusher',
  key: 'a22a73d6f2321fa9a236',
  cluster: 'us2',
  forceTLS: true,
})
