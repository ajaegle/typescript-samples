/// <reference path="./main.ts"/>
/// <reference path="./component.ts"/>
/// <reference path="./another.ts"/>

namespace index {
  angular.module("sampleapp", [])
    .controller("MainCtrl", main.MainCtrl)
    .controller("AnotherCtrl", another.AnotherCtrl)
    .directive("someComponent", component.SomeComponent);
  ;
}
