/*
 * Send log chunk
 * returns a function that takes data and sends it to the server after appending any meta data
 */
define(function(require){
	var $ = require('jquery');


	function send(data, settings){

		var url = settings && settings.url
			, deff = $.Deferred();

		if (!url) {
			return deff.resolve();
		}

		// build post data
		var post = {
			json: JSON.stringify(data) || ""
		};

		$.extend(post, settings.metaData || {});

		// lets post our data
		deff = $.post(url,post);

		// now, if there was a failure, lets try to resend
		deff = deff.then(null,function(){
			return $.post(url,post);
		});

		return deff;
	}

	return send;
});

