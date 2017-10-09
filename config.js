var config = {}

//config.idmURL = 'http://account.lab.fiware.org/';
//config.client_id = 'cbdfa45f09b544348824042120a0172d';
//config.client_secret = 'deb32ea3fb234cae8a3ce2f026272c36';
//config.callbackURL = 'http://localhost/login';


config.idmURL = 'http://130.240.134.128:9000';
config.client_id = '21ee5a0d7e064ab6aeec39c3cba06314';
config.client_secret = 'd4c27360e81143d7bfb12201434441ed';
config.callbackURL = 'http://localhost:9090/login';
// Depending on Grant Type:
// Authorization Code Grant: code
// Implicit Grant: token
config.response_type = 'code';

module.exports = config;
