'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://duncanjadkins:LegoManiac12@ds161322.mlab.com:61322/da-assignment3');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('listings.json', function(err, data){
  var listings = JSON.parse(data);
  listings.entries.forEach(function(listing){
    var listingInstance = new Listing(listing);
    listingInstance.save(function(err)){
      if(err)
        throw(err);
    });
  });
});
process.exit();

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */