define(["../data/properties"],function(e){var t=function(t){var n=["correct","error","timeout"],r=t.interactions;for(var i=0;i<n.length;i++){var s=n[i]+"_feedback",o=e[s]||{};o.active?r.push({conditions:[{type:"inputEquals",value:s}],actions:[{type:"showStim",handle:s},{type:"setInput",input:{handle:"remove_"+s,on:"timeout",duration:o.duration>=0?o.duration:300}}]}):r.push({conditions:[{type:"inputEquals",value:s}],actions:[{type:"trigger",handle:"remove_"+s}]}),s!=="error_feedback"||!e.correct_errors?r.push({conditions:[{type:"inputEquals",value:"remove_"+s}],actions:[{type:"trigger",handle:"end"}]}):o.duration!=="static"&&r.push({conditions:[{type:"inputEquals",value:"remove_"+s}],actions:[{type:"hideStim",handle:s}]})}return t};return t});