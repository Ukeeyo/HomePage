(this.webpackJsonpHomePage=this.webpackJsonpHomePage||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a(1),l=a(2),c=a(4),s=a(3),u=a(6),m=a(5),p={padding:"1rem",display:"flex",flexDirection:"column"},d={height:150,width:150,borderRadius:25},h={backgroundColor:"rgba(0,0,0,0.7)",color:"white",textAlign:"center",marginTop:5,borderRadius:25},g=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:p},r.a.createElement("img",{style:d,src:this.props.img,alt:""}),r.a.createElement("div",{style:h},this.props.name))}}]),a}(r.a.Component),f={display:"grid",gridGap:"1rem",justifyItems:"center",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",paddingTop:"1rem",backgroundColor:"rgba(0,0,0,0.7)"},b=[{name:"JavaScript",img:"JavaScript.png"},{name:"React",img:"React.png"},{name:"Ember",img:"Ember.png"},{name:"Node",img:"Node.png"},{name:"Python",img:"Python.png"},{name:"Ruby",img:"Ruby.png"},{name:"C++",img:"CPP.png"}],v=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=b.map((function(e,t){return r.a.createElement(g,{key:"".concat(e.name,"-i"),img:"".concat("/HomePage","/").concat(e.img),name:e.name})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:f},e))}}]),a}(r.a.Component),y=(a(15),{borderRadius:"50%",width:100,height:100}),E={display:"flex",backgroundColor:"rgba(255,255,255,0.5)",paddingTop:25,paddingBottom:40},j={color:"white",padding:"1rem",backgroundColor:"rgba(0,0,0,0.7)",marginTop:"auto",borderRadius:10,paddingLeft:5,marginLeft:10,marginRight:"0.5vw"},k=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(m.a)(Object(m.a)(Object(m.a)({},E),this.props.style),{},{flexDirection:this.props.reverse?"row-reverse":"row"}),className:this.props.reverse?"bubble-container-reverse":"bubble-container"},r.a.createElement("img",{src:this.props.avatar,style:y,alt:"",className:this.props.reverse?"avatar-reverse":"avatar"}),r.a.createElement("div",{style:j,className:"text-bubble"},this.props.content))}}]),a}(r.a.Component),O=(a(16),{color:"white",display:"flex",backgroundColor:"rgba(0,0,0,0.8)",borderRadiusBottom:"30%",padding:15,paddingLeft:50}),C={paddingLeft:50,marginTop:"auto"},x=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.style?Object(m.a)(Object(m.a)({},O),this.props.style):O;return r.a.createElement("div",{style:e},r.a.createElement("div",null,r.a.createElement("div",{className:"sign-board-title"},this.props.title),r.a.createElement("div",{style:C,className:"sign-board-sub-title"},this.props.subTitle)))}}]),a}(r.a.Component),T={display:"flex",flexDirection:"column",fontFamily:"'Montserrat', sans-serif",backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:10},S={display:"flex",justifyContent:"space-between"},w={width:150,height:150,margin:"auto",alignSelf:"center"},R=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:T},r.a.createElement("div",{style:{fontSize:25}},"Work Experience"),r.a.createElement("div",{style:S},r.a.createElement("div",{style:{paddingLeft:10,display:"flex",flexDirection:"column",paddingBottom:20,width:200}},r.a.createElement("img",{style:w,src:"".concat("/HomePage","/PlayStation.png"),alt:""}),r.a.createElement("div",{style:{textAlign:"center"}},"Playstation"),r.a.createElement("div",{style:{textAlign:"center"}},"2015 - Present")),r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("ul",null,r.a.createElement("li",null,"Developed web applications for the PS4 platform"),r.a.createElement("li",null,"Created and maintained JS libraries"),r.a.createElement("li",null,"Managed the release process of applications that ship to millions of PlayStation network users"),r.a.createElement("li",null,"Analyzed data to ensure application performance"),r.a.createElement("li",null,"Iterated and A/B tested improvements"),r.a.createElement("li",null,"Shipped SDK libraries for PlayStation consoles")))),r.a.createElement("div",{style:{marginTop:25,fontSize:25}},"Education"),r.a.createElement("div",{style:S},r.a.createElement("div",{style:{paddingLeft:10,display:"flex",flexDirection:"column",paddingBottom:20,width:200}},r.a.createElement("img",{style:w,src:"".concat("/HomePage","/SFSU.png"),alt:""}),r.a.createElement("div",{style:{textAlign:"center"}},"SFSU")),r.a.createElement("div",{style:{margin:"auto"}},"Business Administration (B.S.)")))}}]),a}(r.a.Component),N=(a(8),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).inputRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"addTextToChat",value:function(e){(0,this.props.onSubmit)(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTextToChat(e.inputRef.current.value),e.inputRef.current.value=""}},r.a.createElement("div",{className:"chat-input-container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){e.addTextToChat("Help!")},type:"button",className:"suggestions"},"Help"),r.a.createElement("button",{onClick:function(){e.addTextToChat("I'd like to know more about your skills")},type:"button",className:"suggestions"},"Skills"),r.a.createElement("button",{onClick:function(){e.addTextToChat("Do you have a resume I could look at?")},type:"button",className:"suggestions"},"Resume"),r.a.createElement("button",{onClick:function(){e.addTextToChat("I want to talk to the real Marshall, can I get his contact info?")},type:"button",className:"suggestions"},"Contact")),r.a.createElement("input",{autoFocus:!0,ref:this.inputRef,className:"input-style",type:"text",placeholder:"Chat"}))))}}]),a}(r.a.Component)),P=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).scrollRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo(0,document.body.scrollHeight)}},{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{ref:this.scrollRef,style:{paddingBottom:100}},e)}}]),a}(r.a.Component),I={INTENTS:["help","skills","resume","contact"],getIntent:function(e){for(var t=e.toLowerCase(),a=this.INTENTS.length-1;a>=0;a--)if(t.includes(this.INTENTS[a]))return this.INTENTS[a]}},H={minHeight:"100vh",background:"url('".concat("/HomePage","/blue_ocean.jpeg') no-repeat center center fixed"),backgroundSize:"cover"},D=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={beachLoaded:!1,chat:[r.a.createElement(k,{avatar:"".concat("/HomePage","/profile.jpg"),content:"Hello there, my name is Marshall. I'm an experienced Full Stack Developer",key:0})]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;[{name:"beachLoaded",src:"".concat("/HomePage","/blue_ocean.jpeg")}].forEach((function(t){var a=new Image;a.src=t.src;var n={};n[t.name]=!0,a.onerror=function(t){e.setState(n)},a.onload=function(t){e.setState(n)},e.renderFollowUp('Ask me about my "Skills", or "Resume"',1e3)}))}},{key:"renderFollowUp",value:function(e,t,a){var n=this;setTimeout((function(){n.updateChat(e,!0)}),t),a&&setTimeout((function(){n.addContent(a)}),3e3)}},{key:"addContent",value:function(e){this.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{chat:[].concat(Object(u.a)(t.chat),[e])})}))}},{key:"updateChat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="".concat("/HomePage",t?"/profile.jpg":"/avatar-ph.png");if(this.setState((function(n){return Object(m.a)(Object(m.a)({},n),{},{chat:[].concat(Object(u.a)(n.chat),[r.a.createElement(k,{reverse:!t,avatar:a,content:e,key:n.chat.length})])})})),!t){var n=this.generateResponse(e);this.renderFollowUp(n.text,1e3,n.comp)}}},{key:"generateResponse",value:function(e){var t=I.getIntent(e);return"skills"===t?{text:"Let me get a list of Marshall's skills for you",comp:r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Tech",subTitle:"A few things I have been known to use"}),r.a.createElement(v,null))}:"resume"===t?{text:"I'll pull up that resume for you, one moment...",comp:r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Resume",subTitle:"recent work experience + education"}),r.a.createElement(R,null))}:"contact"===t?{text:'Great! You can reach out at any time via email at Marshall.Rattai@gmail.com, excited to hear from you."'}:{text:'Appologies, My functionality is very limited at the moment, please enter one of the following key words: "Skills", "Resume", or "Contact"'}}},{key:"render",value:function(){var e=this;return this.state.beachLoaded?r.a.createElement("div",{style:H},r.a.createElement(x,{title:"Marshall Yukio Rattai",subTitle:"Software Engineer"}),r.a.createElement(P,{chat:this.state.chat}),r.a.createElement(N,{onSubmit:function(t){e.updateChat(t)}})):null}}]),a}(r.a.Component),A=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(D,null)}}]),a}(n.Component);a(17);Object(o.render)(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.d9fbb165.chunk.js.map