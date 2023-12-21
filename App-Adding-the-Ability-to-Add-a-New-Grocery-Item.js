import React from 'react';

import NewItemForm from "./NewItemForm.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: "Broccoli",
          number: 3,
          purchased: false,
        },
        {
          name: "Bananas",
          number: 6,
          purchased: true,
        }
      ]
    }

    this.addGroceryItem = this.addGroceryItem.bind(this)
  }

  addGroceryItem(groceryItem) {
    let items = this.state.items.slice()
    items.push(groceryItem)
    this.setState({items: items})
  }

  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Grocery List</h1>

              <NewItemForm addItem={this.addGroceryItem} />

              <div className="my-5">
                <ul>
                  {this.state.items.map((item, index) => (
                    <li key={index}>
                      <label
                        className="checkbox"
                        style={{
                          textDecoration: item.purchased
                            ? "line-through"
                            : "none",
                        }}
                      >
                        <input checked={item.purchased} className="mr-3" type="checkbox" />
                        {item.name} <span className="has-text-weight-light">({item.number})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
