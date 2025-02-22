**A Movie Application**
[Live Link](https://movie-app-demo-react.netlify.app/)

🤖 Introduction
Built with React.js for the user interface, Appwrite for the Trending Movies Algorithm, and styled with TailwindCSS, Moodflix is a website project designed to help beginners get started with learning React.js. The platform offers a sleek and modern experience for browsing and discovering movies.

⚙️Features
1. Browse All Movies: Explore a wide range of movies available on the platform.
2. Search Movies: Easily search for specific movies using a search function.
3. Trending Movies Algorithm: Displays trending movies based on a dynamic algorithm.
4. Modern UI/UX: A sleek and user-friendly interface designed for a great experience.
5. Responsiveness: Fully responsive design that works seamlessly across devices.
   and many more, including code architecture and reusability

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

**Git
Node.js
npm (Node Package Manager)**

**Cloning the Repository**
```
git clone https://github.com/shajeebHaider/movie-app.git
cd movie-app
```
**Installation**

Install the project dependencies using npm:
```
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:
```
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) API and [Appwrite](https://apwr.dev/JSM050) credentials. You can obtain these credentials by signing up on the [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) and creating a new project on the [Appwrite](https://apwr.dev/JSM050).

**Run the Project**
```
npm run dev
```

**Open http://localhost:5173 in your browser to view the project.**

