# Fermentation Data Tracker

This project is a React application for tracking and visualizing fermentation data, such as temperature, pH, and humidity. It uses React Bootstrap for the UI and Chart.js for data visualization. The final goal of this tool is to track and enhanche food fermentations.

## Features

- Input fermentation data through a form.
- Display the latest entered data.
- Display historical data using charts.

## Installation

### Prerequisites

- Node.js (recommended version: 14.x or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/50R1Paps/FermentAI/
   cd FermentAI
   ```
2. Install dependencies

   ```sh
   npm install
   ```
3. Install React Bootstrap and Chart.js
   ```sh
   npm install react-bootstrap bootstrap
   npm install react-chartjs-2 chart.js
   ```
4. Start the application
   ```sh
   npm start
   ```

# Project Structure

- `src/App.tsx`: Main application component.
- `src/components/DataForm.tsx`: Component for the data input form.
- `src/components/DataPlot.tsx`: Component for displaying historical data using charts.
- `src/services/api.ts`: File for backend communication.

   
