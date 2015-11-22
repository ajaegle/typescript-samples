namespace component {

  export function SomeComponent() {
    return {
      scope: {
        greeting: "="
      },
      bindToController: true,
      controller: ComponentCtrl,
      controllerAs: "componentctrl",
      template: `
        <div>
          <div>
            <input type="text" ng-model="componentctrl.msg"/>
          </div>
          Greeting: {{componentctrl.greeting}}<br/>
          Message: {{componentctrl.msg}}
        </div>
      `
    };
  }

  class ComponentCtrl {
    greeting: string;
    msg = "initial message from component";
  }
}
