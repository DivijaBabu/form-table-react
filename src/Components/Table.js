import React from "react";
class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr><th><h3>SLNO</h3></th>
              <th><h3>FIRSTNAME </h3></th>
              <th><h3>LASTNAME</h3></th></tr>
          </thead>
          {this.props.todoItems.map((item, index) => {
            return (
              <tbody key={item.key}>
                <tr> <td>{index + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td></tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Table;
