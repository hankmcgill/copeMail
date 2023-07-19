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

      // here I'm creating a new closure for each new acct with associated messages to handle edge cases (as I feel these would most likely
      // also be stored in a database)
      storedUsers[req.body.email.messages] = {
        'Hang in there': true,
        "You're doing great!": true,
        "You've made it this far!": true,
        'I believe in you!': true,
        'We all have tough days': true,
        'You got this': true,
        "Think of how far you've come so far!": true,
        "I bet the little kid version of you would be very impressed with how far you've come": true,
        'If you can dream it, you can do it': true,
        "You are almost there - don't stop digging": true
      }

      return next()
    }
  }
}
