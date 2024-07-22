# Library Management System

This is a simple Library Management System built with React for the frontend and a RESTful API for the backend. The system allows you to manage books, members, and borrowed books.

## Features

- View a list of books, members, and borrowed books.
- Add new books and members.
- Borrow books and return them.
- Delete books.

## Technologies Used

- **Frontend:** React
- **Backend:** Flask
- **Database:** SQLite (or any preferred database)
- **HTTP Client:** Axios

## Installation

### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/daxeshchothani/library-management-frontend.git
    cd library-management-system
    ```

2. **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the `backend` directory and add your MongoDB URI and any other environment variables:**

    ```env
    your Url
    ```

5. **Start the backend server:**

    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the `frontend` directory:**

    ```bash
    cd frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the `frontend` directory and add your API URL:**

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. **Start the frontend server:**

    ```bash
    npm start
    ```

## Usage

Once the servers are running, you can access the application at `http://localhost:3000`. The backend server will be running at `http://localhost:5000`.

### Book Management

- **View Books:** Navigate to the "Books" tab to see a list of books.
- **Add Book:** Use the form to add a new book.
- **Delete Book:** Click the "Delete" button next to a book to remove it from the list.

### Member Management

- **View Members:** Navigate to the "Members" tab to see a list of members.
- **Add Member:** Use the form to add a new member.

### Borrowed Books

- **View Borrowed Books:** Navigate to the "Borrowed Books" tab to see a list of borrowed books.
- **Borrow Book:** Use the form to borrow a book.
- **Return Book:** Click the "Return" button next to a borrowed book to mark it as returned.

## API Endpoints

The backend provides the following API endpoints:

### Books

- **GET /books:** Get a list of all books.
- **POST /books:** Add a new book.
- **DELETE /books/:id:** Delete a book by ID.

### Members

- **GET /members:** Get a list of all members.
- **POST /members:** Add a new member.

### Borrowed Books

- **GET /borrowed-books:** Get a list of all borrowed books.
- **POST /borrowed-books:** Borrow a book.
- **PUT /borrowed-books/:id/return:** Mark a borrowed book as returned.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.



## Contact

If you have any questions or feedback, feel free to contact us at daxeshchothani.com.

