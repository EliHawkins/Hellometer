# Hellometer Data Analysis

This project provides data analysis and visualization for Hellometer-backed stores. The backend is done in Flask/ Python and the front end is done in React/ JS. It includes various charts and statistics based on the data collected from the stores. A toggle is provided to switch between a view of stats and charts for each of the 5 stores, with an option availble to see statisctis and charts for data across all stores as well. The ability to look at stats for each store allows the user to identify outlier stores in terms of wait times, high traffic order hours, deviation in wait time, etc. when compared to each of the other stores, and the dataset as a whole. The charts and graphs provided illustrate data visually for users to see outliers (i.e. busy times of day at each store), and thus allow users to identify potential bottlenecks. 

## Installation

To run the project, you'll need Node.js and npm installed. First, clone the repository:

```bash
git clone https://github.com/EliHawkins/Hellometer.git
```

Then, navigate to the project directory and install the dependencies:

```bash
cd Hellometer
npm install
```

## Usage
### Backend
Make sure you have installed flask (can be done via virtual environment):
```python3 -m venv venv
source venv/bin/activate   
pip install Flask
```
To start the development server for the backend, navigate to the backend directory 

```
cd hellometer-backend
```

and use the following command:

```
python app.py
```

This will start the backend server. Make sure to have Python installed on your machine.

Make sure to start both the frontend and backend servers to use the full functionality of the application.

### Frontend
For best experience, view in developer mode! To start the development server for the frontend, navigate to the frontend directory 

```
cd hellometer-frontend
```

and use the following command:

```
npm start
```

This will start the frontend server and open the project in your default web browser.

## Charts

The project includes the following charts and statistics:

- Wait Time Chart
- Total Times Statistics
- Order Payment Times Chart
- Busiest Hours Chart
- Average Wait Time by Hour Chart
- Average Payment Time by Hour Chart

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/my-feature`)
6. Create a new Pull Request
