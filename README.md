# React UI Template

This application serves as a starter for microservice UIs 

## Deployment

The app is configured to deploy via Shippable.

## Tools

This app is configured to use the following React libraries

- [Redux](https://github.com/reactjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)

## Running

1. Clone this repository  
2. yarn install
3. npm start
4. Visit: http://localhost:3001/react-ui-template
5. Party!

### Logging In

If you want to login locally, you need to clone and boot up the [login-service-broker](https://github.com/GoodwayGroup/login-service-broker/).

### Accessing The `helloworld` service

Out of the box, the 'Are you Authorized' button attempts to connect to the `helloworld` method of the lambda-service-template API service.

If you want to check if you're authorized, you need to clone and boot up the [lambda-service-template](https://github.com/GoodwayGroup/lambda-service-template).

