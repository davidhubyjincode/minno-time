define(["jquery","./action_list"],function(e,t){return function(n,r){n=e.isArray(n)?n:[n],e.each(n,function(e,n){if(!t[n.type])throw new Error("unknown action: "+n.type);t[n.type](n,r)})}});