namespace component {

  export function SomeComponent() {
    return {
      scope: {},
      controller: ComponentCtrl,
      controllerAs: "componentctrl",
      template: `
        <div>
          <div>
            <input type="text" ng-model="componentctrl.msg"/>
          </div>
          Message: {{componentctrl.msg}}
        </div>
      `
    };
  }

  class ComponentCtrl {
    msg = "hello from component";
  }
}
