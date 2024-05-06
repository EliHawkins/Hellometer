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

@app.route('/store27/wait-times')
def get_store27_wait_times():
    df = pd.read_csv('27.csv')
    wait_stats = {
        'average': df['wait'].mean(),
        'median': df['wait'].median(),
        'std_dev': df['wait'].std()
    }
    return jsonify(wait_stats)

@app.route('/store28/wait-times')
def get_store28_wait_times():
    df = pd.read_csv('28.csv')
    wait_stats = {
        'average': df['wait'].mean(),
        'median': df['wait'].median(),
        'std_dev': df['wait'].std()
    }
    return jsonify(wait_stats)

@app.route('/store97/wait-times')
def get_store97_wait_times():
    df = pd.read_csv('97.csv')
    wait_stats = {
        'average': df['wait'].mean(),
        'median': df['wait'].median(),
        'std_dev': df['wait'].std()
    }
    return jsonify(wait_stats)

@app.route('/store98/wait-times')
def get_store98_wait_times():
    df = pd.read_csv('98.csv')
    wait_stats = {
        'average': df['wait'].mean(),
        'median': df['wait'].median(),
        'std_dev': df['wait'].std()
    }
    return jsonify(wait_stats)

@app.route('/store99/wait-times')
def get_store99_wait_times():
    df = pd.read_csv('99.csv')
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

@app.route('/store27/total-times')
def get_store27_total_times():
    df = pd.read_csv('27.csv')
    # Calculate total time statistics
    total_stats = {
        'average': df['Total Time'].mean(),
        'median': df['Total Time'].median(),
        'std_dev': df['Total Time'].std()
    }
    return jsonify(total_stats)

@app.route('/store28/total-times')
def get_store28_total_times():
    df = pd.read_csv('28.csv')
    # Calculate total time statistics
    total_stats = {
        'average': df['Total Time'].mean(),
        'median': df['Total Time'].median(),
        'std_dev': df['Total Time'].std()
    }
    return jsonify(total_stats)

@app.route('/store97/total-times')
def get_store29_total_times():
    df = pd.read_csv('97.csv')
    # Calculate total time statistics
    total_stats = {
        'average': df['Total Time'].mean(),
        'median': df['Total Time'].median(),
        'std_dev': df['Total Time'].std()
    }
    return jsonify(total_stats)

@app.route('/store98/total-times')
def get_store98_total_times():
    df = pd.read_csv('98.csv')
    # Calculate total time statistics
    total_stats = {
        'average': df['Total Time'].mean(),
        'median': df['Total Time'].median(),
        'std_dev': df['Total Time'].std()
    }
    return jsonify(total_stats)

@app.route('/store99/total-times')
def get_store99_total_times():
    df = pd.read_csv('99.csv')
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

@app.route('/store27/busiest-hours')
def busiest_store27_hours():
    df = pd.read_csv('27.csv')
    # Calculate the busiest hours of the day
    busiest_hours = df['order'].apply(lambda x: pd.Timestamp(x).hour).mode().tolist()
    return jsonify({"busiest_hours": busiest_hours})

@app.route('/store28/busiest-hours')
def busiest_store28_hours():
    df = pd.read_csv('28.csv')
    # Calculate the busiest hours of the day
    busiest_hours = df['order'].apply(lambda x: pd.Timestamp(x).hour).mode().tolist()
    return jsonify({"busiest_hours": busiest_hours})

@app.route('/store97/busiest-hours')
def busiest_store97_hours():
    df = pd.read_csv('97.csv')
    # Calculate the busiest hours of the day
    busiest_hours = df['order'].apply(lambda x: pd.Timestamp(x).hour).mode().tolist()
    return jsonify({"busiest_hours": busiest_hours})

@app.route('/store98/busiest-hours')
def busiest_store98_hours():
    df = pd.read_csv('98.csv')
    # Calculate the busiest hours of the day
    busiest_hours = df['order'].apply(lambda x: pd.Timestamp(x).hour).mode().tolist()
    return jsonify({"busiest_hours": busiest_hours})

