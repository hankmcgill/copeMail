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
To test if an email address is valid, send it as the value for the key "email" in the JSON body of a POST request using Postman, like so:

```
{
    "email": "test123@gmail.com"
}
```

Only correctly formatted email addresses will be validated.  

`Note`: Validator will also check if the same email address has been used twice (in memory)!

Only correctly formatted email addresses will be validated.
![Screen Shot 2023-07-18 at 8 05 57 PM](https://github.com/hankmcgill/copeMail/assets/97624308/38b3b296-9a37-4f25-becc-e1388d2374fc)

### Track randomized messages
Upon entry of a new validly formatted email address, you will see each of 10 messages get randomly selected and sent at a one minute interval as an "email" to the user in the console, followed by a message acknowledging that this process has concluded.

`Note`: in Postman, try entering a second valid email address within the ten second time frame - you will see that the two users are all sent all ten messages asynchronously - and that if you try and use an invalid entry during the send process, it will not affect the valid users.

![Screen Shot 2023-07-19 at 1 24 20 PM](https://github.com/hankmcgill/copeMail/assets/97624308/23009b2e-2b2d-4054-b63e-d73c92d76cb5)

`If you would like to test the asynchonous sending of messages to multiple destinations, try setting the send interval to a lower rate like 1000ms!`

#### Thank you!
