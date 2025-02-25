# Angular Exercise

## Overview
Angular Exercise is a simple Angular application demonstrating authentication, route protection, state management using NgRx, and dynamic chart visualization. The project includes a login page with authentication and a dashboard with chart customization options.

## Features
- **Login Page**
  - Contains two fields: `username` and `password` (both required).
  - Credentials: 
    - Username: `admin`
    - Password: `123456`
  - On successful login, redirects to the dashboard.
  
- **Route Protection**
  - Unauthorized access to the dashboard is prevented using `CanActivate` guard.
  
- **Dashboard Page**
  - Contains two options:
    - **Chart Type:** Single-select dropdown (Options: Line, Bar, Column).
    - **Color Picker:** Allows selecting a color to apply to the chart.
  - Chart updates dynamically based on the selected options.
  
- **State Management**
  - Uses NgRx Store to manage chart type and color selection.

## Installation & Running the Application
Clone the repository:
```sh
git clone https://github.com/abhi12M/angular-excercise.git
```

Navigate to the project directory:
```sh
cd angular-excercise
```

Install dependencies:
```sh
npm install
```

Run the application:
```sh
npm run start
# OR
ng serve
```

## Deployment
The application is deployed using Firebase Hosting. To deploy, run:
```sh
npm run deploy
```

## Dependencies & Technologies Used
- **Angular 19** - Frontend framework
- **NgRx Store** - State management
- **Highcharts** - Charting library
- **Angular Material** - UI components

## License
This project is open-source and available under the [MIT License](LICENSE).

