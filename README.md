<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Drop Backend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
        }

        hr {
            border: none;
            border-top: 1px solid #ccc;
            margin: 20px 0;
        }

        code {
            font-family: Consolas, monospace;
            background-color: #f5f5f5;
            padding: 2px 4px;
            border-radius: 4px;
        }

        pre {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }

        .key-features {
            margin-bottom: 20px;
        }

        .key-features h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .key-features ul {
            margin: 0;
            padding: 0 20px;
        }

        .prerequisites {
            margin-bottom: 20px;
        }

        .prerequisites h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .prerequisites ul {
            margin: 0;
            padding: 0 20px;
        }

        .installation {
            margin-bottom: 20px;
        }

        .installation h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .installation pre {
            margin: 0;
        }

        .api-endpoints {
            margin-bottom: 20px;
        }

        .api-endpoints h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .api-endpoints pre {
            margin: 0;
        }

        .acknowledgements {
            margin-bottom: 20px;
        }

        .acknowledgements h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .acknowledgements ul {
            margin: 0;
            padding: 0 20px;
        }
    </style>
</head>

<body>
    <h1>File Drop Backend</h1>

    <div class="key-features">
        <h2>Key Features</h2>
        <ul>
            <li>File Upload: Users can easily upload files of various types and sizes to the server, ensuring secure and
                efficient storage.</li>
            <li>File Download: Seamless file download functionality allows users to retrieve their files with ease,
                maintaining data integrity throughout the process.</li>
        </ul>
    </div>

    <hr>

    <div class="file-management">
        <h2>File Management</h2>
        <p>Users have full control over their uploaded files, including options for deletion and retrieval.</p>
    </div>

    <div class="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
            <li>Node.js installed on your machine.</li>
            <li>Access to a MongoDB database for storing file information.</li>
        </ul>
    </div>

    <div class="installation">
        <h2>Installation</h2>
        <pre>
1. Clone the repository to your local machine:
   <code>git clone https://github.com/Sahilll15/FileDrop.git</code>

2. Install the dependencies:
   <code>cd FileDrop
npm install</code>

3. Start the server:
   <code>npm start</code>
        </pre>
    </div>

    <hr>

    <div class="api-endpoints">
        <h2>API Endpoints</h2>
        <pre>
File Upload: POST /api/files

Uploads a file to the server.
Request body:
file (file): The file to be uploaded.

File Download: GET /files/:id

Downloads a file from the server.
Parameters:
uuid (string): The unique identifier of the file.
        </pre>
    </div>

    <div class="acknowledgements">
        <h2>Acknowledgements</h2>
        <ul>
            <li>Node.js - <a href="https://nodejs.org/">https://nodejs.org/</a></li>
            <li>Express.js - <a href="https://expressjs.com/">https://expressjs.com/</a></li>
            <li>MongoDB - <a href="https://www.mongodb.com/">https://www.mongodb.com/</a></li>
        </ul>
    </div>
</body>

</html>
