(self["webpackChunk_0x_labs"]=self["webpackChunk_0x_labs"]||[]).push([[364],{76673:function(e){e.exports={home:"home___1f8Im","home-header":"home-header___3Mk1c","home-box":"home-box___u0ahK","home-box-actions":"home-box-actions___3yOfg","home-form-row":"home-form-row___CMxna","home-spin":"home-spin___3-IhC","home-snackbar":"home-snackbar___NOB0l","home-snackbar-error":"home-snackbar-error___1r167"}},45594:function(e,t,n){"use strict";n.r(t);var a=n(8870),r=n(3182),i=n(2824),s=n(94043),l=n.n(s),o=n(71720),c=n(241),u=n(96519),d=n(46441),p=n(27484),m=n.n(p),x=n(76982),h=n(20200),f=n(15725),b=n(67109),v=n(2658),S=n(28973),_=n(60113),g=n(65295),k=n(54962),y=n(42643),w=n(11807),j=n(6634),Z=n(49161),A=n(99986),T=n(62052),D=n(66006),L=n(37151),M=n(12924),P=n(65646),E=n(47166),O=n.n(E),C=n(76673),I=n.n(C),N=n(85893),R=n(70178);m().extend(R);var B=O().bind(I()),F=P.Z.title,W=P.Z.network,X=P.Z.logo,Y=P.Z.nft,q=(0,L.gL)("https://eth-rinkeby.alchemyapi.io/v2/OSAAEFv6UMm-fs1L-PLW31T_INhDIFOk"),z=function(e){var t=e.app.isMobile,n="undefined"!==typeof window&&window.ethereum,s=n?new c.Q(n):(0,x.yL)(),o=n?s.getSigner():(0,x.mx)(),p=n?new u.Contract(Y.contractAddress,Y.contractAbi,o):(0,x.cq)({addressOrName:Y.contractAddress,contractInterface:Y.contractAbi,signerOrProvider:s||o}),L=(0,x.mA)(),P=L.data,E=(0,x.LN)(),O=E.activeChain,C=E.switchNetwork,R=(0,M.useState)({open:!1,text:void 0}),z=(0,i.Z)(R,2),G=z[0],H=z[1],K=(0,M.useState)(1),U=(0,i.Z)(K,2),Q=U[0],V=U[1],$=(0,M.useState)(!1),J=(0,i.Z)($,2),ee=J[0],te=J[1],ne=(0,M.useState)({}),ae=(0,i.Z)(ne,2),re=ae[0],ie=ae[1],se=(0,M.useState)({ogSaleTexts:[],preSaleTexts:[],publicSaleTexts:[]}),le=(0,i.Z)(se,2),oe=le[0],ce=le[1],ue=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,a,r,i,s,o,c,u,d,m,x,h,f,b,v,S,_;return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=q.utils,e.next=3,p.OG_SALE_PRICE();case 3:return e.t1=e.sent.toString(),t=e.t0.fromWei.call(e.t0,e.t1,"ether"),e.t2=q.utils,e.next=8,p.PRE_SALE_PRICE();case 8:return e.t3=e.sent.toString(),n=e.t2.fromWei.call(e.t2,e.t3,"ether"),e.t4=q.utils,e.next=13,p.PUBLIC_SALE_PRICE();case 13:return e.t5=e.sent.toString(),a=e.t4.fromWei.call(e.t4,e.t5,"ether"),e.t6=q.utils,e.next=18,p.MAX_FREE_ADDRESS_MINT();case 18:return e.t7=e.sent,r=e.t6.toDecimal.call(e.t6,e.t7),e.t8=q.utils,e.next=23,p.MAX_OG_ADDRESS_MINT();case 23:return e.t9=e.sent,i=e.t8.toDecimal.call(e.t8,e.t9),e.t10=q.utils,e.next=28,p.MAX_PRE_ADDRESS_MINT();case 28:return e.t11=e.sent,s=e.t10.toDecimal.call(e.t10,e.t11),e.t12=q.utils,e.next=33,p.MAX_PUBLIC_ADDRESS_MINT();case 33:return e.t13=e.sent,o=e.t12.toDecimal.call(e.t12,e.t13),e.t14=q.utils,e.next=38,p.freeListSaleAmount();case 38:return e.t15=e.sent,c=e.t14.toDecimal.call(e.t14,e.t15),e.t16=q.utils,e.next=43,p.ogListSaleAmount();case 43:return e.t17=e.sent,u=e.t16.toDecimal.call(e.t16,e.t17),e.t18=q.utils,e.next=48,p.preListSaleAmount();case 48:return e.t19=e.sent,d=e.t18.toDecimal.call(e.t18,e.t19),e.t20=q.utils,e.next=53,p.publicSaleAmount();case 53:return e.t21=e.sent,m=e.t20.toDecimal.call(e.t20,e.t21),e.next=57,p.mintInfo();case 57:return x=e.sent,h=x.freeSaleOn,f=x.ogSaleOn,b=q.utils.toDecimal(x.preSaleStartTime),v=q.utils.toDecimal(x.publicSaleStartTime),S=q.utils.toDecimal(x.publicSaleKey),e.t22=q.utils,e.next=66,p.maxSupply();case 66:e.t23=e.sent,_=e.t22.toDecimal.call(e.t22,e.t23),ie({og_sale_price:t,pre_sale_price:n,public_sale_price:a,max_free_address_mint:r,max_og_address_mint:i,max_pre_address_mint:s,max_public_address_mint:o,freeListSaleAmount:c,ogListSaleAmount:u,preListSaleAmount:d,publicSaleAmount:m,freeSaleOn:h,ogSaleOn:f,preSaleStartTime:b,publicSaleStartTime:v,publicSaleKey:S,maxSupply:_});case 69:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,i,s,o,c,u,d,x,h;return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("\ud83d\udc05"),e.t0=q.utils,e.next=4,p.totalSupply();case 4:if(e.t1=e.sent,t=e.t0.toDecimal.call(e.t0,e.t1),!P){e.next=17;break}if(e.t3=null===P||void 0===P?void 0:P.address,!e.t3){e.next=14;break}return e.t4=q.utils,e.next=12,p.balanceOf(P.address);case 12:e.t5=e.sent,e.t3=e.t4.toDecimal.call(e.t4,e.t5);case 14:e.t2=e.t3,e.next=18;break;case 17:e.t2=0;case 18:if(n=e.t2,!P){e.next=30;break}if(e.t7=null===P||void 0===P?void 0:P.address,!e.t7){e.next=27;break}return e.t8=q.utils,e.next=25,p.freeAllowList(null===P||void 0===P?void 0:P.address);case 25:e.t9=e.sent,e.t7=e.t8.toDecimal.call(e.t8,e.t9);case 27:e.t6=e.t7,e.next=31;break;case 30:e.t6=0;case 31:if(r=e.t6,!P){e.next=43;break}if(e.t11=null===P||void 0===P?void 0:P.address,!e.t11){e.next=40;break}return e.t12=q.utils,e.next=38,p.ogAllowList(null===P||void 0===P?void 0:P.address);case 38:e.t13=e.sent,e.t11=e.t12.toDecimal.call(e.t12,e.t13);case 40:e.t10=e.t11,e.next=44;break;case 43:e.t10=0;case 44:if(i=e.t10,!P){e.next=56;break}if(e.t15=null===P||void 0===P?void 0:P.address,!e.t15){e.next=53;break}return e.t16=q.utils,e.next=51,p.preAllowList(null===P||void 0===P?void 0:P.address);case 51:e.t17=e.sent,e.t15=e.t16.toDecimal.call(e.t16,e.t17);case 53:e.t14=e.t15,e.next=57;break;case 56:e.t14=0;case 57:if(s=e.t14,!P){e.next=69;break}if(e.t19=null===P||void 0===P?void 0:P.address,!e.t19){e.next=66;break}return e.t20=q.utils,e.next=64,p.numberMinted(null===P||void 0===P?void 0:P.address);case 64:e.t21=e.sent,e.t19=e.t20.toDecimal.call(e.t20,e.t21);case 66:e.t18=e.t19,e.next=70;break;case 69:e.t18=0;case 70:o=e.t18,c="".concat((r?"Free ":i&&"Og Sale ")||s&&"Pre Sale "||"","Mint"),u=function(e){return("boolean"===typeof e&&e?"\u23f3":"number"===typeof e&&e>0&&"\u23f3 utc time ".concat(m().unix(e).format("YYYY-MM-DD HH:mm:ss")))||"Opening time to be announced"},d=[u(re.ogSaleOn),"".concat(re.og_sale_price," eth per / og, kol, early club members"),"surplus supply\uff1a".concat(re.ogListSaleAmount," / max mint per address\uff1a").concat(re.max_og_address_mint)],x=[u(re.preSaleStartTime),"".concat(re.pre_sale_price," eth per / participation of whitelisted users"),"surplus supply\uff1a".concat(re.preListSaleAmount," / max mint per address\uff1a").concat(re.max_pre_address_mint)],h=[u(re.publicSaleStartTime),"".concat(re.public_sale_price," eth per, anyone can participate"),"surplus supply\uff1a".concat(re.publicSaleAmount," / max mint per address\uff1a").concat(re.max_public_address_mint)],ce((0,a.Z)((0,a.Z)({},re),{},{totalSupply:t,balanceOf:n,freeAllowList:r,ogAllowList:i,preAllowList:s,numberMinted:o,mintBtnText:c,ogSaleTexts:d,preSaleTexts:x,publicSaleTexts:h}));case 77:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,M.useEffect)((function(){ue(),null!==re&&void 0!==re&&re.maxSupply&&de()}),[null===re||void 0===re?void 0:re.maxSupply]),(0,M.useEffect)((function(){me(),(null===O||void 0===O?void 0:O.id)===h.c[W].id&&null!==re&&void 0!==re&&re.maxSupply&&de()}),[O]),(0,M.useEffect)((function(){null!==P&&void 0!==P&&P.address&&(null===O||void 0===O?void 0:O.id)===h.c[W].id&&null!==re&&void 0!==re&&re.maxSupply&&de()}),[P]);var pe=function(e){var t=Number(e.target.value);if(t<0)return H({open:!0,type:"error",text:"Illegal input, mint value must > 0"});V(t)},me=function(){if(null!==O&&void 0!==O&&O.id&&(null===O||void 0===O?void 0:O.id)!==h.c[W].id)return C(h.c[W].id),H({open:!0,type:"error",text:"Please switch to the Rinkeby network first"})},xe=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("\ud83e\udd81",oe),P&&O){e.next=3;break}return e.abrupt("return",H({open:!0,text:"Please connect the wallet first"}));case 3:if(me(),t=function(){var e=(0,r.Z)(l().mark((function e(t,n){var a,r,i;return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=n.max,r=n.price,!(Q+(null===oe||void 0===oe?void 0:oe.balanceOf)>("number"===typeof a?a:oe[a]))){e.next=3;break}return e.abrupt("return",H({open:!0,type:"error",text:"current wallet address reached max mint amount"}));case 3:if(Q){e.next=5;break}return e.abrupt("return",H({open:!0,type:"error",text:"mint must more than 0 token"}));case 5:e.prev=5,te(!0),i={},e.t0=t,e.next="devMint"===e.t0?11:"freeMint"===e.t0?15:"publicSaleMint"===e.t0?19:23;break;case 11:return e.next=13,p[t](Q,null===P||void 0===P?void 0:P.address);case 13:return i=e.sent,e.abrupt("break",27);case 15:return e.next=17,p[t](Q);case 17:return i=e.sent,e.abrupt("break",27);case 19:return e.next=21,p[t](Q,null===oe||void 0===oe?void 0:oe.publicSaleKey,{value:d.parseEther((oe[r]*Q).toString())});case 21:return i=e.sent,e.abrupt("break",27);case 23:return e.next=25,p[t](Q,{value:d.parseEther((oe[r]*Q).toString())});case 25:return i=e.sent,e.abrupt("break",27);case 27:return console.log("\ud83d\udc12",i),e.next=30,i.wait();case 30:te(!1),H({open:!0,text:"congratulation on your successful minted"}),console.log("\ud83e\udd92","success -".concat(i.hash)),de(),e.next=41;break;case 36:e.prev=36,e.t1=e["catch"](5),console.error(e.t1),H({open:!0,type:"error",text:"object"===typeof(null===e.t1||void 0===e.t1?void 0:e.t1.error)?null===e.t1||void 0===e.t1?void 0:e.t1.error.message:null===e.t1||void 0===e.t1?void 0:e.t1.message}),te(!1);case 41:case"end":return e.stop()}}),e,null,[[5,36]])})));return function(t,n){return e.apply(this,arguments)}}(),"0x6d07bFB43eE87f9Df7d8789AeD36dD3194DA7ff2"!==(null===P||void 0===P?void 0:P.address)){e.next=7;break}return e.abrupt("return",t("devMint",oe.maxSupply-oe.totalSupply));case 7:oe.freeSaleOn&&oe.freeAllowList?t("freeMint",{max:"max_free_address_mint"}):oe.ogSaleOn&&oe.ogAllowList?t("ogMint",{max:"max_og_address_mint",price:"og_sale_price"}):oe.preSaleStartTime&&oe.preAllowList?t("preSaleMint",{max:"max_pre_address_mint",price:"pre_sale_price"}):oe.publicSaleStartTime?t("publicSaleMint",{max:"max_public_address_mint",price:"public_sale_price"}):H({open:!0,type:"error",text:"current wallet address does not have suitable mint qualifications"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,N.jsxs)("article",{className:I().home,children:[(0,N.jsxs)(f.ZP,{className:I()["home-header"],children:[(0,N.jsxs)(f.ZP,{container:!0,alignItems:"center",children:[(0,N.jsx)(b.Z,{alt:"".concat(F," Logo"),variant:"rounded",sx:{width:52,height:52},src:X}),(0,N.jsx)("span",{children:F})]}),(0,N.jsx)(f.ZP,{container:!0,justifyContent:"flex-end",children:(0,N.jsx)(D.NL,{accountStatus:{smallScreen:"avatar",largeScreen:"full"},showBalance:{smallScreen:!1,largeScreen:!0}})})]}),(0,N.jsxs)(f.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"space-around",className:I()["home-box"],children:[(0,N.jsxs)(f.ZP,{item:!0,sm:12,md:6,sx:{paddingTop:[5,5,0]},children:[(0,N.jsx)(v.Z,{component:"h1",sx:{fontSize:[22,24,28,32]},children:"".concat(F," is composed of Crypto community enthusiasts and Ethereum developers, aiming to build a strong Web3 infrastructure for investors and creators.")}),oe.ogSaleTexts[0]?(0,N.jsxs)(v.Z,{component:"h6",children:[(0,N.jsx)("strong",{children:"Og Mint\uff1a"}),null===oe||void 0===oe?void 0:oe.ogSaleTexts[0],oe.ogSaleTexts.map((function(e,t){return t>0&&(0,N.jsx)("span",{children:e},"og-".concat(t))}))]}):(0,N.jsxs)(N.Fragment,{children:["Og Mint\uff1a",(0,N.jsx)(v.Z,{variant:"h3",children:(0,N.jsx)(S.Z,{})})]}),oe.preSaleTexts[0]?(0,N.jsxs)(v.Z,{component:"h6",children:[(0,N.jsx)("strong",{children:"Pre Sale\uff1a"}),null===oe||void 0===oe?void 0:oe.preSaleTexts[0],oe.preSaleTexts.map((function(e,t){return t>0&&(0,N.jsx)("span",{children:e},"pre-".concat(t))}))]}):(0,N.jsxs)(N.Fragment,{children:["Pre Sale\uff1a",(0,N.jsx)(v.Z,{variant:"h3",children:(0,N.jsx)(S.Z,{})})]}),oe.publicSaleTexts[0]?(0,N.jsxs)(v.Z,{children:[(0,N.jsx)("strong",{children:"Public Sale\uff1a"}),null===oe||void 0===oe?void 0:oe.publicSaleTexts[0],oe.publicSaleTexts.map((function(e,t){return t>0&&(0,N.jsx)("span",{children:e},"public-".concat(t))}))]}):(0,N.jsxs)(N.Fragment,{children:["Public Sale\uff1a",(0,N.jsx)(v.Z,{variant:"h3",children:(0,N.jsx)(S.Z,{})})]}),(0,N.jsxs)(f.ZP,{container:!0,item:!0,className:I()["home-box-actions"],sx:{marginTop:1.5,flexDirection:["column","row"]},children:[(0,N.jsx)(_.Z,{variant:"outlined",size:"large",href:"//".concat(W.includes("mainnet")?"":"testnets.","opensea.io/account"),target:"_blank",sx:{width:["100%","auto"]},children:"Testnet OpenSea"}),(0,N.jsx)(_.Z,{variant:"outlined",color:"success",size:"large",href:"//".concat(W.includes("mainnet")?"":"".concat(W,"."),"etherscan.io/address/").concat(Y.contractAddress),target:"_blank",sx:{width:["100%","auto"],marginTop:[3,0],marginLeft:[0,6]},children:"Rinkeby EtherScan"})]})]}),(0,N.jsx)(f.ZP,{item:!0,container:!0,justifyContent:"center",sm:12,md:3,children:(0,N.jsxs)(g.Z,{sx:{minWidth:350,minHeight:500,maxWidth:[350,360]},children:[(0,N.jsx)(k.Z,{component:"img",image:"//ipfs.thirdweb.com/ipfs/QmXSXChFhk1L6kwbYybmSXwxW7tqcqGNgYTUa15egiGBsB/0.gif",alt:"".concat(F," Card Image")}),(0,N.jsxs)(y.Z,{children:[(0,N.jsxs)(f.ZP,{container:!0,justifyContent:"space-between",children:[(0,N.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"h5",children:"Schedule"}),null!==oe&&void 0!==oe&&oe.maxSupply?(0,N.jsx)(v.Z,{gutterBottom:!0,variant:"h5",component:"h5",children:"".concat(null===oe||void 0===oe?void 0:oe.totalSupply,"/").concat(null===oe||void 0===oe?void 0:oe.maxSupply)}):(0,N.jsx)(v.Z,{variant:"h4",children:(0,N.jsx)(S.Z,{width:80,sx:{marginTop:-.5}})})]}),(0,N.jsx)(w.Z,{label:"Mint Number",type:"number",InputLabelProps:{shrink:!0},defaultValue:1,placeholder:"please enter your mint amount",variant:"standard",fullWidth:!0,required:!0,onChange:pe}),null!==oe&&void 0!==oe&&oe.numberMinted?(0,N.jsx)(v.Z,{component:"h5",children:(0,N.jsx)(j.Z,{underline:"none",href:"//testnets.opensea.io/account",target:"_blank",children:"preview or sell in test opensea"})}):""]}),(0,N.jsx)(Z.Z,{children:(0,N.jsx)(T.Z,{disabled:!(null!==oe&&void 0!==oe&&oe.maxSupply),loading:ee,loadingIndicator:"Minting . . .",sx:{width:"100%"},size:"large",variant:"contained",onClick:xe,children:(null===oe||void 0===oe?void 0:oe.mintBtnText)||"Mint"})})]})})]}),(0,N.jsx)(A.Z,{open:G.open,onClose:function(){return H({open:!1,text:void 0})},message:G.text,autoHideDuration:4500,className:B("home-snackbar",G.type&&"home-snackbar-".concat(G.type))})]})};t["default"]=(0,o.$j)((function(e){var t=e.app;return{app:t}}))(z)},88677:function(){},62808:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},84471:function(){},83425:function(){},52361:function(){},94616:function(){},6567:function(){},57463:function(){},23424:function(){},84701:function(){},27966:function(){}}]);