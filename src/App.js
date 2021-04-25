import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Title from "./Title";
class App extends Component {
   state = {
      items: [],
   };

   removeItem = (index) => {
      const { items } = this.state;
      this.setState({
         items: items.filter((item, i) => {
            return i !== index;
         }),
      });
   };

   handleSubmit = (item) => {
      this.setState({
         items: [...this.state.items, item],
      });
   };

   render() {
      const { items } = this.state;
      return (
         <div className="container">
            <Title />
            <Table itemData={items} removeItem={this.removeItem} />
            <Form handleSubmit={this.handleSubmit} />
         </div>
      );
   }
}

export default App;
