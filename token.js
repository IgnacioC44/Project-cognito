//npm install --save aws-amplify
//import Amplify, { Auth } from 'aws-amplify';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
  UserPoolId: 'us-west-2_TpyBHsMkY',
  ClientId: '4o0mubpjkb2aqr18ar6s9819v0'
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const userData = {
  Username: 'userCognito',
  Pool: userPool
};
const authenticationData = {
  Username: 'userCognito',
  Password: 'Password123!'
};
const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess: function(result) {
    const accessToken = result.getAccessToken().getJwtToken();
    console.log('Access Token:', accessToken);
  },
  onFailure: function(err) {
    console.error(err);
  }
});




/*
 Amplify.configure({
  Auth: {
    userPoolId: 'us-west-2_TpyBHsMkY',
    userPoolWebClientId: '4o0mubpjkb2aqr18ar6s9819v0',
    region: 'us-west-2'
  }
});

Auth.signIn('userCognito', 'Password123!')
  .then(user => {
    console.log(user.signInUserSession.accessToken.jwtToken);
  })
  .catch(err => {
    console.log(err);
  }); */
