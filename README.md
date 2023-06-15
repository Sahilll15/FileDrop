
File Drop Backend

The File Drop Backend is a powerful and secure server application that complements the File Drop frontend, allowing users to seamlessly upload, download, and manage files in a secure and efficient manner. Built with Node.js and Express.js, this backend provides a reliable foundation for the File Drop application.

Key Features:
- File Upload: Users can easily upload files of various types and sizes to the server, ensuring secure and efficient storage.
- File Download: Seamless file download functionality allows users to retrieve their files with ease, maintaining data integrity throughout the process.

File Management:
Users have full control over their uploaded files, including options for deletion and retrieval.

Prerequisites:
Before setting up the File Drop Backend, ensure the following prerequisites are met:
- Node.js installed on your machine.
- Access to a MongoDB database for storing file information.

Installation:
Follow these steps to set up and run the File Drop Backend:

1. Clone the repository to your local machine:
   git clone https://github.com/Sahilll15/FileDrop.git

2. Install the dependencies:
   cd FileDrop
   npm install

3. Start the server:
   npm start

API Endpoints:
The File Drop Backend provides the following API endpoints:

- File Upload: POST /api/files
  - Uploads a file to the server.
  - Request body:
    - file (file): The file to be uploaded.

- File Download: GET /files/:id
  - Downloads a file from the server.
  - Parameters:
    - uuid (string): The unique identifier of the file.

Acknowledgements:
The File Drop Backend utilizes the following technologies:

- Node.js - https://nodejs.org/
- Express.js - https://expressjs.com/
- MongoDB - https://www.mongodb.com/

Frontend:
The frontend is hosted using Netlify: https://filedroppp.netlify.app/
Frontend repository: https://github.com/Sahilll15/FileDrop-Client.git
