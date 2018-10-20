import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromMonth: "",
      toMonth: "",
      fromYear: 0,
      toYear: 0,
      months: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
      readableMonths: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    };

  }

  componentDidMount() {
      const date = new Date();
      const please = {
          render: {
              options: {
                  /**
                   *
                   * @param fromMonth str The starting month of the options format = "JAN","FEB"...
                   * @param fromYear num The starting year of the options
                   * @returns {{to: (function(*=, *): {using: {select: using.select}})}}
                   */
                  from: (fromMonth, fromYear) => {
                      return {
                          /**
                           *
                           * @param toMonth str End month of the options, default is current month format = "JAN", "FEB"...
                           * @param toYear num The end year of the options, default is current year
                           * @returns {{using: {select: using.select}}}
                           */
                          to: (toMonth = this.state.months[date.getMonth()], toYear = date.getFullYear()) => {
                              return {
                                  using: {
                                      /**
                                       *
                                       * @param select str The ID of the select that you are using
                                       */
                                      select: (select) => {
                                          const startY = fromYear;
                                          const endY = toYear;
                                          const startM = this.state.months.indexOf(fromMonth);
                                          let endM = this.state.months.indexOf(toMonth);

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
          },
          /**
           *
           * @param item any Log the item you wish to log
           */
          log: (item) => {
            console.log(item);
          }
      };

      please.render.options.from("JAN",1970).to().using.select("dateSelect");
      please.render.options.from("JAN",1970).to().using.select("toSelect");
      document.querySelector("#dateSelect").addEventListener("change", (e) => {
        const fromValues = e.target.value.split("|");
        this.setState({
            fromMonth: fromValues[0],
            fromYear: parseInt(fromValues[1]),
        });
          please.log(this.state.fromMonth);
          please.log(this.state.fromYear);
      });
      document.querySelector("#toSelect").addEventListener("change", (e) => {
          const toValues = e.target.value.split("|");
          this.setState({
              toMonth: toValues[0],
              toYear: parseInt(toValues[1]),
          });
          please.log(this.state.toMonth);
          please.log(this.state.toYear);
      });
      please.log(this.state.fromMonth);
      please.log(this.state.toMonth);
      please.log(this.state.fromYear);
      please.log(this.state.toYear);
  }

  render() {
    return (
      <div className="App">
          <div className="selectBox">
              <label htmlFor="dateSelect">From: </label>
              <select name="dateSelect" id="dateSelect">
                  <option disabled readOnly value="none" selected="selected">Select a Date</option>
              </select>
          </div>
        <div className="selectBox">
            <label htmlFor="toSelect">To: </label>
            <select name="toSelect" id="toSelect">
                <option disabled readOnly value="none" selected="selected">Select a Date</option>
            </select>
        </div>
      </div>
    );
  }
}

export default App;