(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){},136:function(e,a,t){},162:function(e,a,t){},219:function(e,a,t){},268:function(e,a,t){t(269),e.exports=t(514)},269:function(e,a,t){},278:function(e,a,t){},379:function(e,a,t){},380:function(e,a,t){},381:function(e,a,t){},382:function(e,a,t){},383:function(e,a,t){},384:function(e,a,t){},437:function(e,a,t){},438:function(e,a,t){},439:function(e,a,t){},440:function(e,a,t){},441:function(e,a,t){},442:function(e,a,t){},488:function(e,a,t){},489:function(e,a,t){},490:function(e,a,t){},491:function(e,a,t){},492:function(e,a,t){},493:function(e,a,t){},494:function(e,a,t){},495:function(e,a,t){},496:function(e,a,t){},514:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(41),l=t(15),c=t(17),i=t(19),s=t(2),u=t.n(s),m=(t(278),function(){return r.a.createElement("div",{className:"home-page-header"},r.a.createElement("h1",{className:"home-page-header-title"},r.a.createElement(c.b,{to:"/"},"Undefined::Role-Play")))}),d=t(529),p=t(524),f=t(528),g=t(523),E=function(e){var a=e.type,t=e.placeholder,n=e.name,o=e.value,l=e.changeValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{name:n,value:o,type:a,placeholder:t,onChange:function(e){l(e.target.value,n)}}))};E.propTypes={type:u.a.string,placeholder:u.a.string,value:u.a.string,name:u.a.string.isRequired,changeValue:u.a.func.isRequired},E.defaultProps={type:"text",placeholder:"",value:""};var b=E,h=(t(162),function(e){var a=e.email,t=e.password,n=e.changeValue,o=e.login,l=e.logged,i=e.loading;return r.a.createElement("div",{className:"login"},!l&&r.a.createElement(d.a,{className:"center aligned login-form"},r.a.createElement(p.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),o()}},r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"E-mail"),r.a.createElement(b,{type:"email",placeholder:"Email",name:"email",changeValue:n,value:a})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Mot de passe"),r.a.createElement(b,{type:"password",placeholder:"Mot de passe",name:"password",changeValue:n,value:t})),r.a.createElement(f.a,{color:"black",type:"submit",className:"center aligned"},"Connectez-vous !"))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{active:!0,inline:"centered"})),l&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Vous êtes connecté !"),r.a.createElement(c.b,{to:"/room"},"Allez sur la chatroom."),r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("p",null,">Allez sur votre dashboard."))))});h.propTypes={email:u.a.string.isRequired,password:u.a.string.isRequired,changeValue:u.a.func.isRequired,logged:u.a.bool.isRequired,loading:u.a.bool,login:u.a.func.isRequired},h.defaultProps={loading:!1};var v=h,O=function(e){return{type:"SAVE_USER",currentUser:e}},y=function(e,a){return{type:"CHANGE_VALUE",name:e,value:a}},N=Object(l.b)((function(e){return{email:e.user.email,password:e.user.password,logged:e.user.logged,loading:e.user.loading}}),(function(e){return{changeValue:function(a,t){var n=y(t,a);e(n)},login:function(){e({type:"LOGIN"})}}}))(v),w=function(){return r.a.createElement("div",{className:"register-avatar"},r.a.createElement("img",{src:"https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/33/339497/gris-pc-switch-f52131b4__220_220__0-0-1440-1440.jpg",size:"small",alt:"preview uploaded avatar",className:"register-avatar-preview",name:"icon"}))},j=function(e){var a=e.regEmail,t=e.regPassword,n=e.regPseudo,o=e.changeValue,l=e.register,i=e.loading,s=e.userRegistered;return r.a.createElement("div",{className:"register"},!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(d.a,{className:"center aligned register-form"},r.a.createElement(p.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),l()}},r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Pseudonyme"),r.a.createElement(b,{type:"text",placeholder:"Pseudo",name:"regPseudo",changeValue:o,value:n})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"E-mail"),r.a.createElement(b,{type:"email",placeholder:"Email",name:"regEmail",changeValue:o,value:a})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Mot de passe"),r.a.createElement(b,{type:"password",placeholder:"Mot de passe",name:"regPassword",changeValue:o,value:t})),r.a.createElement(f.a,{color:"black",type:"submit",className:"center aligned"},"Enregistrez-vous !")))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{active:!0,inline:"centered"})),s&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Enregistré!"),r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("p",null,"Allez sur votre profil."))))};j.propTypes={regEmail:u.a.string.isRequired,regPassword:u.a.string.isRequired,regPseudo:u.a.string.isRequired,changeValue:u.a.func.isRequired,loading:u.a.bool.isRequired,userRegistered:u.a.bool.isRequired,register:u.a.func.isRequired};var R=j,P=Object(l.b)((function(e){return{regEmail:e.user.regEmail,regPassword:e.user.regPassword,regPseudo:e.user.regPseudo,loading:e.user.loading,userRegistered:e.user.userRegistered}}),(function(e){return{changeValue:function(a,t){var n=y(t,a);e(n)},register:function(){e({type:"REGISTER"})}}}))(R),C=(t(379),function(){return r.a.createElement("div",{className:"homepage-navbutton"},r.a.createElement("button",{type:"button",className:" homepage-navbutton-login"},r.a.createElement(c.b,{to:"/login"},"Login")),r.a.createElement("button",{type:"button",className:"homepage-navbutton-register"},r.a.createElement(c.b,{to:"/register"},"Register")))}),k=function(){return r.a.createElement("div",{className:"carousel-menu"},r.a.createElement("ul",{className:"carousel-menu-list"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/demonstration"},"Démo")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Présentation")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/team"},"Team"))))},q=(t(380),function(e){var a=e.logged;return console.log(a),r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(C,null),r.a.createElement(k,null))});q.propTypes={logged:u.a.bool.isRequired},q.propTypes={logged:u.a.bool.isRequired};var x=q,T=Object(l.b)((function(e){return{logged:e.user.logged}}),null)(x),_=(t(136),function(){return r.a.createElement("div",null,"Presentation")}),D=function(){return r.a.createElement("div",null,"Demonstration")},S="https://pbs.twimg.com/profile_images/1028408684559458304/uE0XdKkL.jpg",I=function(){return r.a.createElement("div",{className:"carousel-show-team"},r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"carousel-show-img",src:S,alt:"avatar"}),r.a.createElement("div",{className:"text"},"Te eum doming eirmod, nominati pertinacia argumentum ad his.")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"carousel-show-img",src:S,alt:"avatar"}),r.a.createElement("div",{className:"text"},"Te eum doming eirmod, nominati pertinacia argumentum ad his.")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"carousel-show-img",src:S,alt:"avatar"}),r.a.createElement("div",{className:"text"},"Te eum doming eirmod, nominati pertinacia argumentum ad his.")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"carousel-show-img",src:S,alt:"avatar"}),r.a.createElement("div",{className:"text"},"Te eum doming eirmod, nominati pertinacia argumentum ad his.")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"carousel-show-img",src:S,alt:"avatar"}),r.a.createElement("div",{className:"text"},"Te eum doming eirmod, nominati pertinacia argumentum ad his.")))},L=t.p+"images/ab6fdb73eab409b801c48297fd1df089.png",A=(t(381),function(){return r.a.createElement("div",{className:"raindrop-animation"},r.a.createElement("div",{className:"raindrop1"},r.a.createElement("img",{src:L,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop2"},r.a.createElement("img",{src:L,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop3"},r.a.createElement("img",{src:L,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop4"},r.a.createElement("img",{src:L,alt:"black raindrop"})))}),V=t(248),F=t.p+"images/dd8d94527cacd47f71e73288f3236db7.png",G=t.p+"images/50a896229980886256ebb2527d6aeb36.svg",H=(t(382),function(e){var a=e.toggleOpen,t=e.open,n=e.handleLogout,o=e.id;return r.a.createElement("div",{className:"connected-home-header"},r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("div",{className:"home-button"},r.a.createElement("img",{src:G,alt:"home"}))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"dropdown-button"},r.a.createElement(V.a,{Active:t,burger:"spring",hoverOpacity:1,color:"#000000",scale:.8,onClick:a})),r.a.createElement("div",{className:t?"dropdown-content dropdown-content--open":"dropdown-content"},r.a.createElement("div",{className:"dropdown-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/",onClick:n},"Se déconnecter")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/dashboard/user/".concat(o,"/edit"),onClick:a},"Modifier son profil")))))),r.a.createElement("div",{className:"connected-home-title"},r.a.createElement("img",{src:F,alt:"black paint"}),r.a.createElement("h1",null,"UNDEFINED::ROLE PLAY")))});H.propTypes={toggleOpen:u.a.func.isRequired,open:u.a.bool.isRequired,id:u.a.number.isRequired,handleLogout:u.a.func.isRequired};var U=H,M=Object(l.b)((function(e){return{open:e.reducer.open,logged:e.reducer.logged,id:e.user.id}}),(function(e){return{toggleOpen:function(){var a;e({type:"TOGGLE_OPEN",value:a})},handleLogout:function(){e({type:"LOGOUT"})}}}))(U),z=(t(383),function(e){var a=e.changeIconFile,t=e.changeIconUrl,o=e.email,l=e.password,c=e.pseudo,i=e.icon,s=e.iconFile,u=e.imgURL,m=e.changeValue,d=e.sendEditedDatas,g=e.fetchIcon,E=e.sendIcon;Object(n.useEffect)(g,[]);return r.a.createElement("div",{className:"edit-profile-section"},r.a.createElement("div",{className:"edit-profile-section-title"},r.a.createElement("p",null,"Modifier vos informations")),r.a.createElement("div",{className:"edit-profile-avatar"},r.a.createElement("input",{type:"file",name:"iconFile",className:"avatar-choice-input",onChange:function(e){console.log("---- je récupère le nom du fichier sélectionné par le user ----"),e.preventDefault(),console.log(e.target.files[0]);var n=URL.createObjectURL(e.target.files[0]),r=e.target.files[0];t(n),a(r),E()}}),r.a.createElement("div",{className:"avatar-preview"},u?r.a.createElement("img",{className:"avatar",src:u,alt:"unknown"}):r.a.createElement("img",{className:"avatar",src:i,alt:"unknown"}))),r.a.createElement("div",{className:"edit-profile-form"},r.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),console.log("---- je veux envoyer les nouvelles infos du profil au serveur email : "+o+" pseudo : "+c+" file : "+s),d()}},r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"email",className:"edit-profile-form-label"},"Email",r.a.createElement(b,{className:"edit-profile-form-input",type:"email",placeholder:"Email",name:"email",changeValue:m,value:o}))),r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"password",className:"edit-profile-form-label"},"Mot de passe",r.a.createElement(b,{type:"password",placeholder:"Mot de passe",name:"password",changeValue:m,value:l}))),r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"password-confirm",className:"edit-profile-form-label"},"Confirmer le mot de passe",r.a.createElement(b,{className:"edit-profile-form-input",type:"password",placeholder:"Mot de passe",name:"password",changeValue:m,value:l}))),r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"pseudo",className:"edit-profile-form-label"},"Pseudo",r.a.createElement(b,{className:"edit-profile-form-input",type:"text",placeholder:"Pseudo",name:"pseudo",changeValue:m,value:c}))),r.a.createElement(f.a,{type:"submit"},"Valider"))))});z.propTypes={email:u.a.string.isRequired,pseudo:u.a.string.isRequired,icon:u.a.string.isRequired,iconFile:u.a.object.isRequired,imgURL:u.a.string.isRequired,password:u.a.string,changeIconFile:u.a.func.isRequired,changeIconUrl:u.a.func.isRequired,changeValue:u.a.func.isRequired,sendEditedDatas:u.a.func.isRequired,fetchIcon:u.a.func.isRequired,sendIcon:u.a.func.isRequired},z.defaultProps={password:""};var B=z,W=Object(l.b)((function(e){return{email:e.user.email,password:e.user.password,pseudo:e.user.pseudo,icon:e.upload.icon,id:e.user.id,iconFile:e.upload.iconFile,imgURL:e.upload.imgURL}}),(function(e){return{changeIconFile:function(a){var t=function(e){return{type:"CHANGE_ICON_FILE",iconFile:e}}(a);e(t)},changeIconUrl:function(a){var t=function(e){return{type:"CHANGE_ICON_URL",imgURL:e}}(a);e(t)},changeValue:function(a,t){var n=y(t,a);e(n)},sendIcon:function(){e({type:"SEND_ICON"})},fetchIcon:function(){e({type:"FETCH_ICON"})}}}))(B),X=t(525),J=t(527),K=(t(384),function(e){var a=e.changeValue,t=e.handleDropdown,n=e.roomName,o=e.playersNb,l=e.createRoom;return r.a.createElement(X.a,{className:"create-room-modal",trigger:r.a.createElement("div",{className:"create-room-button"},"Créer une room")},r.a.createElement(X.a.Header,null,"Créer une salle de jeu"),r.a.createElement(X.a.Content,{image:!0},r.a.createElement(X.a.Description,null,r.a.createElement("form",{className:"ui form",onSubmit:function(e){console.log("je lance la requête de création de room"),e.preventDefault(),l()}},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"room-name"},"Choisissez un nom pour votre salle"),r.a.createElement(b,{className:"create-room-form-input",type:"text",placeholder:"Nom de la salle",name:"roomName",changeValue:a,value:n})),r.a.createElement(J.a,{onChange:function(e,a){t(a.value)},options:[{key:1,text:"1",value:1},{key:2,text:"2",value:2},{key:3,text:"3",value:3},{key:4,text:"4",value:4}],placeholder:"Indiquez le nombre de joueurs",selection:!0,value:o}),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"ui button create-room-submit",type:"submit"},"Créer la salle"))))))});K.propTypes={changeValue:u.a.func.isRequired,playersNb:u.a.number,roomName:u.a.string.isRequired,handleDropdown:u.a.func.isRequired,createRoom:u.a.func.isRequired},K.defaultProps={playersNb:0};var Y=K,$=Object(l.b)((function(e){return{roomName:e.room.roomName,playersNb:e.room.playersNb}}),(function(e){return{changeValue:function(a,t){var n=y(t,a);e(n)},handleDropdown:function(a){var t=function(e){return{type:"DROPDOWN_CHANGE",selectedValue:e}}(a);e(t)},createRoom:function(){e({type:"CREATE_ROOM"})}}}))(Y),Q=(t(437),function(){return r.a.createElement(X.a,{className:"join-room-modal",trigger:r.a.createElement("div",{className:"join-room-button"},"Rejoindre une room")},r.a.createElement(X.a.Header,null,"Rejoindre une salle de jeu"),r.a.createElement(X.a.Content,{image:!0},r.a.createElement(X.a.Description,null,r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"room-name"},"Rejoindre :"),r.a.createElement("input",{type:"text",name:"room-name",placeholder:"Indiquez le nom de la salle"})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"ui button join-room-submit",type:"submit"},"Rejoindre la salle"))))))}),Z=(t(438),function(){return r.a.createElement("div",{className:"navbar-menu"},r.a.createElement($,null),r.a.createElement(Q,null))}),ee=(t(439),function(){return r.a.createElement("div",{className:"connected-home-message"},r.a.createElement("div",{className:"connected-home-message-border"},r.a.createElement("div",{className:"dashboard-content"},r.a.createElement("h2",{className:"connected-home-message-title"},"Bienvenu(e) sur votre tableau de bord"),r.a.createElement("p",{className:"connected-home-message-content"},"Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor... Hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor..."))))}),ae=(t(440),function(e){var a=e.logged,t=e.loading;return r.a.createElement("div",{className:"connected-home"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/dashboard"},r.a.createElement(M,null),r.a.createElement(A,null),r.a.createElement(ee,null),r.a.createElement(Z,null)),r.a.createElement(i.b,{exact:!0,path:"/dashboard/user/:userId/edit"},r.a.createElement(M,null),r.a.createElement(W,null))),a||t?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(i.a,{to:"/"}))});ae.propTypes={logged:u.a.bool.isRequired,loading:u.a.bool.isRequired};var te=ae,ne=Object(l.b)((function(e){return{logged:e.user.logged,loading:e.user.loading,id:e.user.id}}),(function(e){return{}}))(te),re=t(71),oe=function(){return r.a.createElement("div",{className:"playersMenu"},r.a.createElement(c.b,{to:"/players-list"},r.a.createElement(re.a,{name:"users",size:"large"})))},le=(t(219),function(){return r.a.createElement("div",{className:"playersMenu"},r.a.createElement(re.a,{name:"chevron down",size:"large"}))}),ce=function(e){var a=e.roomName;return r.a.createElement("div",{className:"navBarRoom"},r.a.createElement(oe,null),r.a.createElement("div",{className:"navBarRoom-title"},r.a.createElement("h1",null,a)),r.a.createElement(le,null))};ce.propTypes={roomName:u.a.string.isRequired};var ie=ce,se=Object(l.b)((function(e){return{roomName:e.room.roomName}}),(function(){return{}}))(ie),ue=(t(441),t.p+"images/6a1a4a08818360c96bebd1431b932cfd.jpg"),me=function(){return r.a.createElement("div",{className:"shared-view"},r.a.createElement("img",{src:ue,alt:"shared screen",className:"shared-view-img"}))},de=(t(442),function(e){var a=e.chatOpen,t=e.toggleOpenChat;return console.log(a),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("button",{type:"button",onClick:t,className:"chatroom-button--open"},"x"):r.a.createElement("button",{type:"button",onClick:t,className:a?"chatroom-button--open":"chatroom-button"},"+"))});de.propTypes={chatOpen:u.a.bool.isRequired,toggleOpenChat:u.a.func.isRequired};var pe=de,fe=Object(l.b)((function(e){return{chatOpen:e.room.chatOpen}}),(function(e){return{toggleOpenChat:function(){e({type:"TOGGLE_OPEN_CHAT"})}}}))(pe),ge=t(81),Ee=t(257),be=t.n(Ee),he=(t(109),function(e){var a=e.author,t=e.content;return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-author"},a),r.a.createElement("p",{className:"message-content"},t))});he.propTypes={author:u.a.string.isRequired,content:u.a.string.isRequired};var ve=he;function Oe(){return(Oe=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var ye=function(e){var a=e.chatMessages,t=Object(ge.css)({height:600});return r.a.createElement("div",{className:"messages"},r.a.createElement(be.a,{className:t},a.map((function(e){return r.a.createElement(ve,Oe({key:e.id},e))}))))};ye.propTypes={chatMessages:u.a.arrayOf(u.a.shape({id:u.a.number.isRequired})).isRequired};var Ne=ye,we=Object(l.b)((function(e){return{chatMessages:e.room.chatMessages}}),null)(Ne),je=function(e){var a=e.sendMessage,t=e.inputValue,n=e.changeText;return r.a.createElement("div",null,r.a.createElement("form",{className:"chatroom-form",onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement("input",{className:"chatroom-field",type:"text",placeholder:"Veuillez saisir un message...",onChange:function(e){n(e.target.value)},value:t}),r.a.createElement("button",{type:"submit",className:"chatroom-send"},r.a.createElement(re.a,{name:"send",size:"large"}))))};je.propTypes={sendMessage:u.a.func.isRequired,inputValue:u.a.string.isRequired,changeText:u.a.func.isRequired};var Re=je,Pe=Object(l.b)((function(e){return{inputValue:e.room.text}}),(function(e){return{sendMessage:function(){e({type:"SEND_MESSAGE"})},changeText:function(a){var t=function(e){return{type:"CHANGE_TEXT",payload:e}}(a);e(t)}}}))(Re),Ce=function(e){var a=e.webSocketConnect,t=e.chatOpen;return Object(n.useEffect)(a,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t?"chatroom chatroom--open":"chatroom"},r.a.createElement(we,null),r.a.createElement(Pe,null)))};Ce.propTypes={webSocketConnect:u.a.func.isRequired,chatOpen:u.a.bool.isRequired};var ke=Ce,qe=Object(l.b)((function(e){return{chatOpen:e.room.chatOpen}}),(function(e){return{webSocketConnect:function(){e({type:"WS_CONNECT"})},toggleOpenChat:function(){e({type:"TOGGLE_OPEN_CHAT"})}}}))(ke),xe=(t(488),function(){return r.a.createElement("div",null,"DicesHistory")}),Te=(t(489),function(e){e.t;return r.a.createElement("div",{className:"dices"},r.a.createElement("div",{className:"dices-result"}),r.a.createElement("button",{label:"button",type:"button",className:"dices-throw"},"Throw it!"))}),_e=Object(l.b)((function(e){return{}}),(function(e){return{}}))(Te),De=(t(490),function(){return r.a.createElement("div",{className:"player-notes"},r.a.createElement("div",{className:"player-notes-notes"},"Player Notes"),r.a.createElement("input",{type:"text"}))}),Se=(t(491),function(e){var a=e.pseudo,t=e.icon;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player-pseudo"},a),r.a.createElement("div",{className:"player-icon"},r.a.createElement("img",{src:t,alt:"avatar"})))});Se.propTypes={pseudo:u.a.string.isRequired,icon:u.a.string.isRequired};var Ie=Se;t(492);function Le(){return(Le=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Ae=function(e){var a=e.playersList;return r.a.createElement("div",{className:"players-list"},a.map((function(e){return r.a.createElement(Ie,Le({key:e.id},e))})))};Ae.propTypes={playersList:u.a.arrayOf(u.a.shape({id:u.a.number.isRequired}).isRequired).isRequired};var Ve=Ae,Fe=Object(l.b)((function(e){return{playersList:e.room.playersList}}),(function(){return{}}))(Ve),Ge=(t(493),function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"shared-files"},r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"book",size:"huge"}))))}),He=(t(494),function(e){var a=e.toggleOpenBook;return r.a.createElement("div",{className:"toolsMenu"},r.a.createElement("ul",{className:"toolsMenu-list"},r.a.createElement("button",{type:"button",onClick:a},"Book"),r.a.createElement("li",null,r.a.createElement(re.a,{onClick:a,name:"book",size:"large"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"edit",size:"large"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"bomb",size:"large"})),r.a.createElement("li",null,r.a.createElement(re.a,{name:"bomb",size:"large"})),r.a.createElement("li",null,r.a.createElement(re.a,{disabled:!0,name:"picture",size:"large"}))))});He.propTypes={toogleOpenBook:u.a.func.isRequired};var Ue=He,Me=Object(l.b)((function(e){return{bookOpen:e.room.bookOpen}}),(function(e){return{toggleOpenBook:function(){e({type:"TOGGLE_OPEN_BOOK"})}}}))(Ue),ze=(t(495),function(){return r.a.createElement("div",{className:"static-room"},r.a.createElement(se,null),r.a.createElement(me,null),r.a.createElement(fe,null),r.a.createElement(qe,null),r.a.createElement(_e,null),r.a.createElement(xe,null),r.a.createElement(De,null),r.a.createElement(Fe,null),r.a.createElement(Ge,null),r.a.createElement(me,null),r.a.createElement(Me,null))}),Be=(t(496),function(e){var a=e.id;return r.a.createElement("div",{className:"app"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(T,null),r.a.createElement("div",{className:"homeDisplay"},r.a.createElement("div",{className:"carousel-show"},r.a.createElement(_,null)))),r.a.createElement(i.b,{path:"/demonstration",exact:!0},r.a.createElement(T,null),r.a.createElement("div",{className:"homeDisplay"},r.a.createElement("div",{className:"carousel-show"},r.a.createElement(D,null)))),r.a.createElement(i.b,{path:"/team",exact:!0},r.a.createElement(T,null),r.a.createElement("div",{className:"homeDisplay"},r.a.createElement("div",{className:"carousel-show"},r.a.createElement(I,null)))),r.a.createElement(i.b,{path:"/login",exact:!0},r.a.createElement(T,null),r.a.createElement("div",{className:"homeDisplay"},r.a.createElement(N,null))),r.a.createElement(i.b,{path:"/register",exact:!0},r.a.createElement(T,null),r.a.createElement("div",{className:"homeDisplay"},r.a.createElement(P,null))),r.a.createElement(i.b,{path:"/dashboard",exact:!0},r.a.createElement(ne,null)),r.a.createElement(i.b,{path:"/dashboard/user/".concat(a,"/edit"),exact:!0},r.a.createElement(W,null)),r.a.createElement(i.b,{path:"/room",exact:!0},r.a.createElement(ze,null),r.a.createElement("div",{className:"displayTools"},r.a.createElement("p",null,"Utilisez le menu ci-dessus pour accéder à vos outils de jeu")))))});Be.propTypes={id:u.a.number.isRequired};var We=Be,Xe=Object(l.b)((function(e){return{id:e.user.id}}),(function(e){return{}}))(We),Je=t(49);function Ke(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Ye(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ke(Object(t),!0).forEach((function(a){$e(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ke(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function $e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var Qe={currentUser:[],email:"",password:"",pseudo:"Undefined",id:0,icon:"",logged:!1,open:!1,roomName:"",roomId:"",playersNb:0,loading:!1,userRegistered:!1,regPassword:"",regEmail:"",regPseudo:"",regIcon:""},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"TOGGLE_OPEN":return Ye(Ye({},e),{},{open:!e.open});case"CHANGE_VALUE":return Ye(Ye({},e),{},$e({},a.name,a.value));case"DROPDOWN_CHANGE":return Ye(Ye({},e),{},{playersNb:a.selectedValue});case"LOGIN":return Ye({},e);case"REGISTER":return Ye(Ye({},e),{},{userRegistered:!0,logged:!0});case"LOGOUT":return Ye(Ye({},e),{},{logged:!1,email:"",password:"",pseudo:"",id:0,icon:""});case"LOADING":return Ye(Ye({},e),{},{loading:!1});case"CONNECT":case"CHECK":return Ye(Ye({},e),{},{logged:!0});case"SAVE_USER":return Ye(Ye({},e),{},{pseudo:a.currentUser.pseudo,id:a.currentUser.id,icon:a.currentUser.icon});default:return e}};function ea(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function aa(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ea(Object(t),!0).forEach((function(a){ta(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ea(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function ta(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var na={open:!1,roomName:"",playersNb:0},ra=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:na,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"TOGGLE_OPEN":return aa(aa({},e),{},{open:!e.open});case"DROPDOWN_CHANGE":return aa(aa({},e),{},{playersNb:a.selectedValue});default:return e}};function oa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function la(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?oa(Object(t),!0).forEach((function(a){ca(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oa(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function ca(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var ia={icon:"",iconFile:{},imgURL:""},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ia,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_ICON_FILE":return la(la({},e),{},{iconFile:a.iconFile});case"CHANGE_ICON_URL":return la(la({},e),{},{imgURL:a.imgURL});case"SEND_ICON":return la({},e);case"SAVE_ICON":return la(la({},e),{},{icon:a.icon});default:return e}};function ua(e){return function(e){if(Array.isArray(e))return ma(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return ma(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ma(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ma(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function da(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function pa(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?da(Object(t),!0).forEach((function(a){fa(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):da(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function fa(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var ga={open:!1,chatOpen:!1,bookOpen:!1,logged:!1,roomName:"",roomId:0,playersNb:0,playersList:[{pseudo:"Groot",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:7},{pseudo:"Rocket",icon:"https://figurinepop.com/public/2019/11/rocketholiday1_1.jpg",id:8},{pseudo:"Alphonse",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:9},{pseudo:"Patrick",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:10},{pseudo:"JeanMi",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:11},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:12},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:13},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:14},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:15},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:16}],text:"",chatMessages:[{author:"",content:"",id:0}]},Ea=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CREATE_ROOM":return pa(pa({},e),{},{roomName:a.roomName,playersNb:a.playersNb});case"SAVE_ROOM":return pa(pa({},e),{},{roomId:a.roomId});case"RECEIVE_MESSAGE":var t=ua(e.chatMessages),n=pa({},a.chatMessage);return t.push(n),pa(pa({},e),{},{chatMessages:t,text:""});case"CHANGE_TEXT":return pa(pa({},e),{},{text:a.payload});case"TOGGLE_OPEN_CHAT":return pa(pa({},e),{},{chatOpen:!e.chatOpen});case"CHANGE_VALUE":return pa(pa({},e),{},{roomName:a.value});case"DROPDOWN_CHANGE":return pa(pa({},e),{},{playersNb:a.selectedValue});default:return e}};function ba(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ha(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ba(Object(t),!0).forEach((function(a){va(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ba(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function va(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var Oa={values:[{success:!0,dice:[{value:4,type:"d6"}]}]},ya=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oa,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"DISPLAY_RESULT":return ha(ha({},e),{},{values:a.values});default:return e}},Na=Object(Je.c)({reducer:ra,user:Ze,upload:sa,room:Ea,dices:ya}),wa=t(37),ja=t.n(wa),Ra="https://undefined-project.tk/api",Pa=function(e){return function(a){return function(t){switch(t.type){case"LOGIN":var n=e.getState();ja.a.post("".concat(Ra,"/login_check"),{email:n.user.email,password:n.user.password},{withCredentials:!0}).then((function(a){console.log(a.data);var t=O(a.data);e.dispatch(t),e.dispatch({type:"CONNECT"})})).catch((function(e){console.error(e)})),a(t);break;case"REGISTER":var r=e.getState();ja.a.post("".concat(Ra,"/register"),{email:r.user.regEmail,password:r.user.regPassword,pseudo:r.user.regPseudo}).then((function(a){if(a.data){console.log(a);var t=O(a.data);e.dispatch(t),e.dispatch({type:"CONNECT"})}})).catch((function(e){console.error(e)})).finally((function(){e.dispatch({type:"LOADING"})})),a(t);break;case"LOGOUT":console.log("je me déconnecte"),ja.a.get("".concat(Ra,"/logout"),{withCredentials:!0}),a(t);break;default:a(t)}}}},Ca=function(e){return function(e){return function(a){a.type,e(a)}}},ka=function(e){return function(a){return function(t){switch(t.type){case"CREATE_ROOM":console.log("je crée une room");var n=e.getState();ja.a.post("".concat("https://undefined-project.tk/api","/room/add"),{name:n.room.roomName,player_number:n.room.playersNb,theme:"default",game_master:n.user.id},{withCredentials:!0}).then((function(a){console.log(a.data);var t={type:"SAVE_ROOM",roomId:a.data};e.dispatch(t)})).catch((function(e){console.error(e)})),a(t);break;default:a(t)}}}},qa=function(e){return function(a){return function(t){switch(t.type){case"FETCH_ICON":var n=e.getState().user.id;console.log("++++ je récupère l'icon du user selon son id ++++"),ja.a.get("".concat("https://undefined-project.tk/api","/user/").concat(n,"/icon"),{},{withCredentials:!0}).then((function(a){var t=new Blob([a.data]),n=URL.createObjectURL(t);console.log("--- url vaut --- "+n);var r={type:"SAVE_ICON",icon:n};e.dispatch(r)})).catch((function(e){console.log(e)})),a(t);break;case"SEND_ICON":var r=e.getState(),o=r.user.id;console.log("++++ iconFile dans le middleware upload ++++"+r.upload.iconFile),console.log("++++ requête : j'envoie les données modifiées au serveur ++++"),ja.a.post("".concat("https://undefined-project.tk/api","/user/").concat(o,"/icon"),{icon:r.upload.iconFile},{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),a(t);break;default:a(t)}}}},xa=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je.d)(Object(Je.a)(Pa,Ca,ka,qa)),Ta=Object(Je.e)(Na,xa),_a=r.a.createElement(l.a,{store:Ta},r.a.createElement(c.a,null,r.a.createElement(Xe,null))),Da=document.getElementById("root");Object(o.render)(_a,Da)}},[[268,1,2]]]);