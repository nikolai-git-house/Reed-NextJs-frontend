import _subscriptions from './subscriptions.json'

const TIMEOUT = 1

export default {
  getSubscriptions: (cb, timeout) => {
    setTimeout(() => cb(_subscriptions), timeout || TIMEOUT)
  },

}