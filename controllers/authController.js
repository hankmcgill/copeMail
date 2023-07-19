const storedUsers = {}

module.exports = {
  // simplified version of checking if email is valid by checking chars
  checkIfValidEmail: (req, res, next) => {
    // check for @ symbol and . symbol - simulation of how we would verify on front end, then server before verification on database
    if (!req.body.email.includes('@') || !req.body.email.includes('.')) {
      return next({ status: 500, msg: 'Invalid input! Did you enter your email correctly?' })
    }
    return next()
  },

  // simulated version of checking if email is stored in database - obviously normally happens as query to external DB
  checkIfAcctExists: (req, res, next) => {
    if (storedUsers[req.body.email]) return next({ status: 500, msg: 'Sorry, that email is associated with an account already :)' })
    else {
      // if not taken, can be used for a new acct (value set to current date to simulate values stored in a DB)
      storedUsers[req.body.email] = Date.now()
      return next()
    }
  }
}