@app.route('/store99/busiest-hours')
def busiest_store99_hours():
    df = pd.read_csv('99.csv')
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

@app.route('/store27/average-wait-time-by-hour')
def average_store27_wait_time_by_hour():
    df = pd.read_csv('27.csv')
    # Calculate the average wait time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_wait_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['wait'].mean().to_dict()

    # Fill in missing hours with 0 average wait time
    for hour in range(24):
        avg_wait_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_wait_time_by_hour)
    
@app.route('/store28/average-wait-time-by-hour')
def average_store28_wait_time_by_hour():
    df = pd.read_csv('28.csv')
    # Calculate the average wait time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_wait_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['wait'].mean().to_dict()

    # Fill in missing hours with 0 average wait time
    for hour in range(24):
        avg_wait_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_wait_time_by_hour)

@app.route('/store97/average-wait-time-by-hour')
def average_store97_wait_time_by_hour():
    df = pd.read_csv('97.csv')
    # Calculate the average wait time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_wait_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['wait'].mean().to_dict()

    # Fill in missing hours with 0 average wait time
    for hour in range(24):
        avg_wait_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_wait_time_by_hour)

@app.route('/store98/average-wait-time-by-hour')
def average_store98_wait_time_by_hour():
    df = pd.read_csv('98.csv')
    # Calculate the average wait time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_wait_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['wait'].mean().to_dict()

    # Fill in missing hours with 0 average wait time
    for hour in range(24):
        avg_wait_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_wait_time_by_hour)

@app.route('/store99/average-wait-time-by-hour')
def average_store99_wait_time_by_hour():
    df = pd.read_csv('99.csv')
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

@app.route('/store27/average-payment-time-by-hour')
def average_store27_payment_time_by_hour():
    df = pd.read_csv('27.csv')
    # Calculate the average payment time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_payment_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['payment'].mean().to_dict()

    # Fill in missing hours with 0 average payment time
    for hour in range(24):
        avg_payment_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_payment_time_by_hour)

@app.route('/store28/average-payment-time-by-hour')
def average_store28_payment_time_by_hour():
    df = pd.read_csv('28.csv')
    # Calculate the average payment time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_payment_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['payment'].mean().to_dict()

    # Fill in missing hours with 0 average payment time
    for hour in range(24):
        avg_payment_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_payment_time_by_hour)

@app.route('/store97/average-payment-time-by-hour')
def average_store97_payment_time_by_hour():
    df = pd.read_csv('97.csv')
    # Calculate the average payment time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_payment_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['payment'].mean().to_dict()

    # Fill in missing hours with 0 average payment time
    for hour in range(24):
        avg_payment_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_payment_time_by_hour)

@app.route('/store98/average-payment-time-by-hour')
def average_store98_payment_time_by_hour():
    df = pd.read_csv('98.csv')
    # Calculate the average payment time by hour of the day
    df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
    avg_payment_time_by_hour = df.groupby(df['Arrival Time'].dt.hour)['payment'].mean().to_dict()

    # Fill in missing hours with 0 average payment time
    for hour in range(24):
        avg_payment_time_by_hour.setdefault(hour, 0)
    
    return jsonify(avg_payment_time_by_hour)

@app.route('/store99/average-payment-time-by-hour')
def average_store99_payment_time_by_hour():
    df = pd.read_csv('99.csv')
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

@app.route('/store27/order-payment-times')
def order_store27_payment_times():
    df = pd.read_csv('27.csv')
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

@app.route('/store28/order-payment-times')
def order_store28_payment_times():
    df = pd.read_csv('28.csv')
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

@app.route('/store97/order-payment-times')
def order_store97_payment_times():
    df = pd.read_csv('97.csv')
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

@app.route('/store98/order-payment-times')
def order_store98_payment_times():
    df = pd.read_csv('98.csv')
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

@app.route('/store99/order-payment-times')
def order_store99_payment_times():
    df = pd.read_csv('99.csv')
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
