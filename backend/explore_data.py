import pandas as pd
import matplotlib.pyplot as plt

# Load the data into a DataFrame
df_27 = pd.read_csv('27.csv')
df_28 = pd.read_csv('28.csv')
df_97 = pd.read_csv('97.csv')
df_98 = pd.read_csv('98.csv')
df_99 = pd.read_csv('99.csv')

# Combine the data from all files into a single DataFrame
df = pd.concat([df_27, df_28, df_97, df_98, df_99])

# Explore customer wait times
print("Average Wait Time:", df['wait'].mean())
print("Median Wait Time:", df['wait'].median())
print("Standard Deviation of Wait Time:", df['wait'].std())

# Visualize the distribution of wait times
plt.hist(df['wait'], bins=30, edgecolor='black')
plt.xlabel('Wait Time (seconds)')
plt.ylabel('Frequency')
plt.title('Distribution of Customer Wait Times')
plt.show()

# Explore total time spent by customers
print("Average Total Time:", df['Total Time'].mean())
print("Median Total Time:", df['Total Time'].median())
print("Standard Deviation of Total Time:", df['Total Time'].std())

# Visualize the distribution of total time spent
plt.hist(df['Total Time'], bins=30, edgecolor='black')
plt.xlabel('Total Time (seconds)')
plt.ylabel('Frequency')
plt.title('Distribution of Total Time Spent by Customers')
plt.show()

# Explore peak hours
df['Arrival Time'] = pd.to_datetime(df['Arrival Time'])
df['Hour'] = df['Arrival Time'].dt.hour
peak_hours = df['Hour'].value_counts().sort_index()

# Visualize peak hours
plt.bar(peak_hours.index, peak_hours.values)
plt.xlabel('Hour of the Day')
plt.ylabel('Number of Customers')
plt.title('Number of Customers per Hour')
plt.xticks(range(24))
plt.show()

# Explore order times
print("Average Order Time:", df['order'].mean())
print("Median Order Time:", df['order'].median())
print("Standard Deviation of Order Time:", df['order'].std())

# Visualize the distribution of order times
plt.hist(df['order'], bins=30, edgecolor='black')
plt.xlabel('Order Time (seconds)')
plt.ylabel('Frequency')
plt.title('Distribution of Order Times')
plt.show()

# Explore payment times
print("Average Payment Time:", df['payment'].mean())
print("Median Payment Time:", df['payment'].median())
print("Standard Deviation of Payment Time:", df['payment'].std())

# Visualize the distribution of payment times
plt.hist(df['payment'], bins=30, edgecolor='black')
plt.xlabel('Payment Time (seconds)')
plt.ylabel('Frequency')
plt.title('Distribution of Payment Times')
plt.show()
