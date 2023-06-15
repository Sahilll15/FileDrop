File Drop Backend
<hr>
The File Drop Backend is a powerful and secure server application that complements the File Drop frontend, allowing users to seamlessly upload, download, and manage files in a secure and efficient manner. Built with Node.js and Express.js, this backend provides a reliable foundation for the File Drop application.

Key Features
<hr>
File Upload: Users can easily upload files of various types and sizes to the server, ensuring secure and efficient storage.<br>
File Download: Seamless file download functionality allows users to retrieve their files with ease, maintaining data integrity throughout the process.

File Management
<hr>
Users have full control over their uploaded files, including options for deletion and retrieval.

Prerequisites
<hr>
Before setting up the File Drop Backend, ensure the following prerequisites are met:<br>
Node.js installed on your machine.<br>
Access to a MongoDB database for storing file information.

Installation
<hr>
Follow these steps to set up and run the File Drop Backend:

1. Clone the repository to your local machine:<br>
   `git clone https://github.com/Sahilll15/FileDrop.git`

2. Install the dependencies:<br>
   `cd FileDrop`<br>
   `npm install`

3. Start the server:<br>
   `npm start`

API Endpoints
<hr>
The File Drop Backend provides the following API endpoints:

File Upload: POST /api/files<br>
Uploads a file to the server.<br>
Request body:<br>
file (file): The file to be uploaded.

File Download: GET /files/:id<br>
Downloads a file from the server.<br>
Parameters:<br>
uuid (string): The unique identifier of the file.

Acknowledgements
<hr>
The File Drop Backend utilizes the following technologies:

Node.js - https://nodejs.org/<br>
Express.js - https://expressjs.com/<br>
MongoDB - https://www.mongodb.com/

Frontend
<hr>
The frontend is hosted using Netlify: https://filedroppp.netlify.app/<br>
Frontend repository: https://github.com/Sahilll15/FileDrop-Client.git
