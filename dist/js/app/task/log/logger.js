define(["require","jquery","utils/pubsub","app/trial/current_trial","app/task/settings","./post","./log_stack"],function(e){var t=e("jquery"),n=e("utils/pubsub"),r=e("app/trial/current_trial"),i=e("app/task/settings"),s=e("./post"),o=e("./log_stack"),u=0,a=function(e,t,n,r){var i=this._stimulus_collection.get_stimlist(),s=this._stimulus_collection.get_medialist();return{log_serial:r.length,trial_id:this.counter,name:this.name(),responseHandle:t.handle,latency:Math.floor(t.latency),stimuli:i,media:s,data:e}},f=function(){var e;return o.length-u<=0?t.Deferred().resolve():(e=o.slice(u,o.length),u=o.length,s(e))};return n.subscribe("log",function(e,t){var n=i.logger||{},s=n.logger?n.logger:a,u=r(),f=s.apply(u,[u.data,t,e,o]);o.push(f)}),n.subscribe("log:send",function(){var e=i.logger&&i.logger.pulse;e&&o.length-u>=e&&f()}),f});