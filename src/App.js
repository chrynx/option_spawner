import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
      readableMonths: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    };

  }

  componentDidMount() {
      const please = {
          render: {
              options: {
                  from: (fromMonth, fromYear) => {
                      return {
                          to: (toMonth, toYear) => {
                              return {
                                  using: {
                                      select: (select) => {
                                          const startY = fromYear;
                                          const endY = toYear;
                                          const startM = this.state.months.indexOf(fromMonth);
                                          let endM = this.state.months.indexOf(toMonth);

                                          console.log("startY :", startY);
                                          console.log("endY :", endY);
                                          console.log("startM :", startM);
                                          console.log("endM :", endM);

                                          for(let i = startY; i <= endY; i++) {
                                            for(let j = startM; j <= (i < endY ? 11 : endM); j++) {
                                              const months = this.state.months;
                                              const node = document.createElement("option");
                                              const nodeText = document.createTextNode(`${months[j]}|${i}`);
                                              node.appendChild(nodeText);
                                              document.querySelector("#" + select).appendChild(node);
                                            }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      };
      const date = new Date();
      please.render.options.from("JAN",1970).to(this.state.months[date.getMonth()],date.getFullYear()).using.select("dateSelect");
  }

  render() {
    return (
      <div className="App">
          <select name="dateSelect" id="dateSelect">
              <option disabled readOnly value="none" selected="selected">Select a Date</option>
          </select>
      </div>
    );
  }
}

export default App;
