# Todo List Application

This is a frontend Todo List application built with Next.js as part of an assessment project. It provides a user-friendly interface for managing tasks with various features.

## Features

- **Create Task**: Add new tasks to your list.
- **Update Task**: Edit existing tasks.
- **Mark as Done**: Mark tasks as completed.
- **Search Tasks**: Filter tasks using a search functionality.
- **Expandable List**: View tasks in an expandable list format, showing description and last update timestamp.

## Technologies Used

- React
- Tailwind CSS
- JSON Server (for dummy data)

## Project Structure

The project is organized as follows:

- `pages/`: Contains the main pages of the application
- `components/`: Reusable React components
- `styles/`: CSS and Tailwind configurations
- `data/`: Dummy JSON data for tasks

## Setup and Installation

1. Clone the repository:
  git clone https://github.com/Chowdaa/TodoList.git
2. Navigate to the project directory:
   cd TodoList/todo-app
3. Install dependencies:
   npm install
4. Start the JSON server (for dummy data):
   npx json-server --watch data/db.json --port 3001
5. In a new terminal, run the development server:
   npm run dev
6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Implementation Details

- State management is handled using React's useState and useEffect hooks.
- Tailwind CSS is used for styling, ensuring a responsive and clean design.
- A dummy JSON server is used to simulate backend data storage.

## Server-Side Rendering (SSR)

The application leverages Next.js's built-in SSR capabilities, ensuring faster initial page loads and improved SEO.

## URL Parameters

Search functionality is implemented using URL parameters. When a search is performed, the query is reflected in the URL, allowing for shareable search results and maintaining state on page refresh.

## Future Enhancements

- Implement user authentication
- Add task categories or tags
- Introduce drag-and-drop functionality for task reordering
- Implement data persistence with a real backend database

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/Chowdaa/TodoList/issues) if you want to contribute.

## License

This project is open source and available under the [MIT License](LICENSE).
