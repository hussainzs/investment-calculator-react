# Investment Calculator

This is an investment calculator built using React which allows users to input their current savings, yearly contribution, interest rate, and investment duration to calculate the investment results for each year.
I built this to apply React concepts  with industry best practices.
Ap hosted at: 

## Features

- Input fields for current savings, yearly contribution, interest rate, and duration
- Calculation of investment results based on user inputs
- Display of yearly investment data in a table format

## Concepts

This project demonstrates the following React concepts and best practices:

- **Functional Components**: The components within the app, including App, Form, Result, and ResultRow, are thoughtfully designed as functional components.

- **JSX**: JSX is skillfully employed to create the app's user interface.

- **Props**: The app leverages the concept of props to seamlessly transfer data and functions between parent and child components.

- **State**: Through the use of the `useState` hook, the app effectively manages state variables like `currentSavings` and `yearlyContribution` etc. The state variables are dynamically updated

- **Event Handling**: For smooth operations throughout the app I used well-defined event handlers that capture user interactions.

- **Conditional Rendering**: The app employs conditional rendering to dynamically display elements based on specific conditions. A prime example can be seen in the Form component, where the "Calculate" button's status is dependent on the input field's validity.

- **Mapping and Iteration**: The `map` function is used to iterate over the `yearlyData` array and dynamically create multiple `ResultRow` components.

## Best Practices applied

- **Component Modularity**: The code is organized into separate components, promoting reusability and maintainability.

- **Consistent Naming**: The variable and function names follow a consistent and intuitive naming convention, enhancing code maintainability.

- **Use of Comments**: The code includes comments that provide explanations and documentation for certain functions and parameters, improving code understanding.

- **Use of Functional Components**: The choice to utilize functional components aligns with the best practices for simpler components that don't necessitate state or lifecycle methods.

- **Key Prop**: The `ResultRow` component assigns a unique `key` prop to each table row, optimizing react's rendering performance.

- **Use of `toFixed`**: The `toFixed` method is used to limit the decimal places of displayed values, ensuring consistent formatting.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/investment-calculator.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and visit `http://localhost:3000`
