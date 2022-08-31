import React from "react";
import OutputList from "./OutputList";
import Table from "./Table";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ValueItem: {
        firstname: "",
        lastname: "",
        key: "",
      },};
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput = (event) => {
    if (event.target.name === "firstname") {
      this.setState({
        ValueItem: {
          ...this.state.ValueItem,
          firstname: event.target.value,
          key: Date.now(),
        },});}
    if (event.target.name === "lastname") {
      this.setState({
        ValueItem: {
          ...this.state.ValueItem,
          lastname: event.target.value,
          key: Date.now(),
        },});}};
  addItem = (event) => {
    event.preventDefault();
    if (
      this.state.ValueItem.firstname !== "" &&
      this.state.ValueItem.lastname !== ""
    ) {
      this.setState({
        items: [...this.state.items, this.state.ValueItem],
        ValueItem: {
          firstname: "",
          lastname: "",
          key: "",
        },});}};
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });}
  updateItem(data) {
    this.setState({
      items: data,
    });}
  render() {
    return (
      <div >
        <OutputList items={this.state.items} setItem={(data1) => this.setItem(data1)} deleteItem={this.deleteItem} updateItem={(data) => this.updateItem(data)}
        />
        <form onSubmit={this.addItem}>
          <input type="text" value={this.state.ValueItem.firstname} onChange={this.handleInput} placeholder="Enter First Name" name="firstname"/>
          <input type="text" value={this.state.ValueItem.lastname} onChange={this.handleInput} placeholder="Enter Last Name"name="lastname"/>
          <button disabled={this.state.ValueItem.firstname === "" || this.state.ValueItem.lastname === ""}> Add </button>
        </form>
        <Table todoItems={this.state.items} />
      </div>
    );}}
export default InputForm;