!function t(r,n,e){function o(c,l){if(!n[c]){if(!r[c]){var s="function"==typeof require&&require;if(!l&&s)return s(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+c+"'")}var a=n[c]={exports:{}};r[c][0].call(a.exports,function(t){var n=r[c][1][t];return o(n?n:t)},a,a.exports,t,r,n,e)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<e.length;c++)o(e[c]);return o}({1:[function(t,r,n){r.exports=angular.module("StarterApp",["ngMaterial"])},{}],2:[function(t,r,n){!function e(r,n,o){function i(l,s){if(!n[l]){if(!r[l]){var a="function"==typeof t&&t;if(!s&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=n[l]={exports:{}};r[l][0].call(f.exports,function(t){var n=r[l][1][t];return i(n?n:t)},f,f.exports,e,r,n,o)}return n[l].exports}for(var c="function"==typeof t&&t,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,r,n){t("./voterlist.ctrl.js"),t("./sidenavleft.ctrl.js"),t("./navbartop.ctrl.js")},{"./navbartop.ctrl.js":2,"./sidenavleft.ctrl.js":3,"./voterlist.ctrl.js":4}],2:[function(t,r,n){app.controller("NavbarTopController",["$scope","$http",function(t,r){t.nav=[],r.get("config/navbar.json").success(function(r){t.nav=r,console.log("Successfully captured navbar data.")}).success(function(){console.log("Failed to capture navbar data.")})}])},{}],3:[function(t,r,n){app.controller("SidenavLeftController",["$scope","$http","$mdSidenav",function(t,r,n){t.toggleSidenav=function(t){n(t).toggle()}}])},{}],4:[function(t,r,n){app.controller("VoterListController",["$scope","$http",function(t,r){t.voters=[],r.get("voters.json").success(function(r){t.voters=r}).error(function(t){console.log("Failed to fetch JSON data.")})}])},{}]},{},[1])},{"./navbartop.ctrl.js":3,"./sidenavleft.ctrl.js":4,"./voterlist.ctrl.js":5}],3:[function(t,r,n){app.controller("NavbarTopController",["$scope","$http",function(t,r){t.nav=[],r.get("config/navbar.json").success(function(r){t.nav=r,console.log("Successfully captured navbar data.")}).success(function(){console.log("Failed to capture navbar data.")})}])},{}],4:[function(t,r,n){app.controller("SidenavLeftController",["$scope","$http","$mdSidenav",function(t,r,n){t.toggleSidenav=function(t){n(t).toggle()}}])},{}],5:[function(t,r,n){app.controller("VoterListController",["$scope","$http",function(t,r){t.voters=[],r.get("voters.json").success(function(r){t.voters=r}).error(function(t){console.log("Failed to fetch JSON data.")})}])},{}],6:[function(t,r,n){!function e(r,n,o){function i(l,s){if(!n[l]){if(!r[l]){var a="function"==typeof t&&t;if(!s&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=n[l]={exports:{}};r[l][0].call(f.exports,function(t){var n=r[l][1][t];return i(n?n:t)},f,f.exports,e,r,n,o)}return n[l].exports}for(var c="function"==typeof t&&t,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,r,n){t("./voterlist.dir.js"),t("./sidenavleft.dir.js"),t("./navbartop.dir.js")},{"./navbartop.dir.js":2,"./sidenavleft.dir.js":3,"./voterlist.dir.js":4}],2:[function(t,r,n){app.directive("navbarTop",function(){return{restrict:"E",controller:"NavbarTopController",templateUrl:"views/navbar-top.html"}})},{}],3:[function(t,r,n){app.directive("sidebarLeft",function(){return{restrict:"E",controller:"SidenavLeftController",templateUrl:"views/sidenav-left.html"}})},{}],4:[function(t,r,n){app.directive("voterList",function(){return{restrict:"E",controller:"VoterListController",templateUrl:"views/voters.html"}})},{}]},{},[1])},{"./navbartop.dir.js":7,"./sidenavleft.dir.js":8,"./voterlist.dir.js":9}],7:[function(t,r,n){app.directive("navbarTop",function(){return{restrict:"E",controller:"NavbarTopController",templateUrl:"views/navbar-top.html"}})},{}],8:[function(t,r,n){app.directive("sidebarLeft",function(){return{restrict:"E",controller:"SidenavLeftController",templateUrl:"views/sidenav-left.html"}})},{}],9:[function(t,r,n){app.directive("voterList",function(){return{restrict:"E",controller:"VoterListController",templateUrl:"views/voters.html"}})},{}],10:[function(t,r,n){app=t("./app.js"),t("./controllers/controllers.js"),t("./directives/directives.js"),t("./services/services.js")},{"./app.js":1,"./controllers/controllers.js":2,"./directives/directives.js":6,"./services/services.js":11}],11:[function(t,r,n){!function e(r,n,o){function i(l,s){if(!n[l]){if(!r[l]){var a="function"==typeof t&&t;if(!s&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=n[l]={exports:{}};r[l][0].call(f.exports,function(t){var n=r[l][1][t];return i(n?n:t)},f,f.exports,e,r,n,o)}return n[l].exports}for(var c="function"==typeof t&&t,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,r,n){},{}]},{},[1])},{}]},{},[10]);