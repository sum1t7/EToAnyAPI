# EToAny API

### Node.js RESTful API

># Installation

## Local Installation

Make sure you have node installed in your device

Run the following to clone the repository , install dependendencies and host it locally

```bash
#clone Repository
$ git clone https://github.com/sum1t7/EToAnyAPI.git
#install Dependencies 
$ npm install
#start server at localhost:3000
$ npm start
```

> # Usage 
### GET Endpoint

```bash

  #takes parameters language and word
  GET /api/:language/:word

  #example 
  GET /api/hindi/hello
  
```

## Example Request

```javascript
import axios from "axios";
const resp = await axios.get("https://e-to-any-api.vercel.app/api/hindi/hello");
console.log(resp.data);
```

## Example Response 

```javascript
{
  "success": true,
  "result": {
    "noun": [
      {
        "word": "नमस्कार(masc)"
      },
      {
        "word": "नमस्ते"
      },
      {
        "word": "स्वागत की अभिव्यक्ति का अंग्रेजी शब्द"
      },
      {
        "word": "हेलो"
      }
    ],
    "interjection": [
      {
        "word": "सलाम"
      },
      {
        "word": "सुनिये"
      },
      {
        "word": "हलो"
      }
    ]
  }
}
```

## Parameters
 
| Parameter |  Type  | Description | Mandatory ? | Default |
| :-------: | :----: | :---------: | :---------: | :-----: |
|   `lang`  | string |    language     |   Yes ✔️    |   --    | 
|   `word`  | string |    word     |   Yes ✔️    |   --    | 

```bash
#language: telegu , word: hello 
GET /api/telugu/hello
```
## Response 
```javascript
{
  "success": true,
  "result": {
    "noun": [
      {
        "word": "ఏయ్"
      }
    ]
  }
}
```
## Languges Availabe
    hindi 
    bengali 
    gujarati 
    kannada 
    malayalam 
    marathi 
    konkani 
    nepali 
    odia
    punjabi 
    sanskrit 
    tamil 
    telugu 
    urdu 


> # Deployement

### Vercel 

Deploy your own instance of EToAnyAPI on Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://vercel.com/new/clone?repository-url=https://github.com/sum1t7/EToAnyAPI.git)
### Render 

Deploy your own instance of EToAnyAPI on Vercel

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/sum1t7/EToAnyAPI.git)


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](LICENSE)


