define(["underscore","../data/properties","../data/categories","./IATlayout"],function(e,t,n,r){function i(){var e={data:{block:"generic"},input:[{handle:"space",on:"space"},{handle:"enter",on:"enter"}],interactions:[{propositions:[{type:"begin"}],actions:[{type:"showStim",handle:"All"}]},{propositions:[{type:"inputEquals",value:"space"}],actions:[{type:"hideStim",handle:"All"},{type:"setInput",input:{handle:"endTrial",on:"timeout",duration:t.post_instructions_interval||0}}]},{propositions:[{type:"inputEquals",value:"endTrial"}],actions:[{type:"endTrial"}]},{propositions:[{type:"inputEquals",value:"enter"}],actions:[{type:"goto",destination:"nextWhere",properties:{blockStart:!0}},{type:"endTrial"}]}]};return t.notouch||e.input.push({handle:"space",on:"bottomTouch",touch:!0}),e}function o(){var t=i(),o=[t],u,a,f;for(var l=1;l<=7;l++)f=s[l]||{},u={data:{block:l},layout:r(l),inherit:{set:"instructions",type:"byData",data:{block:"generic"}}},a={inherit:"instructions",media:{template:"inst"+l+".jst"}},f.media&&(a.media=f.media),f.template&&(a.media={inlineTemplate:f.template}),f.css&&(a.css=f.css),f.extend&&e.extend(u,f.extend),u.stimuli=[a],o.push(u);return e.each(n,function(e,n){t.data[n]=e.name,t.data[n+"Color"]=e.titleColor}),o}var s=[];return function(t,n){if(!arguments.length)return o();s[t]=n}});