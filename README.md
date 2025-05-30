# YumFinder

YumFinder is a React application for discovering meals and ingredients using [TheMealDB API](https://www.themealdb.com/api.php). It features authentication, protected routes, ingredient browsing, meal search, and detailed meal views.

## Features

-- **Authentication**: Simple login with protected routes (currently handled with static, hardcoded credentials; can be integrated with server-side authentication in the future).
- **Meal Search**: Search for meals by name.
- **Ingredient List**: Browse and select ingredients to see related meals.
- **Meal Details**: View detailed information and instructions for each meal.
- **Responsive UI**: Built with Tailwind CSS for modern styling.

## Project Structure

```
.env
public/
  meal_logo.svg
  search.svg
src/
  App.jsx
  main.jsx
  index.css
  components/
    Banner.jsx
    Card.jsx
    Footer.jsx
    Header.jsx
    LoadingIndicator.jsx
    MealCard.jsx
    SearchForm.jsx
  layout/
    MainLayout.jsx
  views/
    Home.jsx
    Ingredients.jsx
    MealDetails.jsx
    MealsByIngredient.jsx
  auth/
    components/
      ProtectedRoute.jsx
    context/
      AuthContext.jsx
    views/
      Login.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd react-project
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   The project uses a `.env` file for API configuration. By default, it uses:

   ```
   VITE_API_BASE_URL=https://www.themealdb.com/api/json/v1/1
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

### Build for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Usage

- **Login:** Use username `admin` and password `1111` to log in.
- **Home:** Search for meals or view random meals.
- **Ingredients:** Browse ingredients and click to see related meals.
- **Meal Details:** Click on a meal to view its details, ingredients, and instructions.

## Customization

- **Styling:** Uses Tailwind CSS. Customize styles in [`src/index.css`](src/index.css).
- **API:** Change the API base URL in the `.env` file if needed.

## ESLint & Formatting

- ESLint is configured in [`eslint.config.js`](eslint.config.js) for React and hooks best practices.
- Tailwind CSS is integrated via [`vite.config.js`](vite.config.js).

## License

This project is for educational/demo purposes.

---

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
