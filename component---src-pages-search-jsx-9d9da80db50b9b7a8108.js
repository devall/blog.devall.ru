(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(n,e,t){"use strict";t.r(e);t(76),t(77);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),l=t(154),c=t(151),s=t(152),u=c.c.form.withConfig({displayName:"SearchFormContainer",componentId:"sc-1ohzhal-0"})(["display:flex;color:",";align-items:left;justify-content:left;flex-direction:column;margin-top:3em;input{font-size:3em;display:block;width:100%;border:none;border-bottom:3px solid ",";::-webkit-input-placeholder{",";opacity:0.3;}:-moz-placeholder{",";opacity:0.3;}::-moz-placeholder{",";opacity:0.3;}:-ms-input-placeholder{",";opacity:0.3;}::-ms-input-placeholder{",";opacity:0.3;}::placeholder{",";opacity:0.3;}}"],s.a.h,s.a.border,s.a.code,s.a.code,s.a.code,s.a.code,s.a.code,s.a.code),d=c.c.div.withConfig({displayName:"SearchResultContainer",componentId:"sc-6z5jii-0"})(["text-align:left;padding-top:0;margin-top:0;padding-bottom:0.8em;position:relative;h2{margin-bottom:1em;margin-top:1em;width:100%;a{color:",";text-decoration:none;:hover{text-decoration:underline;}}}p{max-width:650px;margin-left:0;}"],s.a.h),p=t(160);t.d(e,"searchpageQuery",function(){return g});var m=function(n){13===n.keyCode&&n.preventDefault()},f=function(n){var e=n.data,t=Object(a.useState)(""),r=t[0],i=t[1],c=Object(a.useRef)(),s=e.allMarkdownRemark.edges;return Object(a.useEffect)(function(){c.current.focus()}),o.a.createElement(p.a,null,o.a.createElement(u,null,o.a.createElement("input",{type:"text",placeholder:"search here",onChange:function(n){return i(n.target.value)},onKeyDown:m,ref:c})),o.a.createElement("div",null,s.filter(function(n){return function(e){var t=e.node;return t.frontmatter.tags&&t.frontmatter.tags.every(function(e){return e.toLowerCase().includes(n.toLowerCase())})||t.frontmatter.title.toLowerCase().includes(n.toLowerCase())||t.excerpt.toLowerCase().includes(n.toLowerCase())||!n}}(r)).slice(0,10).map(function(n){var e=n.node;return o.a.createElement(d,{key:e.id},o.a.createElement("h2",null,o.a.createElement(l.Link,{to:e.fields.slug},e.frontmatter.title)),o.a.createElement("p",null,e.excerpt))})))};f.defaultProps={data:{allMarkdownRemark:{edges:[]}}},f.propTypes={data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array.isRequired})})};e.default=f;var g="3494291359"},152:function(n,e,t){"use strict";var a=function(n,e){return n.slice(0,n.lastIndexOf(","))+", "+parseFloat(n.slice(n.lastIndexOf(",")+1,n.lastIndexOf(")")))*e+")"};t.d(e,"a",function(){return r}),t.d(e,"b",function(){return i});var o="hsla(0, 0%, 0%, 1)",r={h:o,p:a(o,.8),border:a(o,.15),code:a(o,.1),background:"hsla(0, 0%, 100%, 1)",linkHover:"hsla(192, 100%, 50%, 1)",link:a(o,.35),subNav:a(o,.2)},i={basic:'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif, Georgia, serif, sans-serif',code:"'Source Code Pro', monospace"}},154:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return g}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return m}),t.d(e,"useStaticQuery",function(){return f});var a=t(0),o=t.n(a),r=t(4),i=t.n(r),l=t(153),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var s=t(157),u=t.n(s);t.d(e,"PageRenderer",function(){return u.a});var d=t(32);t.d(e,"parsePath",function(){return d.a});var p=o.a.createContext({}),m=function(n){return o.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(n){o.a.useContext;var e=o.a.useContext(p);if(e[n]&&e[n].data)return e[n].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(n,e,t){"use strict";t(73),t(52),t(165);var a=t(151),o={monitor:1600,desktop:992,tablet:700,phone:425,tiny:340,none:320};e.a=Object.keys(o).reduce(function(n,e){return n[e]=function(){return Object(a.b)(["@media (max-width:","px){",";}"],o[e],a.b.apply(void 0,arguments))},n},{})},157:function(n,e,t){var a;n.exports=(a=t(158))&&a.default||a},158:function(n,e,t){"use strict";t.r(e);t(33);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),l=t(53),c=t(2),s=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},159:function(n){n.exports={data:{site:{siteMetadata:{github:"https://github.com/devall",linkedin:"https://www.linkedin.com/company/devall"}}}}},160:function(n,e,t){"use strict";var a=t(0),o=t.n(a),r=(t(166),t(155)),i=t.n(r),l=t(151),c=t(152),s="\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: "+c.b.basic+";\n    font-size: 100%;\n    text-size-adjust: none;\n    text-rendering: optimizelegibility;\n    image-rendering: optimizequality;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    transition: all .2s ease;\n  }\n\n  nav,\n  header,\n  footer,\n  section {\n    display: block;\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n\n  button,\n  input,\n  select[multiple],\n  textarea {\n    background-image: none;\n  }\n\n  img {\n    border: 0;\n  }\n\n  button {\n    appearance: none;\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    margin-top: .5em;\n  }\n\n  header {\n    clear: both;\n  }\n\n  a {\n    text-decoration: none;\n    color: "+c.a.h+";\n  }\n\n  .gatsby-resp-image-link,\n  img {\n    width: 100%;\n  }\n\n  .gatsby-resp-image-wrapper {\n    z-index: 10;\n    margin: 0!important;\n  }\n\n  input {\n    background: "+c.a.background+";\n    font-size: 3em;\n    display: block;\n    width: 50%;\n    border: none;\n    border-bottom: 2px solid "+c.a.background+"\n  }\n\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n    outline: none;\n    background: "+c.a.background+";\n    font-size: 3em;\n    display: block;\n    width: 50%;\n    border: none;\n    border-bottom: 2px solid "+c.a.background+"\n  }\n\n  hr {\n    border: none;\n    display: block;\n    margin: 2em 0 1em;\n    font-size: .9rem;\n    :before {\n      display: block;\n      content: '';\n      width: 3px;\n      height: 3px;\n      margin: 2em 2em 2em;\n      border-radius: 50%;\n      background: black;\n      box-shadow: calc(3px*8) 0 0 0 black, calc(3px*-8) 0 0 0 black;\n    }\n  }\n",u="\n  html,\n  body {\n    font-size: 17px;\n    @media screen and (max-width: 700px) {\n      font-size: 15px;\n    }\n    @media screen and (min-width: 1600px) {\n      font-size: 19px;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4 {\n    color: "+c.a.h+";\n    line-height: 1.25;\n    font-weight: 600;\n    text-rendering: optimizeLegibility;\n    margin-top: 2.8em;\n    margin-bottom: 1.2em;\n    @media screen and (max-width: 700px) {\n      // text-align: center;\n    }\n  }\n\n  h4 {\n    margin-top: 2.2em;\n    font-size: .966em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.72em;\n  }\n\n  p,\n  .message {\n    color: "+c.a.p+";\n    margin: 0 auto 1.2em;\n    line-height: 1.5;\n    letter-spacing: normal;\n  }\n\n  .gatsby-resp-image-link,\n  img,\n  video,\n  iframe,\n  figure {\n    display: block;\n    margin: 1.1em 0;\n  }\n\n  table {\n    margin-top: 2.8em;\n    color: "+c.a.h+";\n    margin-bottom: 2.2em;\n    max-width: 100%;\n  }\n\n  th, td {\n    text-align: left;\n    padding-bottom: 1em;\n    padding-right: 1em;\n  }\n\n",d="\n  /*\n  @author Song Wang\n  */\n\n  .token.comment,\n  .token.block-comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    // color: #7D8B99;\n  }\n\n  .token.punctuation {\n    // color: #5F6364;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.boolean,\n  .token.number,\n  .token.function-name,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    // color: #c92c2c;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.function,\n  .token.builtin,\n  .token.inserted {\n    // color: #2f9c0a;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    // color: "+c.a.h+";\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword,\n  .token.class-name {\n    color: "+c.a.p+';\n    font-weight: 600;\n  }\n\n  .token.regex,\n  .token.important {\n    // color: #e90;\n  }\n\n  .language-css .token.string,\n  .style .token.string {\n    // color: #a67f59;\n  }\n\n  .token.important {\n    font-weight: normal;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .namespace {\n    opacity: .7;\n  }\n\n  /* Plugin styles */\n  .token.tab:not(:empty):before,\n  .token.cr:before,\n  .token.lf:before {\n    // color: #e0d7d1;\n  }\n\n  /* Plugin styles: Line Numbers */\n  pre[class*="language-"].line-numbers {\n    padding-left: 0;\n  }\n\n  pre[class*="language-"].line-numbers code {\n    padding-left: 3.8em;\n  }\n\n  pre[class*="language-"].line-numbers .line-numbers-rows {\n    left: 0;\n  }\n\n  /* Plugin styles: Line Highlight */\n  pre[class*="language-"][data-line] {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n  }\n  pre[data-line] code {\n    position: relative;\n    padding-left: 4em;\n  }\n  pre .line-highlight {\n    margin-top: 0;\n  }\n',p="\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -1000;\n  background-color: "+c.a.background+";\n";function m(){var n=i()(["\n  ","\n  ","\n  ","\n  ","\n"]);return m=function(){return n},n}var f=Object(l.a)(m(),s,u,d,p),g=t(156);function h(){var n=i()(["\n    width: 88%;\n  "]);return h=function(){return n},n}var b=l.c.div.withConfig({displayName:"BodyContainer",componentId:"b4k8mp-0"})(["width:650px;height:100%;margin:0 auto;"," @media screen and (min-width:1600px){width:900px;}"],g.a.tablet(h())),k=t(7),y=t.n(k),w=l.c.div.withConfig({displayName:"Line__Wrapper",componentId:"ib4kqy-0"})(["background:#289eda;height:2px;"]),x=function(n){function e(){return n.apply(this,arguments)||this}return y()(e,n),e.prototype.render=function(){return o.a.createElement(w,null)},e}(a.Component),v=(t(74),t(4)),E=t.n(v),C=t(154),z=l.c.div.withConfig({displayName:"NavContainer",componentId:"sc-180oqf0-0"})(["display:block;font-size:0.8em;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;ul{overflow:auto;li:first-child{float:left;padding-left:0em;}li:nth-child(2){padding-right:0em;}li{float:right;display:block;vertical-align:middle;line-height:1;list-style:none;padding:0.7em;margin:0em;a{text-transform:uppercase;color:",";text-decoration:none;display:block;transition:opacity 0.5s ease-in;:hover,:active,:focus{filter:invert(40%);}&.","{}&.home{}}}}"],c.a.h,function(n){return n.activeClassName}),q=["/","/search/","/about/","/blog/"],j=function(n){var e,t=n.location;return o.a.createElement("li",null,o.a.createElement(C.Link,{to:t},1===(e=t).length?"Devall":e.split("/")[1]))};j.defaultProps={location:""},j.propTypes={location:E.a.string};var L=function(){return o.a.createElement(z,null,o.a.createElement("ul",null,q.map(function(n){return o.a.createElement(j,{key:n,location:n})})))},S=(t(73),t(52),t(164),t(159));function R(){var n=i()(["\n      width: 100%;\n      text-align: center;\n    "]);return R=function(){return n},n}var N=l.c.footer.withConfig({displayName:"FooterContainer",componentId:"sc-15hcmgs-0"})(["font-size:.9em;margin-top:4em;ul{overflow:auto;margin-bottom:2em;float:right;"," li{display:inline-block;padding:1em;a{position:relative;li::after{content:' \\ ';}}}"],g.a.tablet(R())),O=function(){return o.a.createElement(C.StaticQuery,{query:"4011262072",render:function(n){return o.a.createElement(N,null,o.a.createElement("ul",null,Object.entries(n.site.siteMetadata).map(function(n){var e=n[0],t=n[1];return o.a.createElement("li",{key:e},o.a.createElement("a",{rel:"noopener noreferrer",target:"__blank",href:t},e))})))},data:S})};e.a=function(n){var e=n.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement(x,null),o.a.createElement(b,null,o.a.createElement(L,null),e,o.a.createElement(O,null)))}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-9d9da80db50b9b7a8108.js.map