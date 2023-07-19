const emails = require('../models/messages')

module.exports = {
  sendEmails: (req, res, next) => {
    // create closure of unique emails & validity for each unique user
    const userCache = { ...emails }

    const getValidEmails = () => {
      // grab all valid (set to true) msgs
      const msgArr = Object.keys(userCache).filter(valid => userCache[valid])

      // base case: none left
      if (msgArr.length === 0) {
        console.log('erwrwe' + interval)

        clearInterval(interval) // end process for unique user
        console.log(`ALL MESSAGES SENT to ${req.body.email} -  Thank you!`)
        return
      }

      // else randomly select, send, and invalidate message
      const selected = msgArr[Math.floor(Math.random() * msgArr.length)]
      // "send" message
      console.log(`SENT to: ${req.body.email} ${selected}`)

      for (const key in userCache) {
        if (key === selected) {
          userCache[key] = false // disable sent message as no longer valid for unique user
        }
      }
    }

    // iterate thru emails, sending one per second at random until there are none left
    const interval = setInterval(() => {
      getValidEmails()
    }, 60000)

    return next()
  }
}
