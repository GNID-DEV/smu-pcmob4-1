# SMU PCMob4-1: Bus Arrival Tracker

Welcome to **Bus Arrival Tracker**, part of the SMU PCMob4-1 project. This app tracks the arrival time of a specific bus at a single bus stop and allows you to refresh the data.

## App Overview

**Bus Arrival Tracker** provides the following features:

- **Track Bus Arrival Time**: Display the arrival time of bus number 155 at a specified bus stop.
- **Remaining Time**: Show the remaining time until the bus arrives.
- **Refresh Data**: Refresh the bus arrival information with a button click.

## Features

- **Real-Time Updates**: Fetch data from the bus stop API every 5 seconds to ensure the information is up-to-date.
- **Loading Indicator**: Display a loading spinner while fetching data.
- **Refresh Button**: Allow users to manually refresh the bus arrival information.

## Technology Stack

- **React Native**: For building the mobile application.
- **fetch API**: To retrieve data from the bus stop API.
- **ActivityIndicator**: For displaying a loading spinner.

## Setup and Installation

To set up and run this app, follow these steps:

1. **Clone the Repository**:

   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/gnid-dev/smu-pcmob4-1.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd smu-pcmob4-1
   ```

3. **Install Dependencies**:

   Use npm or yarn to install the necessary dependencies:

   ```bash
   cd smu-pcmob4-1
   ```

   or
   ```bash
   yarn install
   ```

4. **Run the App on a Mobile Device**:

   Start the React Native development server and run the app on your mobile device:

   ```bash
   npx react-native run-android
   ```

   or
   ```bash
   npx react-native run-ios
   ```

   Ensure you have the required environment for running React Native on Android or iOS devices.

## Code Explanation
  - **Fetching Data**: The loadBusStopData function fetches the bus arrival data from the provided API URL and updates the state with the next bus arrival time and remaining time.
  - **UseEffect Hook**: The useEffect hook is used to fetch data on component mount and set up an interval to refresh the data every 5 seconds.
  - **State Management**: useState is used to manage the loading state, arrival time, and remaining time.
  - **Styling**: The app uses StyleSheet to define styles for various components including the button, text, and container.

## Contribution

Contributions to this project are welcome! If you have any suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.









   
