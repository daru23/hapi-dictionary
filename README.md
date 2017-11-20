# hapi-dictionary
API to manage data from dictionary using Mongodb 

## First Run
```
npm install
npm start

Server running at: http://localhost:8000
```

## Endpoints
### GET
- /words
- /words/{word}
- /labels

### POST
- /words
- /word/{word}
- /labels

## TODO
- Add single label endpoint
- Switch to native promises in Mongodb module
- Add authentification token to header
- Improve Verification of payload before get the request
