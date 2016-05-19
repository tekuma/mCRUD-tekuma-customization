'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'crud-secret',

// We will use sendgrid for email messages. Register at sendgrid and create an API Key
// This is used for sending emails to users, admins @ forgot password feature and contact form 

  SENDGRID_APIKEY: 'YOUR_GENERATED_SENDGRID_API_KEY',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: 'http*,socket.io:socket'
};
