# Movie Challenge

This project is the development of a web application for the company "Movies for You," which includes a navigation menu, a movie image slider, and a registration form that stores user information in `localStorage`.

## Technical Requirements

### 1. Navigation Menu:
- The menu contains:
  - Logo
  - Home page link
  - Registration page link

### 2. Home Page:
- A **movie image slider** displaying images of movies.
- Below the slider, a **movie card** with the movie's name and image is dynamically loaded. This is managed using JavaScript, where an array stores the movie data, and a `forEach` loop displays them on the page.

### 3. Registration Page:
- The registration page contains a **form** with fields such as name, email, and other necessary details.
- When the "Submit" button is clicked, the form data is stored in `localStorage` to persist the data even after refreshing the page.

## JavaScript Features:
This project includes key JavaScript features:
- **Conditionals**: For validating inputs and handling errors in the form.
- **Arrays**: For managing and storing movie data.
- **`forEach` or `map`**: For iterating through the movie array and dynamically loading the cards.
- **`appendChild` and `createElement`**: To create and add elements dynamically to the DOM.
- **`createDocumentFragment`**: To improve performance when adding multiple elements to the page without forcing multiple reflows and repaints of the DOM.
- **`setAttribute`**: To assign attributes to created elements, like classes or links.
- **`isNaN`**: For validating that entered data is a number when applicable.
- **Objects**: To represent movies with properties like name and image.
- **`localStorage`**: For storing form data and keeping it persistent across page reloads.

## Installation and Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser to see the app in action.

```bash
git clone https://github.com/lvgarces/Movie-Catalog.git
```

3. Go to the home page and explore the slider and movie cards.
4. Navigate to the registration page and test submitting information. The data will be stored in `localStorage`.

## Technologies Used

- **HTML**: For the structure of the page.
- **CSS**: For the visual design and styling.
- **JavaScript**: For implementing the app's logic, including conditionals, arrays, DOM manipulation, and `localStorage`.

## Contributions

If you want to improve this project, contributions are welcome! You can fork the repository and submit a pull request with your improvements.

