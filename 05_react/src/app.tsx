namespace app {

  interface Item {
    id: number;
    name: string;
  }

  var items = [
    {id: 1, name: "This"},
    {id: 2, name: "is"},
    {id: 3, name: "React"},
    {id: 4, name: "with"},
    {id: 5, name: "TypeScript"},
  ];

  interface Props {
    title: string;
    items: Item[];
  }

  class MyComponent extends React.Component<Props, {}> {
    render() {
      return (
        <table>
          <th><td colSpan={2}>{this.props.title}</td></th>
          {this.props.items.map(this.renderRow)}
        </table>
      );
    }

    renderRow = (item, i) => {
      return (
        <tr key={i}>
          <td>{item.id}</td><td>{item.name}</td>
        </tr>
      );
    };
  }

  function initializeUI() {
    ReactDOM.render(
      <MyComponent title="Title Text" items={items} />,
      document.body
    );
  }

  initializeUI();
}
