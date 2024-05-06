from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

# Load the data into a DataFrame
df_27 = pd.read_csv('27.csv')
df_28 = pd.read_csv('28.csv')
df_97 = pd.read_csv('97.csv')
df_98 = pd.read_csv('98.csv')
df_99 = pd.read_csv('99.csv')

# Combine the data from all files into a single DataFrame
df = pd.concat([df_27, df_28, df_97, df_98, df_99])

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

@app.route('/wait-times')
def get_wait_times():
    # Calculate wait time statistics
    wait_stats = {
        'average': df['wait'].mean(),
        'median': df['wait'].median(),
        'std_dev': df['wait'].std()
    }
    return jsonify(wait_stats)

@app.route('/total-times')
def get_total_times():
    # Calculate total time statistics
    total_stats = {
        'average': df['Total Time'].mean(),
        'median': df['Total Time'].median(),
        'std_dev': df['Total Time'].std()
    }
    return jsonify(total_stats)


@app.route('/busiest-hours')
def busiest_hours():
    # Calculate the busiest hours of the day
    busiest_hours = df['order'].apply(lambda x: pd.Timestamp(x).hour).mode().tolist()
    return jsonify({"busiest_hours": busiest_hours})


@app.route('/average-wait-time-by-hour')
def average_wait_time_by_hour():
    # Calculate the average wait time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_wait_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['wait'].mean().to_dict()

    # Fill in missing hours with 0 average wait time
    for hour in range(24):
        avg_wait_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_wait_time_by_hour)

@app.route('/average-payment-time-by-hour')
def average_payment_time_by_hour():
    # Calculate the average payment time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_payment_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['payment'].mean().to_dict()

    # Fill in missing hours with 0 average payment time
    for hour in range(24):
        avg_payment_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_payment_time_by_hour)

@app.route('/order-payment-times')
def order_payment_times():
    # Calculate order time statistics
    order_stats = {
        'average_order_time': df['order'].mean(),
        'median_order_time': df['order'].median(),
        'std_dev_order_time': df['order'].std()
    }

    # Calculate payment time statistics
    payment_stats = {
        'average_payment_time': df['payment'].mean(),
        'median_payment_time': df['payment'].median(),
        'std_dev_payment_time': df['payment'].std()
    }

    return jsonify({
        'order_stats': order_stats,
        'payment_stats': payment_stats
    })

if __name__ == '__main__':
    app.run(debug=True)

