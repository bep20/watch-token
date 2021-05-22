(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(e,t,n){"use strict";n(10),n(163),n(91),n(62);t.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return new Promise((function(t,a){e.apply(void 0,n.concat([function(e,n){e?a(e):t(n)}]))}))},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}}},308:function(e,t,n){var a=n(311);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:a.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:a.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://sadlovestory73588.github.io/watch-token"}],["meta",{property:"og:image",content:"https://sadlovestory73588.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://sadlovestory73588.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},310:function(e,t,n){"use strict";var a=n(45),r=(n(89),n(163),n(92),n(63),n(90),n(308)),o=n.n(r),i=n(312);t.a={data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:o.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"Binance Smart Chain"},bsc_testnet:{tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"Binance Smart Chain - Testnet"}}},contracts:{token:null},instances:{token:null}}},methods:{initWeb3:function(e,t){var n=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){a.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){a.next=17;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,a.next=9,n.promisify(n.web3.eth.getChainId);case 9:if(r=a.sent,n.metamask.netId=r,r===n.network.list[e].id){a.next=15;break}return n.network.current=n.network.list[n.network.map[r]],a.next=15,n.initWeb3(e,!1);case 15:a.next=21;break;case 17:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 21:case"end":return a.stop()}}),a)})))()},initContract:function(e){console.log("init ".concat(e," on ").concat(this.network.current.name)),this.instances.token=new this.web3.eth.Contract(i,e)}}}},311:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"UA-115756440-2","fbPixelId":"373489733749849","infuraProjectId":"be402bb729b2472ba828e013468dc626","bitlyAccessToken":"5f9b3f6dc31fa147f4609bcf3af4e5319c7fe6d6"}')},312:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},359:function(e,t,n){"use strict";n.r(t);var a=n(45),r=(n(90),n(163),n(89),n(307)),o=n(310),i={name:"Detail",mixins:[r.a,o.a],data:function(){return{loaded:!1,loading:!0,tokenLink:"",tokenEmbed:"No longer available",currentNetwork:null,token:{}}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return t.next=6,e.getToken(e.getParam("address"));case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0),document.location.href=e.$withBase("/");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getToken:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=17;break}return t.token.address=e,t.initContract(t.token.address),n.next=5,t.promisify(t.instances.token.methods.name().call);case 5:return t.token.name=n.sent,n.next=8,t.promisify(t.instances.token.methods.symbol().call);case 8:return t.token.symbol=n.sent,n.next=11,t.promisify(t.instances.token.methods.decimals().call);case 11:t.token.decimals=n.sent.valueOf(),t.token.logo=t.getParam("logo")?decodeURIComponent(t.getParam("logo")):"",t.token.name&&t.token.symbol&&t.token.decimals?(t.loaded=!0,a=t.web3.utils.toHex(JSON.stringify({address:t.token.address,logo:t.token.logo})),t.tokenLink=window.location.origin+t.$withBase("/page/?hash=".concat(a,"&network=").concat(t.currentNetwork)),t.embedded||(document.location.href=t.tokenLink)):(alert("It seems that it is not a valid Token or you are on the wrong network"),t.loaded=!1),t.loading=!1,n.next=18;break;case 17:document.location.href=t.$withBase("/");case 18:case"end":return n.stop()}}),n)})))()}}},s=n(44),c=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"p-0 pt-4"},[e.loading?n("b-col",{attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():n("b-col",{attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("blockquote",[e._v("Some error occurred")]),e._v(" "),n("router-link",{attrs:{to:"/create/"}},[e._v("Try adding your token")])],1)],1),e._v(" "),e.loaded?n("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"footer-class":"p-0","no-body":""}},[n("b-alert",{staticClass:"m-0",attrs:{show:"",variant:"warning"}},[e._v("\n        Embed is no longer available."),n("br"),e._v("\n        Click\n        "),n("b-link",{attrs:{href:e.tokenLink,target:"_blank"}},[e._v("here")]),e._v("\n        to have more information about "+e._s(e.token.name)+".\n      ")],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=c.exports}}]);
