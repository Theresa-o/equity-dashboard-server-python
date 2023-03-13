# MT5-Account-info-Monitoring-Dashboard
Real-time Equity and Balance Monitoring Dashboard for 3 Trading Accounts

## Presentation:


### Introduction:
The Real-time Equity and Balance Monitoring Dashboard is a web application built using ReactJS and Python, which allows users to monitor the equity and balance for 3 trading accounts in real-time. The application fetches historical data from MongoDB using Axios, displays the data using Chart.js, and updates the chart every minute.

### Technical Architecture

* Frontend: ReactJS with Chart.js
* Backend: Python with MongoDB
* Programming tools: VS Code and Jupyter Notebook

### Process:

* Data collection: Data was collected from the MetaTrader 5 trading platform and stored in MongoDB using Python.
* Server-side development: Pymongo was used to connect and send data to MongoDb. Two functions were created to get account details and insert "equity" and "balance" data to MongoDb
* Client-side development: A ReactJS application was built to fetch the data via "dashboard.js" and display it in a chart using Chart.js component react-chartjs-2.

### Limitations:

* The data is stored in MongoDB, which may not be suitable for larger datasets with more frequent updates.
* The application does not provide any predictive analysis or decision-making support for trading.

### Opportunities:

* The application can be extended to support additional trading accounts and display more data, such as the profit and loss.
* The application can be enhanced by incorporating machine learning models to provide predictive analysis and decision-making support for trading.

### Conclusion:

The Real-time Equity and Balance Monitoring Dashboard provides a simple and intuitive way to monitor the equity and balance for 3 trading accounts in real-time. With the use of modern web technologies and the potential for future enhancements, the application can be a valuable tool for traders seeking to monitor their accounts' performance.
