# copeMail
#### A server that will send ten randomized emails to a valid email address (by Hank McGill, for Cope Notes)

## Initial setup
In order to run this application, please:

* fork and clone this repo
* from your local environment, ```NPM install``` dependencies
* start your server from the CLI with ```node server.js```
* OR, if you'd like to tinker with the codebase, run ```nodemon server.js``` and the server will live update!

Now you're good to go!

## Testing routes
If you haven't yet, please install [Postman](https://www.postman.com/).

### Initialize new email account
To test if an email address is valid, send it in the JSON body of a POST request using Postman, like so:

```
{
    "email": "test123@gmail.com"
}
```
Only correctly formatted email addresses will be validated.