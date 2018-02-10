import angular from "angular";
import uiRouter from "angular-ui-router";
import Controller from "./register.controller";
import route from "./register.route";
var registerComponent=angular.module("Newsfeed.register", [uiRouter])
.config(route)
.controller("RegisterController",RegisterController)
.name;
export default RegisterComponent;