define(["underscore","../data/properties","../data/categories"],function(e,t,n){return function(){var i={},s,o;s=t.defaultStimulus,s.css=e.defaults(s.css||{},{font:t.font,fontSize:t.fontSize,color:t.fontColor}),i.Default=[s],i.instructions=[t.instructionsStimulus],i.attribute1=[e.extend(n.attribute1.stimulus||{},{inherit:"Default",css:n.attribute1.css||{}})],i.attribute2=[e.extend(n.attribute2.stimulus||{},{inherit:"Default",css:n.attribute2.css||{}})],i.concept1=[e.extend(n.concept1.stimulus||{},{inherit:"Default",css:n.concept1.css||{}})],i.concept2=[e.extend(n.concept2.stimulus||{},{inherit:"Default",css:n.concept2.css||{}})],e.extend(i,{attribute1_left:[],attribute1_right:[],concept1_left:[],concept1_right:[]});for(var u=0;u<5;u++)i.attribute1_left=i.attribute1_left.concat([{data:{side:"left",handle:"target",alias:n.attribute1.name},inherit:"attribute1",media:{inherit:{type:"exRandom",set:"attribute1"}}},{data:{side:"right",handle:"target",alias:n.attribute2.name},inherit:"attribute2",media:{inherit:{type:"exRandom",set:"attribute2"}}}]),i.attribute1_right=i.attribute1_right.concat([{data:{side:"left",handle:"target",alias:n.attribute2.name},inherit:"attribute2",media:{inherit:{type:"exRandom",set:"attribute2"}}},{data:{side:"right",handle:"target",alias:n.attribute1.name},inherit:"attribute1",media:{inherit:{type:"exRandom",set:"attribute1"}}}]),i.concept1_left=i.concept1_left.concat([{data:{side:"left",handle:"target",alias:n.concept1.name},inherit:"concept1",media:{inherit:{type:"exRandom",set:"concept1"}}},{data:{side:"right",handle:"target",alias:n.concept2.name},inherit:"concept2",media:{inherit:{type:"exRandom",set:"concept2"}}}]),i.concept1_right=i.concept1_right.concat([{data:{side:"left",handle:"target",alias:n.concept2.name},inherit:"concept2",media:{inherit:{type:"exRandom",set:"concept2"}}},{data:{side:"right",handle:"target",alias:n.concept1.name},inherit:"concept1",media:{inherit:{type:"exRandom",set:"concept1"}}}]);return o={correct:{handle:"correct_feedback",location:{top:80},css:{color:"green","font-size":"4em"},media:{word:"OK"},nolog:!0},error:{handle:"error_feedback",location:{top:80},css:{color:"red","font-size":"4em"},media:{word:"X"},nolog:!0},timeout:{handle:"timeout_feedback",location:{top:80},css:{color:"red","font-size":"4em"},media:{word:"X"},nolog:!0}},i.feedback=[],e.each(["correct","error","timeout"],function(e){var n=o[e];t[e+"_feedback"].css&&(n.css=t[e+"_feedback"].css),t[e+"_feedback"].media&&(n.media=t[e+"_feedback"].media),i.feedback.push(n)}),i}});