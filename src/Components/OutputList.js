import React from "react";
class OutputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayItems: props.items,
      editItems: true,
    };
    this.setEdit = this.setEdit.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (state.editItems) {
      return {
        ArrayItems: state.ArrayItems,
        editItems: false,
      };} 
    else if (props.items !== state.ArrayItems) {
      return {
        ArrayItems: props.items,
      };}
    return null;
  }
  setEdit(element, key) {
    let newArray = [...this.state.ArrayItems];
    const index = newArray.findIndex((i) => i.key === key);
    const newObj = {
      firstname: newArray[index].firstname,
      lastname: newArray[index].lastname,
      key: key,
    };
    if (element.target.name === "firstname") {
      newObj.firstname = element.target.value;
    }
    if (element.target.name === "lastname") {
      newObj.lastname = element.target.value;
    }
    newArray.splice(index, 1, newObj);
    this.setState({
      ArrayItems: newArray,
      editItems: true,
    });
  }
  updateItem(element, key) {
    this.props.updateItem(this.state.ArrayItems);
  }
  render() {
    return (
      <div>
        {this.state.ArrayItems.map((item, index) => {
          return (
            <div key={item.key}>
              <p>
                <input type="text" value={item.firstname} name="firstname" onChange={(event) => { this.setEdit(event, item.key);}}/>
                <input type="text" value={item.lastname} id={item} name="lastname" onChange={(event) => { this.setEdit(event, item.key);}}/>
                <button onClick={() => this.props.removeItem(item.key)}>Delete</button>
                <button onClick={() => this.updateItem(item.key)}>Edit</button>
              </p>
            </div>
          );})}
      </div>
    );}}
export default OutputList;