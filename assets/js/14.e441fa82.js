(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(e,t,a){"use strict";a.r(t);var r=a(24),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Welcome to MetaMask’s Developer Documentation. This documentation is for learning to develop applications for MetaMask.")]),e._v(" "),a("ul",[a("li",[e._v("You can find the latest version of MetaMask on our "),a("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("For help using MetaMask, visit our "),a("a",{attrs:{href:"https://metamask.zendesk.com/hc/en-us",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Support Site"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("For up to the minute news, follow our "),a("a",{attrs:{href:"https://peepeth.com/MetaMask/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peepeth"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://twitter.com/metamask_io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://medium.com/metamask",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium"),a("OutboundLink")],1),e._v(" pages.")]),e._v(" "),a("li",[e._v("To learn how to contribute to the MetaMask project itself, visit our "),a("a",{attrs:{href:"https://github.com/MetaMask/metamask-extension/tree/develop/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Internal Docs"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"why-metamask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-metamask","aria-hidden":"true"}},[e._v("#")]),e._v(" Why Metamask")]),e._v(" "),a("p",[e._v("MetaMask was created out of the needs of creating more secure and usable Ethereum-based web sites. In particular, it handles account management and connecting the user to the blockchain.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/guide/ethereum-provider.html"}},[e._v("Read the full docs of our injected provider")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html"}},[e._v("Read the full docs of the JSON RPC API")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/guide/experimental-apis.html"}},[e._v("Read about other supported APIs")])],1)]),e._v(" "),a("h2",{attrs:{id:"account-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Account Management")]),e._v(" "),a("p",[e._v("MetaMask allows users to manage accounts and their keys in a variety of ways, including hardware wallets, while isolating them from the site context. This is a great security improvement over storing the user keys on a single central server, or even in local storage, which can allow for "),a("a",{attrs:{href:"https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked-in-dns-hijacking-scheme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mass account thefts"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This security feature also comes with developer convenience: For developers, you simply interact with the globally available "),a("code",[e._v("ethereum")]),e._v(" API that identifies the users of web3-compatible browsers (like MetaMask users), and whenever you request a transaction signature (like "),a("code",[e._v("eth_sendTransaction")]),e._v(", "),a("code",[e._v("eth_signTypedData")]),e._v(", or others), MetaMask will prompt the user in as comprehensible a way as possible, allowing them to be informed, you to have a simple API, and attackers left trying to phish individual users rather than performing mass hacks, although "),a("a",{attrs:{href:"https://medium.com/metamask/new-phishing-strategy-becoming-common-1b1123837168",target:"_blank",rel:"noopener noreferrer"}},[e._v("DNS hacks can still be used for phishing en masse"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"blockchain-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-connection","aria-hidden":"true"}},[e._v("#")]),e._v(" Blockchain Connection")]),e._v(" "),a("p",[e._v("MetaMask comes pre-loaded with nice and fast connections to the Ethereum blockchain and several test networks via our friends at "),a("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),a("OutboundLink")],1),e._v(". This allows users to get started without synchronizing a full node, while still providing the option to upgrade their security the blockchain provider of their choice over time.")]),e._v(" "),a("p",[e._v("Today, MetaMask is compatible with any blockchain that exposes an "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JSON-RPC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum Compatible JSON RPC API"),a("OutboundLink")],1),e._v(", including custom and private blockchains. For development, we recommend running a test blockchain like "),a("a",{attrs:{href:"https://www.trufflesuite.com/ganache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ganache"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We’re aware that there are constantly more and more private blockchains that people are interested in connecting MetaMask to, and "),a("a",{attrs:{href:"https://medium.com/metamask/metamasks-vision-for-multiple-network-support-4ffbee9ec64d",target:"_blank",rel:"noopener noreferrer"}},[e._v("we are continuously building towards easier and easier integration with these many options"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"blockchain-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Blockchain Applications")]),e._v(" "),a("p",[e._v("MetaMask makes it easy to write user interfaces to blockchain-based smart contract systems. You can accept payments without knowing how to write smart contracts, but you’ll be able to do much more interesting things if you do.")]),e._v(" "),a("h2",{attrs:{id:"new-dapp-developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-dapp-developers","aria-hidden":"true"}},[e._v("#")]),e._v(" New Dapp Developers")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://karl.tech/learning-solidity-part-1-deploy-a-contract/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learning Solidity"),a("OutboundLink")],1),e._v(" by karl Floersch")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cryptozombies.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CryptoZombies"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);