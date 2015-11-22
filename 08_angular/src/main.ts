namespace main {

  export class MainCtrl {
    public msg = "";
    getFormattedMsg() {
      return `The message: ${this.msg}`;
    }
  }
}
