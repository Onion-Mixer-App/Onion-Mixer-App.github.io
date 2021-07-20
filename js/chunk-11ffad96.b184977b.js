(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ffad96"],{bdd2:function(t,e,a){},d553:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vault"},[r("div",{staticClass:"vault-panel"},[r("div",{staticClass:"tips-link"},[r("div",{staticClass:"tips"},[t._v(" OMT Staking Vault "),r("a-tooltip",{attrs:{title:"Deposit OMT in Vault to receive shares that earns passive reflection. Vault contributes to 4% passive reflection, 4% automatic treasury LP, and 2% burn through every withdraw."}},[r("img",{attrs:{src:a("5551")}})])],1),r("div",{staticClass:"link"},[r("a",{attrs:{href:t.omtDexLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("Buy OMT")])])]),r("ul",{staticClass:"vault-data"},[r("li",[r("div",{staticClass:"main-data"},[r("div",{staticClass:"title"},[t._v("TVL")]),t.statsOfRewardStaker["tvl"]?r("div",{staticClass:"data"},[t._v(t._s(t._f("formatNumber")(t.statsOfRewardStaker["tvl"],2))+" OMT ")]):r("div",{staticClass:"data"},[t._v(" ... ")])])]),r("li",[r("div",{staticClass:"main-data"},[r("div",{staticClass:"title"},[t._v("Total Reflection")]),t.statsOfRewardStaker["distribution"]?r("div",{staticClass:"data"},[t._v(t._s(t._f("formatNumber")(t.statsOfRewardStaker["distribution"],2))+" OMT")]):r("div",{staticClass:"data"},[t._v(" ... ")])])]),r("li",[r("div",{staticClass:"main-data"},[r("div",{staticClass:"title"},[t._v("Total Burnt")]),t.statsOfRewardStaker["burnt"]?r("div",{staticClass:"data"},[t._v(t._s(t._f("formatNumber")(t.statsOfRewardStaker["burnt"],2))+" OMT")]):r("div",{staticClass:"data"},[t._v(" ... ")])])]),r("li",[r("div",{staticClass:"main-data"},[r("div",{staticClass:"title"},[t._v("Total LP Contribution")]),t.statsOfRewardStaker["dao"]?r("div",{staticClass:"data"},[t._v(t._s(t._f("formatNumber")(t.statsOfRewardStaker["dao"],2))+" OMT")]):r("div",{staticClass:"data"},[t._v(" ... ")])])])]),r("ul",{staticClass:"vault-data"},[r("li",[r("div",{staticClass:"main-data"},[r("div",{staticClass:"title"},[t._v("Your Vault Shares")]),t.statsOfRewardStaker["userShares"]?r("div",{staticClass:"data"},[t._v(" "+t._s(t._f("formatNumber")(t.statsOfRewardStaker["userShares"],2))+" Shares ("+t._s(t._f("formatPercent")(t.statsOfRewardStaker["userSharesPercentage"],2))+") ")]):r("div",{staticClass:"data"},[t._v(" ... ")])]),t.statsOfRewardStaker["userSharesOMTValue"]?r("div",{staticClass:"sub-data"},[t._v(" "+t._s(t._f("formatNumber")(t.statsOfRewardStaker["userSharesOMTValue"],2))+" OMT ")]):r("div",{staticClass:"sub-data"},[t._v(" ... ")])])]),t.user?r("div",[r("div",{staticClass:"input-panel"},[r("div",{staticClass:"input-item"},[r("a-input",{attrs:{placeholder:"0.0"},model:{value:t.enterAmount,callback:function(e){t.enterAmount=e},expression:"enterAmount"}},[r("a",{attrs:{slot:"suffix"},on:{click:function(e){return t.max("enter")}},slot:"suffix"},[t._v(" MAX ")])]),t.hasAllowance?r("el-button",{staticClass:"sub-btn",attrs:{disabled:t.disableEnter,loading:t.buttonLoadingStatus["enter"]},on:{click:t.enter}},[t._v(" ENTER ")]):r("el-button",{staticClass:"sub-btn",attrs:{loading:t.buttonLoadingStatus["approve"]},on:{click:t.approve}},[t._v(" APPROVE ")])],1),r("div",{staticClass:"input-item"},[r("a-input",{attrs:{placeholder:"0.0"},model:{value:t.leaveAmount,callback:function(e){t.leaveAmount=e},expression:"leaveAmount"}},[r("a",{attrs:{slot:"suffix"},on:{click:function(e){return t.max("leave")}},slot:"suffix"},[t._v(" MAX ")])]),r("el-button",{staticClass:"sub-btn",attrs:{disabled:t.disableLeave,loading:t.buttonLoadingStatus["leave"]},on:{click:t.leave}},[t._v(" LEAVE ")])],1)])]):r("div",[r("el-button",{staticClass:"main-btn",on:{click:t.connectWallet}},[t._v(" CONNECT ")])],1)])])},n=[],s=a("b85c"),i=a("1da1"),c=a("5530"),o=(a("99af"),a("96cf"),a("bdd2"),a("2f62")),u=a("11da"),l=a("3835"),d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b680"),a("25f0"),a("10bf")),v=a("65e2"),f=a("8795"),m=(a("4069"),a("901e"));function h(t,e,a){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){var n,s,i,c,o,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.eth.net.getId(),e.eth.getAccounts()]);case 2:return n=t.sent,s=Object(l["a"])(n,2),i=s[0],c=s[1],o=u["b"](i,"OMT",a),v=new e.eth.Contract(f["a"]["RewardStaker"],d["a"][i]["RewardStaker"]),t.next=10,v.methods.enter(o,c[0]).send({from:c[0]}).on("transactionHash",r);case 10:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function w(t,e,a){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){var n,s,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.eth.net.getId(),e.eth.getAccounts()]);case 2:return n=t.sent,s=Object(l["a"])(n,2),i=s[0],c=s[1],o=new m["BigNumber"](a).times(new m["BigNumber"]("1e18")).toFixed(0),u=new e.eth.Contract(f["a"]["RewardStaker"],d["a"][i]["RewardStaker"]),t.next=10,u.methods.leave(o).send({from:c[0]}).on("transactionHash",r);case 10:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function g(t){return k.apply(this,arguments)}function k(){return k=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,n,s,i,c,o,h,b,w,p,g,k,S,O,x,R,C,_,A,N,T,M;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.next=3,Promise.all([e.eth.net.getId(),e.eth.getAccounts()]);case 3:return r=t.sent,n=Object(l["a"])(r,2),s=n[0],i=n[1],c=new e.eth.Contract(f["a"]["RewardStaker"],d["a"][s]["RewardStaker"]),o=new e.eth.Contract(f["a"]["ERC20"],v["a"][s]["OMT"]["address"]),t.next=11,Promise.all([c.methods.totalBurntAmount().call(),c.methods.totalDistributionAmount().call(),c.methods.totalDaoAmount().call(),c.methods.totalShares().call(),o.methods.balanceOf(d["a"][s]["RewardStaker"]).call()]);case 11:if(h=t.sent,b=Object(l["a"])(h,5),w=b[0],p=b[1],g=b[2],k=b[3],S=b[4],O=u["c"](s,"OMT",w),x=u["c"](s,"OMT",p),R=u["c"](s,"OMT",g),C=new m["BigNumber"](k).div(new m["BigNumber"]("1e18")).toString(10),_=u["c"](s,"OMT",S),a["burnt"]=O,a["distribution"]=x,a["dao"]=R,a["totalShares"]=C,a["tvl"]=_,!i||!i[0]){t.next=44;break}if(!new m["BigNumber"](k).eq(0)){t.next=35;break}a["userShares"]="0",a["userSharesPercentage"]="0",a["userSharesOMTValue"]="0",t.next=44;break;case 35:return t.next=37,c.methods.shares(i[0]).call();case 37:A=t.sent,N=new m["BigNumber"](A).div(new m["BigNumber"]("1e18")).toString(10),T=new m["BigNumber"](A).div(k).toString(10),M=new m["BigNumber"](_).times(T).toString(10),a["userShares"]=N,a["userSharesPercentage"]=T,a["userSharesOMTValue"]=M;case 44:return t.abrupt("return",a);case 45:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}var S=a("46eb"),O={data:function(){return{statsOfRewardStaker:{},buttonLoadingStatus:{approve:!1,enter:!1,leave:!1},hasAllowance:!1,enterAmount:null,leaveAmount:null,intervals:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(o["b"])({user:function(t){return t.wallet.user},chainId:function(t){return t.wallet.chainId},isWeb3Initialized:function(t){return t.wallet.isWeb3Initialized}})),{},{omtDexLink:function(){return this.chainId?v["a"][this.chainId]["OMT"]["dexLink"]:null},disableEnter:function(){return!(this.enterAmount&&!isNaN(this.enterAmount))||new m["BigNumber"](this.enterAmount).lte(0)},disableLeave:function(){return!(this.leaveAmount&&!isNaN(this.leaveAmount))||new m["BigNumber"](this.leaveAmount).lte(0)}}),methods:{max:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.user){a.next=8;break}if("leave"!=t){a.next=5;break}e.leaveAmount=e.statsOfRewardStaker["userShares"],a.next=8;break;case 5:return a.next=7,u["f"](window.web3,e.chainId,"OMT",e.user["account"]);case 7:e.enterAmount=a.sent;case 8:case"end":return a.stop()}}),a)})))()},approve:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.buttonLoadingStatus["approve"]=!0,e.prev=1,e.next=4,u["a"](window.web3,t.chainId,"OMT",t.user["account"],d["a"][t.chainId]["RewardStaker"],t.openTxNotification);case 4:t.$notification.success({message:"Approve Success!"}),t.loadAllowance(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),t.$notification.error({message:e.t0.message}),t.$notification.error({message:JSON.stringify(e.t0)});case 12:return e.prev=12,t.buttonLoadingStatus["approve"]=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},enter:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.buttonLoadingStatus["enter"]=!0,e.prev=1,e.next=4,h(window.web3,t.enterAmount,t.openTxNotification);case 4:t.$notification.success({message:"Enter Success!"}),t.loadStatsOfRewardStaker(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),t.$notification.error({message:e.t0.message}),t.$notification.error({message:JSON.stringify(e.t0)});case 12:return e.prev=12,t.buttonLoadingStatus["enter"]=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},leave:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.buttonLoadingStatus["leave"]=!0,e.prev=1,e.next=4,w(window.web3,t.leaveAmount,t.openTxNotification);case 4:t.$notification.success({message:"Leave Success!"}),t.loadStatsOfRewardStaker(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),t.$notification.error({message:e.t0.message}),t.$notification.error({message:JSON.stringify(e.t0)});case 12:return e.prev=12,t.buttonLoadingStatus["leave"]=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},connectWallet:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading({lock:!0,background:"rgba(0, 0, 0, 0.7)"}),e.prev=1,e.next=4,t.$store.dispatch("connectWallet");case 4:e.next=11;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0),t.$notification.error({message:e.t0.message}),t.$notification.error({message:JSON.stringify(e.t0)});case 11:return e.prev=11,a.close(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,6,11,14]])})))()},loadStatsOfRewardStaker:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isWeb3Initialized){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,g(window.web3);case 4:t.statsOfRewardStaker=e.sent;case 5:case"end":return e.stop()}}),e)})))()},loadAllowance:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.user&&t.isWeb3Initialized){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u["l"](window.web3,t.chainId,"OMT",t.user["account"],d["a"][t.chainId]["RewardStaker"],"1000000000000000000");case 4:t.hasAllowance=e.sent;case 5:case"end":return e.stop()}}),e)})))()},openTxNotification:function(t){var e=this.$createElement,a="".concat(S["a"][this.chainId]["scanLink"],"/tx/").concat(t),r="View on ".concat(S["a"][this.chainId]["scanName"]);this.$notification.success({message:"Transaction submitted!",description:e("a",{attrs:{href:a,target:"_blank"}},[r]),duration:30})}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading({lock:!0,background:"rgba(0, 0, 0, 0.7)"}),e.prev=1,e.next=4,t.$store.dispatch("initWeb3");case 4:e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](1),t.$notification.error({message:e.t0.message}),t.$notification.error({message:JSON.stringify(e.t0)});case 10:return e.prev=10,a.close(),e.finish(10);case 13:t.loadStatsOfRewardStaker(),t.loadAllowance(),t.intervals.push(setInterval(t.loadStatsOfRewardStaker,2e4)),t.intervals.push(setInterval(t.loadAllowance,6e4));case 17:case"end":return e.stop()}}),e,null,[[1,6,10,13]])})))()},beforeDestroy:function(){var t,e=Object(s["a"])(this.intervals);try{for(e.s();!(t=e.n()).done;){var a=t.value;clearInterval(a)}}catch(r){e.e(r)}finally{e.f()}}},x=O,R=a("2877"),C=Object(R["a"])(x,r,n,!1,null,null,null);e["default"]=C.exports}}]);