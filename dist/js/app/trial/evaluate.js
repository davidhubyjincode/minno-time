define(["underscore","./current_trial"],function(e,t){return function(r,i){var s=t();r=e.isArray(r)?r:[r],i=i||{};var o=!0;if(i.type=="begin"){var u=e.reduce(r,function(e,t){return e||t.type=="begin"},!1);if(!u)return!1}return e.each(r,function(t){var n=!0;switch(t.type){case"begin":i.type!=="begin"&&(n=!1);break;case"inputEquals":e.isArray(t.value)||(t.value=[t.value]),e.indexOf(t.value,i.handle)===-1&&(n=!1);break;case"trialEquals":i.handle!==s.data[t.value]&&(n=!1);break;case"stimEquals":var r={};t.handle&&(r.handle=t.handle),r[t.value]=i.handle;var u=s._stimulus_collection.whereData(r);u.length===0&&(n=!1);break;case"function":t.value.apply(s,[s,i])||(n=!1)}o=o&&(t.negate?!n:n)}),o}});