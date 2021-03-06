Generate Dynamic Meta tags, OG tags for SEO in create-react-app, using an expressJS middleware hosted in firebase functions.


### [[LIVE DEMO]](https://cra-ssr-firebase.firebaseapp.com/)
Go to [/links](https://cra-ssr-firebase.firebaseapp.com/links) or [/contact](https://cra-ssr-firebase.firebaseapp.com/contacts) to see dynamic titles generated.     
View Source to see what the crawlers and bots will see.    
The tags generated inside the react app(using [React Helmet](https://github.com/nfl/react-helmet) or any other library will work nonetheless).    
This only affects the initially rendered tags, and what bots/crawlers see or links unfurlings in Slack, WhatsApp, Twitter for SEO.

## Set up

### To install dependencies

In the project directory,run:

#### `npm install`

This will install the dependencies listed in [package.json](https://github.com/sonakshs/cra-ssr-firebase/blob/master/package.json).    

#### `cd functions && npm install && cd ..`

This will install the dependencies listed in [functions/package.json](https://github.com/sonakshs/cra-ssr-firebase/blob/master/functions/package.json).


### Setting up firebase hosting, and firebase functions

#### `npm install -g firebase-tools`

Install the Firebase CLI if you haven’t already.    
Sign up for a Firebase account and create a new project

#### `firebase login`

Run firebase login and login with your previous created Firebase account.

#### `firebase init`
Then run the firebase init command from your project’s root    
You need to choose the [Hosting](https://firebase.google.com/docs/hosting), and [Functions](https://firebase.google.com/docs/functions) services.   
Do not forget to agree to Configure as a single-page app by replying with `y`     
More details [here](https://firebase.google.com/docs/functions)

NOTE: Change 
```
"rewrites": [     
      {    
        "source": "**",
        "destination": "/index.html"
      }
    ]
``` 
to 
```
"rewrites": [     
      {    
        "source": "**",
        "function": "app"
      }
    ]
``` 
in [firebase.json](https://github.com/sonakshs/cra-ssr-firebase/blob/master/firebase.json) generated after `firebase init`

### To start servers
#### `npm start`

Runs the app in the development mode.    
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.    
You will also see any lint errors in the console.

#### `npm run serve`

Emulates HTTP functions and hosting for testing on local URLs.    
 hosting: Local server starts at: http://localhost:5000    
 functions: Emulator starts at: http://localhost:5001

#### `npm run deploy`

Deploys the firebase app and firebase cloud functions.

### Learn More

[Create React App](https://facebook.github.io/create-react-app/docs/getting-started)     
[Hosting in Firebase](https://firebase.google.com/docs/hosting)     
[Cloud Functions for Firebase](https://firebase.google.com/docs/functions)  
[ExpressJS](https://expressjs.com/)    
[Meta Tags and SEO](https://www.wordstream.com/meta-tags)




