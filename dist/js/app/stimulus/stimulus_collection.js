define(["backbone","underscore","app/stimulus/stimulus_constructor"],function(e,t,n){var r=e.Collection.extend({model:n,initialize:function(e,t){t||(t={}),this.trial=t.trial},whereData:function(e){return t.isEmpty(e)?[]:this.filter(function(t){var n=t.get("data")||{};for(var r in e)if(e[r]!==n[r])return!1;return!0})},activate:function(){return this.each(function(e){e.activate()}),this},disable:function(){return this.each(function(e){e.disable()}),this},display_all:function(){this.each(function(e){e.media.show()})},hide_all:function(){this.each(function(e){e.media.hide()})},refresh:function(){this.each(function(e){e.media.render()})},get_stimlist:function(){return this.chain().filter(function(e){return!e.get("nolog")}).map(function(e,t){return e.name()||"stim"+t}).value()},get_medialist:function(){return this.chain().filter(function(e){return!e.get("nolog")}).map(function(e,t){return e.mediaName()||"media"+t}).value()}});return r});