"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function e(a,t,n){function s(i,r){if(!t[i]){if(!a[i]){var d="function"==typeof require&&require;if(!r&&d)return d(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=t[i]={exports:{}};a[i][0].call(l.exports,function(e){var t=a[i][1][e];return s(t?t:e)},l,l.exports,e,a,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,a,t){app.controller("framifySampleController",["$scope","$http",function(e,a){e.voters=[];var t=function(a){console.log("SETTING VOTERS"),e.voters=a};e.customify=function(a){e.app.alert(e.nav.alias||e.nav.title,"<center>DONE!</center>",e.app.doNothing)},e.sav=function(){e.app.confirm(e.nav.alias||e.nav.title,"Do you really want to save this widget",e.customify)},e.del=function(){e.app.confirm(e.nav.alias||e.nav.title,"Are you sure you want to DELETE this widget",e.customify)},e.app.getJSON("./sample/sample.json",t),e.testify=function(){return"Correct!!"}}])},{}],2:[function(e,a,t){app.controller("appController",["app","$scope","$location","$ionicModal","$rootScope","$ionicSideMenuDelegate","$ionicSlideBoxDelegate",function(e,a,t,n,s,o,i){a.current={},a.ui={},s.nav=[],s.links=[],a.nav.hasFilters=!1,a.nav.right={},a.nav.right.toggle=function(){o.toggleRight()},a.nav.left={},a.nav.left.toggle=function(){o.toggleLeft()},a.openFilters=function(e){e===!0?a.nav.hasFilters=!1:a.nav.hasFilters=!0};var r=function(e){a.links=e},d=function(e){a.nav=e};a.app.getData(d),a.app.getRoutes(r),s.app.reinit=function(){a.location.path("/framify")},s.app.navSlide=function(e){i.slide(e,500)},a.ui.modal=function(e,t,s,o){e=e||"views/login.html",n.fromTemplateUrl(e,{scope:a,animation:t||"slide-in-up"}).then(function(e){a.current.modal=e}),a.current.openModal=function(){a.current.modal.show()},a.current.closeModal=function(){a.current.modal.hide()},a.$on("$destroy",function(){a.current.modal.remove()}),a.$on("current.modal.hidden",s),a.$on("current.modal.removed",o)},s.exec=function(e){return e()},s.secure=function(e){var t=window.location.href.split("/"),n=t[t.length-1];a.links.indexOf(n)>=0&&s.exec(e)},a.add={},a.fetch={},a.fetched={},a.data={},a.data.login={},a.data.admin={},s.frame.changeAdmin(!1),a.logedin=!1,a.add=function(e,t,n,s){t=t?a.app.json(t):{},t.command="add",t.table=void 0!=e?e.toString().replace(/vw_/gi,""):"",t.token=t.token||a.storage.admin._,t.extras=t&&t.extras?t.extras.replace(/LIMIT 1/gi,""):void 0,s&&s.split(",").forEach(function(e){t[e]=a.app.md5(t[e])}),a.cgi.ajax(t).then(function(s){if(s=a.app.json(s),200==s.response)a.app.UID(n,'<center> "Record Successfully Added."</center>',"success"),a.fetch(e,{specifics:t.specifics}),a.data[t.toString().replace(/vw_/gi,"")]={};else{if(Array.isArray(s.data.message)){var o=s.data.message[2].match(/DETAIL:(.*)/);void 0!=o||null!=o?s.data.message=o[1]:s.data.message=s.data.message[2]}else s.data.message;a.app.alert("ERROR","<center>"+s.data.message+"</center>",a.app.doNothing,"CONTINUE")}a.$apply()})},a.update=function(e,t,n,s){t=t?a.app.json(t):{},t.command="update",t.table=void 0!=e?e.toString().replace(/vw_/gi,""):"",t.token=t.token||a.storage.admin._,t.extras=t&&t.extras?t.extras.replace(/LIMIT 1/gi,""):void 0,s&&s.split(",").forEach(function(e){t[e]=a.app.md5(t[e])}),a.cgi.ajax(t).then(function(s){if(s=a.app.json(s),200==s.response)a.app.UID(n,'<center> "Record Successfully Updated."</center>',"success"),a.fetch(e,{specifics:t.specifics}),a.data[t.toString().replace(/vw_/gi,"")]={};else{if(Array.isArray(s.data.message)){var o=s.data.message[2].match(/DETAIL:(.*)/);void 0!=o||null!=o?s.data.message=o[1]:s.data.message=s.data.message[2]}else s.data.message;a.app.alert("ERROR","<center>"+s.data.message+"</center>",a.app.doNothing,"CONTINUE")}a.$apply()})};var l=function(e,t,n){t=t?a.app.json(t):{},t.command="get",t.table=e,a.cgi.ajax(t).then(function(t){if(t=a.app.json(t),200==t.response)a.fetched[e]=t.data.message;else{if(Array.isArray(t.data.message)){var n=t.data.message[2].match(/DETAIL:(.*)/);void 0!=n||null!=n?t.data.message=n[1]:t.data.message=t.data.message[2]}else t.data.message;a.app.alert("ERROR","<center>"+t.data.message+"</center>",a.app.doNothing,"CONTINUE")}a.$apply()})};a.fetch=function(e,a,t){Array.isArray(e)?e.forEach(function(e,a){return l(e[0],e[1],e[2])}):l(e,a,t)},a.del=function(e,t,n,s){t=t?a.app.json(t):{},t.command="del",t.table=void 0!=e?e.toString().replace(/vw_/gi,""):"",t.token=t.token||a.storage.admin._,a.cgi.ajax(t).then(function(t){if(t=a.app.json(t),200==t.response)a.fetched[e].splice(s,1),a.app.UID("response","<center>Deleted.</center>","info");else{if(Array.isArray(t.data.message)){var n=t.data.message[2].match(/DETAIL:(.*)/);void 0!=n||null!=n?t.data.message=n[1]:t.data.message=t.data.message[2]}else t.data.message;a.app.alert("ERROR","<center>"+t.data.message+"</center>",a.app.doNothing,"CONTINUE")}a.$apply()})},a.login=function(e){e&&(a.data.login[e]=a.app.md5(a.data.login[e])),a.data.login.command="get",a.data.login.table="users",a.data.login.extras=" AND active is true LIMIT 1",a.cgi.ajax(a.data.login).then(function(e){if(a.data.admin.extras="",e=a.app.json(e),200==e.response)e.data.message.length>0&&"object"==_typeof(e.data.message[0])?e.data.message[0].username==a.data.login.username?(a.storage.user=e.data.message[0],a.logedin=!0):(delete a.storage.user,window.location="/#/"):(delete a.storage.user,a.app.UID("response","<center>You have entered the wrong login credentials.</center>","danger"));else{if(Array.isArray(e.data.message)){var t=e.data.message[2].match(/DETAIL:(.*)/);void 0!=t||null!=t?e.data.message=t[1]:e.data.message=e.data.message[2]}else e.data.message;a.app.alert("ERROR","<center>"+e.data.message+"</center>",a.app.doNothing,"CONTINUE"),delete a.storage.user}a.$apply()})},a.adminLogin=function(e){e&&(a.data.admin[e]=a.app.md5(a.data.admin[e])),a.data.admin.command="get",a.data.admin.table="admins",a.data.admin.extras=" AND active is true LIMIT 1",a.cgi.ajax(a.data.admin).then(function(e){if(a.data.admin.extras="",e=a.app.json(e),200==e.response)e.data.message.length>0&&void 0!=_typeof(e.data.message[0])?e.data.message[0].password===a.data.admin.password?(a.storage.admin=e.data.message[0],a.storage.admin._={},a.storage.admin._.user=e.data.message[0].admin_name,a.storage.admin._.key=e.data.message[0].password,s.frame.changeAdmin(!0)):(delete a.data.admin,delete a.storage.admin,window.location="/#/admin"):(delete a.data.admin,delete a.storage.admin,a.app.UID("response","<center>You have entered the wrong login credentials.</center>","danger"),window.location="/#/admin");else{if(Array.isArray(e.data.message)){var t=e.data.message[2].match(/DETAIL:(.*)/);void 0!=t||null!=t?e.data.message=t[1]:e.data.message=e.data.message[2]}else e.data.message;a.app.alert("ERROR","<center>"+e.data.message+"</center>",a.app.doNothing,"CONTINUE"),delete a.storage.admin}a.$apply()})},a.islogedin=function(){a.storage.user&&(a.data.login.username=a.storage.user.username,a.data.login.password=a.storage.user.password,a.login())},a.logout=function(){a.islogedin=!1,delete a.storage.user,window.location="/#/"},a.authorize=function(){a.storage.admin?(a.data.admin={},a.data.admin.admin_name=a.storage.admin.admin_name,a.data.admin.password=a.storage.admin.password,a.adminLogin()):a.location="/#/admin"},a.deauthorize=function(){delete a.storage.admin,s.frame.changeAdmin(!1),window.location="/#/"},a.sort=function(e){a.sortKey=e,a.reverse=!a.reverse},a.currmoin=a.app.monthNum(),a.setMoin=function(e){a.currmoin=e}}])},{}],3:[function(e,a,t){e("./app.ctrl.js"),e("./app-sample.ctrl.js"),e("./formly.ctrl.js")},{"./app-sample.ctrl.js":1,"./app.ctrl.js":2,"./formly.ctrl.js":4}],4:[function(e,a,t){app.controller("AuthController",["$scope","$http",function(e,a){e.vm={},e.vm.onSubmit=function(){var a=function(a){200===a.response||"SUCCESS"===a.response?(e.app.UID("resp",e.app.str(a.data.message),"success"),e.vm.model={}):e.app.UID("resp",e.app.str(a.data.message),"danger")};e.app.cors(e.app.url+"/register",e.vm.model,a)},e.vm.model={terms:!0},e.vm.fields=[{key:"username",type:"inline-input",templateOptions:{label:"Username*",type:"text",placeholder:"Username",required:!0}},{key:"first_name",type:"inline-input",templateOptions:{label:"First Name*",type:"text",placeholder:"First Name",required:!0}},{key:"last_name",type:"inline-input",templateOptions:{label:"Last Name",type:"text",placeholder:"Last Name",required:!1}},{key:"password",type:"inline-input",templateOptions:{type:"password",label:"Password*",placeholder:"Password",disabled:!1,required:!0}},{key:"password2",type:"inline-input",templateOptions:{type:"password",label:"Repeat Password*",placeholder:"********",disabled:!1,required:!0}},{key:"telephone",type:"inline-input",templateOptions:{type:"text",label:"Telephone*",placeholder:"+123456789123",disabled:!1,required:!0}},{key:"postal_address",type:"inline-input",templateOptions:{type:"text",label:"Address",placeholder:"P.O BOX STH",disabled:!1,required:!1}},{key:"city",type:"inline-input",templateOptions:{type:"text",label:"City",placeholder:"SOME CITY",disabled:!1,required:!1}},{key:"zip",type:"inline-input",templateOptions:{type:"text",label:"ZIP",placeholder:"0000",disabled:!1,required:!1}},{key:"email",type:"inline-input",templateOptions:{type:"email",label:"Email*",placeholder:"john@doe.ext",disabled:!1,required:!0}},{key:"country",type:"countries",templateOptions:{label:"Country*"}},{key:"terms",type:"terms"},{type:"submit",key:"submit",templateOptions:{label:"Join Bixbyte",disabled:"!model.terms || form.$invalid"}},{type:"space",key:""}],e.vm.originalFields=angular.copy(e.vm.fields)}])},{}]},{},[3]);