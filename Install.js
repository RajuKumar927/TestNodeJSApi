var express = require('express');
var router = express.Router();

var shopifyAPI = require('shopify-node-api');//it looks like you actually have to require the shopify-node-api package again here...

//DEFINE LOCAL VARIABLES
var ldb_uri_base = "http://testshopifydb.herokuapp.com";//THIS IS ONLY AN EXAMPLE!!
var shopify_hidden_ss = "SHARED SECRET OF YOUR APP HERE";
var shopify_hidden_ak = "API KEY HERE";
var shopify_hidden_shopname = "https://flipmart-fashion.myshopify.com/";
var noncerequired = require('nonce')();
var noncestring = noncerequired();

//THIS ONE WRITES METAFIELDS
// Shopify authentication process
router.get('/', function(req, res, next) {
  var Shopify = new shopifyAPI({
    shop: shopify_hidden_shopname, // MYSHOP.myshopify.com
    shopify_api_key: shopify_hidden_ak, // Your API key
    shopify_shared_secret: shopify_hidden_ss, // Your Shared Secret
    shopify_scope: 'write_products',// define the scope according to your needs!
    redirect_uri: ldb_uri_base+'/finish_auth',
    nonce: noncestring // you must provide a randomly selected value unique for each authorization request
  });
  var auth_url = Shopify.buildAuthURL();
  res.redirect(auth_url);//this is where Shopify redirects you to ".../finish_auth/"!
});

module.exports = router;