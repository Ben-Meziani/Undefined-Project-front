(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},161:function(e,t,a){},218:function(e,t,a){},267:function(e,t,a){a(268),e.exports=a(515)},268:function(e,t,a){},277:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},438:function(e,t,a){},439:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){},489:function(e,t,a){},490:function(e,t,a){},491:function(e,t,a){},492:function(e,t,a){},493:function(e,t,a){},494:function(e,t,a){},495:function(e,t,a){},496:function(e,t,a){},497:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),c=a(9),l=a(18),i=a(19),u=a(2),s=a.n(u),m=(a(277),function(){return r.a.createElement("div",{className:"homePage-header"},r.a.createElement("h1",{className:"homePage-header-title"},r.a.createElement(l.b,{to:"/"},"Undefined::Role-Play")))}),d=a(530),p=a(525),f=a(529),g=a(524),E=function(e){var t=e.type,a=e.placeholder,n=e.name,o=e.value,c=e.changeValue;return r.a.createElement("div",{className:"homePage-Field"},r.a.createElement("input",{name:n,value:o,type:t,placeholder:a,onChange:function(e){c(e.target.value,n)}}))};E.propTypes={type:s.a.string,placeholder:s.a.string,value:s.a.string,name:s.a.string.isRequired,changeValue:s.a.func.isRequired},E.defaultProps={type:"text",placeholder:"",value:""};var b=E,O=(a(161),function(e){var t=e.email,a=e.password,n=e.changeValue,o=e.login,c=e.logged,i=e.loading;return r.a.createElement("div",{className:"login"},!c&&r.a.createElement(d.a,{className:"center aligned login-form"},r.a.createElement(p.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),o()}},r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"E-mail"),r.a.createElement(b,{type:"email",placeholder:"Email",name:"email",changeValue:n,value:t})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Mot de passe"),r.a.createElement(b,{type:"password",placeholder:"Mot de passe",name:"password",changeValue:n,value:a})),r.a.createElement(f.a,{color:"black",type:"submit"},"Connectez-vous !"))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{active:!0,inline:"centered"})),c&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Vous êtes connecté !"),r.a.createElement(l.b,{to:"/room"},"Allez sur la chatroom."),r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("p",null,">Allez sur votre dashboard."))))});O.propTypes={email:s.a.string.isRequired,password:s.a.string.isRequired,changeValue:s.a.func.isRequired,logged:s.a.bool.isRequired,loading:s.a.bool,login:s.a.func.isRequired},O.defaultProps={loading:!1};var h=O,v=function(e){return{type:"SAVE_USER",currentUser:e}},y=function(e,t){return{type:"CHANGE_VALUE",name:e,value:t}},N=Object(c.b)((function(e){return{email:e.user.email,password:e.user.password,logged:e.user.logged,loading:e.user.loading}}),(function(e){return{changeValue:function(t,a){var n=y(a,t);e(n)},login:function(){e({type:"LOGIN"})}}}))(h),R=function(e){var t=e.regEmail,a=e.regPassword,n=e.regPseudo,o=e.changeValue,c=e.register,i=e.loading,u=e.userRegistered,s=e.logged;return r.a.createElement("div",{className:"register"},!u&&!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),c()}},r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Pseudonyme"),r.a.createElement(b,{type:"text",placeholder:"Pseudo",name:"regPseudo",changeValue:o,value:n})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"E-mail"),r.a.createElement(b,{type:"email",placeholder:"Email",name:"regEmail",changeValue:o,value:t})),r.a.createElement(p.a.Field,{required:!0},r.a.createElement("label",null,"Mot de passe"),r.a.createElement(b,{type:"password",placeholder:"Mot de passe",name:"regPassword",changeValue:o,value:a})),r.a.createElement(f.a,{color:"black",type:"submit"},"Enregistrez-vous !"))),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{active:!0,inline:"centered"})),u&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Enregistré!"),r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("p",null,"Allez sur votre profil."))),s&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Vous êtes connecté."),r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("p",null,"Allez sur votre profil."))))};R.propTypes={regEmail:s.a.string.isRequired,regPassword:s.a.string.isRequired,regPseudo:s.a.string.isRequired,changeValue:s.a.func.isRequired,loading:s.a.bool.isRequired,userRegistered:s.a.bool.isRequired,register:s.a.func.isRequired,logged:s.a.bool.isRequired};var w=R,P=Object(c.b)((function(e){return{regEmail:e.user.regEmail,regPassword:e.user.regPassword,regPseudo:e.user.regPseudo,loading:e.user.loading,userRegistered:e.user.userRegistered,logged:e.user.logged}}),(function(e){return{changeValue:function(t,a){var n=y(a,t);e(n)},register:function(){e({type:"REGISTER"})}}}))(w),j=(a(378),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/login"},r.a.createElement("button",{type:"button",className:" homepage-navbutton-login"},"Login")),r.a.createElement(l.b,{to:"/register"},r.a.createElement("button",{type:"button",className:"homepage-navbutton-register"},"Register")))}),_=(a(379),function(){return r.a.createElement(r.a.Fragment,null,"Presentation")}),k=a.p+"images/ab6fdb73eab409b801c48297fd1df089.png",C=(a(380),function(){return r.a.createElement("div",{className:"raindrop-animation"},r.a.createElement("div",{className:"raindrop1"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop2"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop3"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop4"},r.a.createElement("img",{src:k,alt:"black raindrop"})))}),T=(a(381),function(e){var t=e.logged;return console.log(t),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement("div",{className:"homePage"},r.a.createElement(m,null),r.a.createElement("div",{className:"homePage-rain"},r.a.createElement(C,null)),r.a.createElement("div",{className:"homePage-container"},r.a.createElement("div",{className:"homePage-buttons"},r.a.createElement(j,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"homePage-display"},r.a.createElement(_,null)))))),r.a.createElement(i.b,{path:"/login",exact:!0},r.a.createElement("div",{className:"homePage"},r.a.createElement(m,null),r.a.createElement("div",{className:"homePage-container"},r.a.createElement("div",{className:"homePage-buttons"},r.a.createElement(j,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"homePage-display"},r.a.createElement(N,null)))))),r.a.createElement(i.b,{path:"/register",exact:!0},r.a.createElement("div",{className:"homePage"},r.a.createElement(m,null),r.a.createElement("div",{className:"homePage-container"},r.a.createElement("div",{className:"homePage-buttons"},r.a.createElement(j,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"homePage-display"},r.a.createElement(P,null)))))))}),q=Object(c.b)((function(e){return{logged:e.user.logged}}),null)(T),D=(a(382),function(){return r.a.createElement("div",{className:"raindrop-animation"},r.a.createElement("div",{className:"raindrop1"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop2"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop3"},r.a.createElement("img",{src:k,alt:"black raindrop"})),r.a.createElement("div",{className:"raindrop4"},r.a.createElement("img",{src:k,alt:"black raindrop"})))}),G=a(247),L=a.p+"images/dd8d94527cacd47f71e73288f3236db7.png",S=a.p+"images/50a896229980886256ebb2527d6aeb36.svg",x=(a(383),function(e){var t=e.toggleOpen,a=e.open,n=e.handleLogout,o=e.id;return r.a.createElement("div",{className:"connected-home-header"},r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("div",{className:"home-button"},r.a.createElement("img",{src:S,alt:"home"}))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"dropdown-button"},r.a.createElement(G.a,{Active:a,burger:"spring",hoverOpacity:1,color:"#000000",scale:.8,onClick:t})),r.a.createElement("div",{className:a?"dropdown-content dropdown-content--open":"dropdown-content"},r.a.createElement("div",{className:"dropdown-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:n},"Se déconnecter")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/dashboard/user/".concat(o,"/edit"),onClick:t},"Modifier son profil")))))),r.a.createElement("div",{className:"connected-home-title"},r.a.createElement("img",{src:L,alt:"black paint"}),r.a.createElement("h1",null,"UNDEFINED::ROLE PLAY")))});x.propTypes={toggleOpen:s.a.func.isRequired,open:s.a.bool.isRequired,id:s.a.number.isRequired,handleLogout:s.a.func.isRequired};var I=x,A=Object(c.b)((function(e){return{open:e.reducer.open,logged:e.reducer.logged,id:e.user.id}}),(function(e){return{toggleOpen:function(){var t;e({type:"TOGGLE_OPEN",value:t})},handleLogout:function(){e({type:"LOGOUT"})}}}))(I),F=(a(384),function(e){var t=e.changeIconFile,a=e.changeIconUrl,n=e.email,o=e.pseudo,c=e.icon,i=e.iconFile,u=e.imgURL,s=e.changeValue,m=e.sendUserData,d=e.sendIcon;console.log("icon vaut "+c),console.log("imgURL vaut "+u),console.log("iconFile vaut "+i);return r.a.createElement("div",{className:"edit-profile-section"},r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("div",{className:"home-button"},r.a.createElement("img",{src:S,alt:"home"}))),r.a.createElement("div",{className:"edit-profile-section-title"},r.a.createElement("p",null,"Modifier vos informations")),r.a.createElement("div",{className:"edit-profile-avatar"},r.a.createElement("input",{type:"file",name:"iconFile",className:"avatar-choice-input",onChange:function(e){console.log("---- je récupère le nom du fichier sélectionné par le user ----"),e.preventDefault(),console.log(e.target.files[0]);var n=URL.createObjectURL(e.target.files[0]),r=e.target.files[0];a(n),t(r),d()}}),r.a.createElement("div",{className:"avatar-preview"},u?r.a.createElement("img",{className:"avatar",src:u,alt:"unknown"}):r.a.createElement("img",{className:"avatar",src:"https://undefined-project.tk/api/uploads/icons/".concat(c),alt:"unknown"}))),r.a.createElement("div",{className:"edit-profile-form"},r.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),console.log("---- je veux envoyer les nouvelles infos du profil au serveur email : "+n+" pseudo : "+o+" file : "+i),m()}},r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"email",className:"edit-profile-form-label"},"Email",r.a.createElement(b,{className:"edit-profile-form-input",type:"email",placeholder:"Email",name:"email",changeValue:s,value:n}))),r.a.createElement(p.a.Field,null,r.a.createElement("label",{htmlFor:"pseudo",className:"edit-profile-form-label"},"Pseudo",r.a.createElement(b,{className:"edit-profile-form-input",type:"text",placeholder:"Pseudo",name:"pseudo",changeValue:s,value:o}))),r.a.createElement(f.a,{type:"submit"},"Valider"))))});F.propTypes={email:s.a.string.isRequired,pseudo:s.a.string.isRequired,icon:s.a.string.isRequired,iconFile:s.a.object.isRequired,imgURL:s.a.string.isRequired,changeIconFile:s.a.func.isRequired,changeIconUrl:s.a.func.isRequired,changeValue:s.a.func.isRequired,sendUserData:s.a.func.isRequired,sendIcon:s.a.func.isRequired};var U=F,V=Object(c.b)((function(e){return{email:e.user.email,password:e.user.password,pseudo:e.user.pseudo,icon:e.user.icon,id:e.user.id,iconFile:e.upload.iconFile,imgURL:e.upload.imgURL}}),(function(e){return{changeIconFile:function(t){var a=function(e){return{type:"CHANGE_ICON_FILE",iconFile:e}}(t);e(a)},changeIconUrl:function(t){var a=function(e){return{type:"CHANGE_ICON_URL",imgURL:e}}(t);e(a)},changeValue:function(t,a){var n=y(a,t);e(n)},sendIcon:function(){e({type:"SEND_ICON"})},fetchIcon:function(){e({type:"FETCH_ICON"})},sendUserData:function(){e({type:"SEND_USER_DATA"})}}}))(U),M=a(526),H=a(528),z=(a(385),function(e){var t=e.changeValue,a=e.handleDropdown,n=e.roomName,o=e.playersNb,c=e.createRoom;return r.a.createElement(M.a,{className:"create-room-modal",trigger:r.a.createElement("div",{className:"create-room-button"},"Créer une room")},r.a.createElement(M.a.Header,null,"Créer une salle de jeu"),r.a.createElement(M.a.Content,{image:!0},r.a.createElement(M.a.Description,null,r.a.createElement("form",{className:"ui form",onSubmit:function(e){console.log("je lance la requête de création de room"),e.preventDefault(),c()}},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"room-name"},"Choisissez un nom pour votre salle"),r.a.createElement(b,{className:"create-room-form-input",type:"text",placeholder:"Nom de la salle",name:"roomName",changeValue:t,value:n})),r.a.createElement(H.a,{onChange:function(e,t){a(t.value)},options:[{key:1,text:"1",value:1},{key:2,text:"2",value:2},{key:3,text:"3",value:3},{key:4,text:"4",value:4}],placeholder:"Indiquez le nombre de joueurs",selection:!0,value:o}),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"ui button create-room-submit",type:"submit"},"Créer la salle"))))))});z.propTypes={changeValue:s.a.func.isRequired,playersNb:s.a.number,roomName:s.a.string.isRequired,handleDropdown:s.a.func.isRequired,createRoom:s.a.func.isRequired},z.defaultProps={playersNb:0};var B=z,W=Object(c.b)((function(e){return{roomName:e.room.roomName,playersNb:e.room.playersNb}}),(function(e){return{changeValue:function(t,a){var n=y(a,t);e(n)},handleDropdown:function(t){var a=function(e){return{type:"DROPDOWN_CHANGE",selectedValue:e}}(t);e(a)},createRoom:function(){e({type:"CREATE_ROOM"})}}}))(B),K=(a(438),function(){return r.a.createElement(M.a,{className:"join-room-modal",trigger:r.a.createElement("div",{className:"join-room-button"},"Rejoindre une room")},r.a.createElement(M.a.Header,null,"Rejoindre une salle de jeu"),r.a.createElement(M.a.Content,{image:!0},r.a.createElement(M.a.Description,null,r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"room-name"},"Rejoindre :"),r.a.createElement("input",{type:"text",name:"room-name",placeholder:"Indiquez le nom de la salle"})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"ui button join-room-submit",type:"submit"},"Rejoindre la salle"))))))}),X=(a(439),function(){return r.a.createElement("div",{className:"navbar-menu"},r.a.createElement(W,null),r.a.createElement(K,null))}),J=(a(440),function(){return r.a.createElement("div",{className:"connected-home-message"},r.a.createElement("div",{className:"connected-home-message-border"},r.a.createElement("div",{className:"dashboard-content"},r.a.createElement("h2",{className:"connected-home-message-title"},"Bienvenu(e) sur votre tableau de bord"),r.a.createElement("p",{className:"connected-home-message-content"},"Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor... Hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor..."))))}),Y=(a(441),function(e){var t=e.logged,a=e.loading,n=e.id;return r.a.createElement("div",{className:"connected-home"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/dashboard"},r.a.createElement(A,null),r.a.createElement(D,null),r.a.createElement(J,null),r.a.createElement(X,null)),r.a.createElement(i.b,{exact:!0,path:"/dashboard/user/".concat(n,"/edit")},r.a.createElement(A,null),r.a.createElement(V,null))),t||a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(i.a,{to:"/"}))});Y.propTypes={logged:s.a.bool.isRequired,loading:s.a.bool.isRequired,id:s.a.number.isRequired};var $=Y,Q=Object(c.b)((function(e){return{logged:e.user.logged,loading:e.user.loading,id:e.user.id}}),(function(e){return{}}))($),Z=a(71),ee=function(e){var t=e.toggleOpenPlayers;return r.a.createElement("div",{className:"playersMenu"},r.a.createElement("button",{type:"button",className:"toolsMenu-button",onClick:t},r.a.createElement(Z.a,{name:"users",size:"large"})))};ee.propTypes={toggleOpenPlayers:s.a.func.isRequired};var te=ee,ae=Object(c.b)((function(e){return{playersOpen:e.room.playersOpen}}),(function(e){return{toggleOpenPlayers:function(){e({type:"TOGGLE_OPEN_PLAYERS"})}}}))(te),ne=(a(218),function(){return r.a.createElement("div",{className:""},r.a.createElement(Z.a,{name:"chevron down",size:"large"}))}),re=function(e){var t=e.roomName;return r.a.createElement("div",{className:"navBarRoom"},r.a.createElement(ae,null),r.a.createElement("div",{className:"navBarRoom-title"},r.a.createElement("h1",null,t)),r.a.createElement(ne,null))};re.propTypes={roomName:s.a.string.isRequired};var oe=re,ce=Object(c.b)((function(e){return{roomName:e.room.roomName,playersOpen:e.room.playersOpen}}),(function(e){return{}}))(oe),le=(a(442),a.p+"images/6a1a4a08818360c96bebd1431b932cfd.jpg"),ie=function(){return r.a.createElement("div",{className:"shared-view"},r.a.createElement("img",{src:le,alt:"shared screen",className:"shared-view-img"}))},ue=(a(443),function(e){var t=e.chatOpen,a=e.toggleOpenChat;return console.log(t),r.a.createElement(r.a.Fragment,null,t?r.a.createElement("button",{type:"button",onClick:a,className:"chatroom-button--open"},"x"):r.a.createElement("button",{type:"button",onClick:a,className:t?"chatroom-button--open":"chatroom-button"},"+"))});ue.propTypes={chatOpen:s.a.bool.isRequired,toggleOpenChat:s.a.func.isRequired};var se=ue,me=Object(c.b)((function(e){return{chatOpen:e.room.chatOpen}}),(function(e){return{toggleOpenChat:function(){e({type:"TOGGLE_OPEN_CHAT"})}}}))(se),de=a(81),pe=a(256),fe=a.n(pe),ge=(a(109),function(e){var t=e.author,a=e.content;return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-author"},t),r.a.createElement("p",{className:"message-content"},a))});ge.propTypes={author:s.a.string.isRequired,content:s.a.string.isRequired};var Ee=ge;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Oe=function(e){var t=e.chatMessages,a=Object(de.css)({height:600});return r.a.createElement("div",{className:"messages"},r.a.createElement(fe.a,{className:a},t.map((function(e){return r.a.createElement(Ee,be({key:e.id},e))}))))};Oe.propTypes={chatMessages:s.a.arrayOf(s.a.shape({id:s.a.number.isRequired})).isRequired};var he=Oe,ve=Object(c.b)((function(e){return{chatMessages:e.room.chatMessages}}),null)(he),ye=function(e){var t=e.sendMessage,a=e.inputValue,n=e.changeText;return r.a.createElement("div",null,r.a.createElement("form",{className:"chatroom-form",onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("input",{className:"chatroom-field",type:"text",placeholder:"Veuillez saisir un message...",onChange:function(e){n(e.target.value)},value:a}),r.a.createElement("button",{type:"submit",className:"chatroom-send"},r.a.createElement(Z.a,{name:"send",size:"large"}))))};ye.propTypes={sendMessage:s.a.func.isRequired,inputValue:s.a.string.isRequired,changeText:s.a.func.isRequired};var Ne=ye,Re=Object(c.b)((function(e){return{inputValue:e.room.text}}),(function(e){return{sendMessage:function(){e({type:"SEND_MESSAGE"})},changeText:function(t){var a=function(e){return{type:"CHANGE_TEXT",payload:e}}(t);e(a)}}}))(Ne),we=function(e){var t=e.webSocketConnect,a=e.chatOpen;return Object(n.useEffect)(t,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"chatroom chatroom--open":"chatroom"},r.a.createElement(ve,null),r.a.createElement(Re,null)))};we.propTypes={webSocketConnect:s.a.func.isRequired,chatOpen:s.a.bool.isRequired};var Pe=we,je=Object(c.b)((function(e){return{chatOpen:e.room.chatOpen}}),(function(e){return{webSocketConnect:function(){e({type:"WS_CONNECT"})},toggleOpenChat:function(){e({type:"TOGGLE_OPEN_CHAT"})}}}))(Pe),_e=(a(489),function(e){e.diceOpen;return r.a.createElement("div",null,"DicesHistory")});_e.propTypes={diceOpen:s.a.bool.isRequired};var ke=_e,Ce=Object(c.b)((function(e){return{diceOpen:e.room.diceOpen}}),(function(){return{}}))(ke),Te=(a(490),function(e){var t=e.dice,a=e.rollDice;return r.a.createElement("div",{className:"dices"},r.a.createElement("div",{className:"dices-result"},t),r.a.createElement("div",{onClick:function(){a()},className:"dices-throw"},"Throw the dice."))});Te.propTypes={dice:s.a.number.isRequired,rollDice:s.a.func.isRequired};var qe=Te,De=Object(c.b)((function(e){return{dice:e.dices.dice}}),(function(e){return{rollDice:function(){var t={type:"ROLL_DICE",dice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;return Math.floor(Math.random()*e)+1}()};e(t)}}}))(qe),Ge=(a(491),function(e){var t=e.editOpen,a=e.toggleOpenEdit;return r.a.createElement("div",{className:t?"player-notes":"player-notes-toggle player-notes"},r.a.createElement("button",{type:"button",onClick:a},r.a.createElement(Z.a,{name:"close",size:"large"})),r.a.createElement("div",{className:"player-notes-notes"},r.a.createElement("p",null,"Player Notes")),r.a.createElement("input",{type:"text"}))});Ge.propTypes={editOpen:s.a.bool.isRequired,toggleOpenEdit:s.a.func.isRequired};var Le=Ge,Se=Object(c.b)((function(e){return{editOpen:e.room.editOpen}}),(function(e){return{toggleOpenEdit:function(){e({type:"TOGGLE_OPEN_EDIT"})}}}))(Le),xe=(a(492),function(e){var t=e.pseudo,a=e.icon;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player-pseudo"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"player-icon"},r.a.createElement("img",{src:a,alt:"avatar"})))});xe.propTypes={pseudo:s.a.string.isRequired,icon:s.a.string.isRequired};var Ie=xe;a(493);function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Fe=function(e){var t=e.playersList;return r.a.createElement("div",{className:"players-list"},t.map((function(e){return r.a.createElement(Ie,Ae({key:e.id},e))})))};Fe.propTypes={playersList:s.a.arrayOf(s.a.shape({id:s.a.number.isRequired}).isRequired).isRequired};var Ue=Fe,Ve=Object(c.b)((function(e){return{playersList:e.room.playersList}}),(function(){return{}}))(Ue),Me=(a(494),function(e){var t=e.toggleOpenBook,a=e.bookOpen;return r.a.createElement("div",{className:a?"shared-files ":"shared-files-toggle shared-files"},r.a.createElement("button",{type:"button",onClick:t},r.a.createElement(Z.a,{name:"close",size:"large"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})),r.a.createElement("div",null,r.a.createElement(Z.a,{name:"book",size:"huge"})))});Me.propTypes={bookOpen:s.a.bool.isRequired,toggleOpenBook:s.a.func.isRequired};var He=Me,ze=Object(c.b)((function(e){return{bookOpen:e.room.bookOpen}}),(function(e){return{toggleOpenBook:function(){e({type:"TOGGLE_OPEN_BOOK"})}}}))(He),Be=(a(495),function(e){var t=e.toggleOpenBook,a=e.toggleOpenEdit,n=e.toggleOpenDice,o=e.toggleOpenPicture;e.pictureOpen;return r.a.createElement("div",{className:"toolsMenu"},r.a.createElement("ul",{className:"toolsMenu-list"},r.a.createElement("button",{type:"button",className:"toolsMenu-button",onClick:t},r.a.createElement(Z.a,{name:"book",size:"large"})),r.a.createElement("button",{type:"button",className:"toolsMenu-button",onClick:a},r.a.createElement(Z.a,{name:"edit",size:"large"})),r.a.createElement("button",{type:"button",className:"toolsMenu-button",onClick:n},r.a.createElement(Z.a,{name:"bomb",size:"large"})),r.a.createElement("button",{type:"button",className:"toolsMenu-button",onClick:o},r.a.createElement(Z.a,{name:"picture",size:"large"}))))});Be.propTypes={toggleOpenBook:s.a.func.isRequired,toggleOpenEdit:s.a.func.isRequired,toggleOpenDice:s.a.func.isRequired,toggleOpenPicture:s.a.func.isRequired,pictureOpen:s.a.bool.isRequired};var We=Be,Ke=Object(c.b)((function(e){return{bookOpen:e.room.bookOpen,editOpen:e.room.editOpen,bombOpen:e.room.bombOpen,diceOpen:e.room.diceOpen,pictureOpen:e.room.pictureOpen}}),(function(e){return{toggleOpenBook:function(){e({type:"TOGGLE_OPEN_BOOK"})},toggleOpenEdit:function(){e({type:"TOGGLE_OPEN_EDIT"})},toggleOpenBomb:function(){e({type:"TOGGLE_OPEN_BOMB"})},toggleOpenDice:function(){e({type:"TOGGLE_OPEN_DICE"})},toggleOpenPicture:function(){e({type:"TOGGLE_OPEN_PICTURE"})}}}))(We),Xe=(a(496),function(){return r.a.createElement("div",{className:"static-room"},r.a.createElement(ce,null),r.a.createElement(ie,null),r.a.createElement(me,null),r.a.createElement(je,null),r.a.createElement(Ve,null),r.a.createElement(Ke,null),r.a.createElement(ze,null),r.a.createElement(De,null),r.a.createElement(Ce,null),r.a.createElement(Se,null))}),Je=(a(497),function(e){var t=e.id;return r.a.createElement("div",{className:"app"},r.a.createElement(q,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/dashboard",exact:!0},r.a.createElement(Q,null)),r.a.createElement(i.b,{path:"/dashboard/user/".concat(t,"/edit"),exact:!0},r.a.createElement(V,null)),r.a.createElement(i.b,{path:"/room",exact:!0},r.a.createElement(Xe,null))))});Je.propTypes={id:s.a.number.isRequired};var Ye=Je,$e=Object(c.b)((function(e){return{id:e.user.id}}),(function(e){return{}}))(Ye),Qe=a(49);function Ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function et(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(a),!0).forEach((function(t){tt(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ze(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function tt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var at={currentUser:[],email:"",password:"",pseudo:"Undefined",id:0,icon:"",logged:!1,open:!1,roomName:"",roomId:"",playersNb:0,loading:!1,userRegistered:!1,regPassword:"",regEmail:"",regPseudo:"",regIcon:""},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TOGGLE_OPEN":return et(et({},e),{},{open:!e.open});case"CHANGE_VALUE":return et(et({},e),{},tt({},t.name,t.value));case"DROPDOWN_CHANGE":return et(et({},e),{},{playersNb:t.selectedValue});case"LOGIN":return et({},e);case"REGISTER":return et(et({},e),{},{userRegistered:!0,logged:!0});case"LOGOUT":return et(et({},e),{},{logged:!1,email:"",password:"",pseudo:"",id:0,icon:""});case"LOADING":return et(et({},e),{},{loading:!1});case"CONNECT":case"CHECK":return et(et({},e),{},{logged:!0});case"SAVE_USER":return et(et({},e),{},{pseudo:t.currentUser.pseudo,id:t.currentUser.id,icon:t.currentUser.icon});case"SEND_USER_DATA":return et({},e);default:return e}};function rt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(a),!0).forEach((function(t){ct(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ct(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var lt={open:!1,roomName:"",playersNb:0},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TOGGLE_OPEN":return ot(ot({},e),{},{open:!e.open});case"DROPDOWN_CHANGE":return ot(ot({},e),{},{playersNb:t.selectedValue});default:return e}};function ut(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function st(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(a),!0).forEach((function(t){mt(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ut(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function mt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var dt={icon:"",iconFile:{},imgURL:""},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_ICON_FILE":return st(st({},e),{},{iconFile:t.iconFile});case"CHANGE_ICON_URL":return st(st({},e),{},{imgURL:t.imgURL});case"SEND_ICON":return st({},e);case"SAVE_ICON":return st(st({},e),{},{icon:t.icon});default:return e}};function ft(e){return function(e){if(Array.isArray(e))return gt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return gt(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return gt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function gt(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function bt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Et(Object(a),!0).forEach((function(t){Ot(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Et(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ot(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ht={open:!1,chatOpen:!1,bookOpen:!1,editOpen:!1,bombOpen:!1,diceOpen:!1,pictureOpen:!1,playersOpen:!1,logged:!1,roomName:"",roomId:0,playersNb:0,playersList:[{pseudo:"Groot",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:7},{pseudo:"Rocket",icon:"https://figurinepop.com/public/2019/11/rocketholiday1_1.jpg",id:8},{pseudo:"Alphonse",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:9},{pseudo:"Patrick",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:10},{pseudo:"JeanMi",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:11},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:12},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:13},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:14},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:15},{pseudo:"Egmond",icon:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png",id:16}],text:"",chatMessages:[{author:"",content:"",id:0}]},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CREATE_ROOM":return bt(bt({},e),{},{roomName:t.roomName,playersNb:t.playersNb});case"SAVE_ROOM":return bt(bt({},e),{},{roomId:t.roomId});case"TOGGLE_OPEN_CHAT":return bt(bt({},e),{},{chatOpen:!e.chatOpen});case"TOGGLE_OPEN_BOOK":return bt(bt({},e),{},{bookOpen:!e.bookOpen});case"TOGGLE_OPEN_EDIT":return bt(bt({},e),{},{editOpen:!e.editOpen});case"TOGGLE_OPEN_BOMB":return bt(bt({},e),{},{bombOpen:!e.bombOpen});case"TOGGLE_OPEN_DICE":return bt(bt({},e),{},{diceOpen:!e.diceOpen});case"TOGGLE_OPEN_PICTURE":return bt(bt({},e),{},{pictureOpen:!e.pictureOpen});case"TOGGLE_OPEN_PLAYERS":return bt(bt({},e),{},{playersOpen:!e.playersOpen});case"RECEIVE_MESSAGE":var a=ft(e.chatMessages),n=bt({},t.chatMessage);return a.push(n),bt(bt({},e),{},{chatMessages:a,text:""});case"CHANGE_TEXT":return bt(bt({},e),{},{text:t.payload});case"CHANGE_VALUE":return bt(bt({},e),{},Ot({},t.name,t.value));case"DROPDOWN_CHANGE":return bt(bt({},e),{},{playersNb:t.selectedValue});default:return e}};function yt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Nt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?yt(Object(a),!0).forEach((function(t){Rt(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):yt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Rt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var wt={dice:null},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ROLL_DICE":return Nt(Nt({},e),{},{dice:t.dice});default:return e}},jt=Object(Qe.c)({reducer:it,user:nt,upload:pt,room:vt,dices:Pt}),_t=a(35),kt=a.n(_t),Ct="https://undefined-project.tk/api",Tt=function(e){return function(t){return function(a){switch(a.type){case"LOGIN":var n=e.getState();kt.a.post("".concat(Ct,"/login_check"),{email:n.user.email,password:n.user.password},{withCredentials:!0}).then((function(t){console.log(t.data);var a=v(t.data);e.dispatch(a),e.dispatch({type:"CONNECT"})})).catch((function(e){console.error(e)})),t(a);break;case"REGISTER":var r=e.getState();kt.a.post("".concat(Ct,"/register"),{email:r.user.regEmail,password:r.user.regPassword,pseudo:r.user.regPseudo}).then((function(t){if(t.data){console.log(t);var a=v(t.data);e.dispatch(a),e.dispatch({type:"CONNECT"})}})).catch((function(e){console.error(e)})).finally((function(){e.dispatch({type:"LOADING"})})),t(a);break;case"LOGOUT":console.log("je me déconnecte"),kt.a.get("".concat(Ct,"/logout"),{withCredentials:!0}),t(a);break;default:t(a)}}}},qt=function(e){return function(t){return function(a){switch(a.type){case"SEND_USER_DATA":var n=e.getState(),r=n.user.id;console.log("++++ requête : j'envoie toutes les données modifiées au serveur ++++"),console.log("iconFile envoyé vaut "+n.upload.iconFile);var o=new FormData;o.append("file",n.upload.iconFile),kt.a.post("".concat("https://undefined-project.tk/api","/user/").concat(r,"/edit"),{email:n.user.email,pseudo:n.user.pseudo,icon:o},{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t(a);break;default:t(a)}}}},Dt=function(e){return function(t){return function(a){switch(a.type){case"CREATE_ROOM":console.log("je crée une room");var n=e.getState();kt.a.post("".concat("https://undefined-project.tk/api","/room/add"),{name:n.room.roomName,player_number:n.room.playersNb,theme:"default",game_master:n.user.id},{withCredentials:!0}).then((function(t){console.log(t.data);var a={type:"SAVE_ROOM",roomId:t.data};e.dispatch(a)})).catch((function(e){console.error(e)})),t(a);break;default:t(a)}}}},Gt=function(e){return function(t){return function(a){switch(a.type){case"FETCH_ICON":var n=e.getState(),r=n.user.id,o=n.user.icon;console.log("++++ je récupère l'icon du user selon son id ++++"),kt.a.get("".concat("https://undefined-project.tk/api","/user/").concat(r,"/icon/").concat(o),{},{withCredentials:!0}).then((function(t){var a=new Blob([t.data]),n=URL.createObjectURL(a);console.log("--- url vaut --- "+n);var r={type:"SAVE_ICON",icon:n};e.dispatch(r)})).catch((function(e){console.log(e)})),t(a);break;case"SEND_ICON":var c=e.getState(),l=c.user.id;console.log("++++ iconFile dans le middleware upload ++++"+c.upload.iconFile),console.log("++++ requête : j'envoie l'icon modifié au serveur ++++");var i=new FormData;i.append("file",c.upload.iconFile),console.log("formData dans la requête vaut "+i),kt.a.post("".concat("https://undefined-project.tk/api","/user/").concat(l,"/icon"),{icon:i},{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t(a);break;default:t(a)}}}},Lt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qe.d)(Object(Qe.a)(Tt,qt,Dt,Gt)),St=Object(Qe.e)(jt,Lt),xt=r.a.createElement(c.a,{store:St},r.a.createElement(l.a,null,r.a.createElement($e,null))),It=document.getElementById("root");Object(o.render)(xt,It)}},[[267,1,2]]]);