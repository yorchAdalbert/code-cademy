# Fetch

The **fetch()** function:

+ Creates a request object that contains relevant information that an API needs.
+ Sends that request object to the API endpoint provided.
+ Returns a promise that ultimately resolves to a response object. which contains the status
  of the promise with information the AOI sent back.

This function needs an URL containing the endpoint as a *String*
'''
    fetch('https://api-to-call.com/endpoint')
'''