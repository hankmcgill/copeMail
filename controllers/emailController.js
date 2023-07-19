const emails = require('../models/messages')

module.exports = {
  sendEmails: (req, res, next) => {
    // create closure of unique emails & validity for each unique user
    const userCache = { ...emails }

    const getValidEmails = () => {
      // grab all valid (set to true) msgs
      const msgArr = Object.keys(userCache).filter(valid => userCache[valid])

      // base case: none left
      if (msgArr.length === 0) clearInterval(interval)

      // else randomly select, send, and invalidate message
      const selected = msgArr[Math.floor(Math.random() * msgArr.length)]
      // "send" message
      console.log('SENT:', selected)
    }

    // iterate thru emails, sending one per second at random until there are none left
    const interval = setInterval(() => {
      getValidEmails()
    }, 1000)

    return next()
  }
}
