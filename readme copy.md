# News Article NLP

This application uses Aylien NLP service to analyze article links.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

We will be building a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.

### Prerequisites

You need `node` and `npm` installed on your system to be able to run and build this project.

## Run project

To run in production mode run the following:

` $ npm run build-prod`

` $ npm run start`

## Configuration
The webpack config file is `webpack.prod.js`

The `package.json` shows the dependencies.

## Testing

Testing is done with Jest. To run test: 

`npm run test`

## Credits

Udacity
