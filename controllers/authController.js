module.exports = {
  // simplified version of checking if email is valid by checking chars
  checkIfValidEmail: (req, res, next) => {
    // check for @ symbol and . symbol - simulation of how we would verify on front end, then server before verification on database
    if (!req.body.email.includes('@') || !req.body.email.includes('.')) {
      console.log('test2')
      return next({ status: 500, msg: 'Invalid input! Did you enter your email correctly?' })
    }
    return next()
  }
}
