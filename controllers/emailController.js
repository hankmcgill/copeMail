const emails = require('../models/messages')

module.exports = {
  sendEmails: (req, res, next) => {
    // create closure of unique emails & validity for each unique user
    const userCache = { ...emails }

    // iterate thru emails, sending one per second at random until there are none left

    return next()
  }
}
