import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

class Dashboard extends Component {
  state = {
    account1: {
      balance: [],
      equity: [],
      timestamps: [],
    },
    account2: {
      balance: [],
      equity: [],
      timestamps: [],
    },
    account3: {
      balance: [],
      equity: [],
      timestamps: [],
    },
  };

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);
  }

  getData = () => {
    axios
      .get("/api/data")
      .then((response) => {
        this.setState({
          account1: {
            balance: response.data.account1.balance,
            equity: response.data.account1.equity,
            timestamps: response.data.account1.timestamps,
          },
          account2: {
            balance: response.data.account2.balance,
            equity: response.data.account2.equity,
            timestamps: response.data.account2.timestamps,
          },
          account3: {
            balance: response.data.account3.balance,
            equity: response.data.account3.equity,
            timestamps: response.data.account3.timestamps,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const data = {
      labels: this.state.account1.timestamps,
      datasets: [
        {
          label: "Account 1 Balance",
          data: this.state.account1.balance,
          fill: false,
          borderColor: "red",
        },
        {
          label: "Account 1 Equity",
          data: this.state.account1.equity,
          fill: false,
          borderColor: "green",
        },
        {
          label: "Account 2 Balance",
          data: this.state.account2.balance,
          fill: false,
          borderColor: "blue",
        },
        {
          label: "Account 2 Equity",
          data: this.state.account2.equity,
          fill: false,
          borderColor: "purple",
        },
        {
          label: "Account 3 Balance",
          data: this.state.account3.balance,
          fill: false,
          borderColor: "orange",
        },
        {
          label: "Account 3 Equity",
          data: this.state.account3.equity,
          fill: false,
          borderColor: "pink",
        },
      ],
    };

    const options = {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "minute",
            },
          },
        ],
      },
    };

    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default Dashboard;
