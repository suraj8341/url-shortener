# 🔗 URL Shortener API

A simple URL Shortener API built using **Node.js**, **Express.js**, and **NanoID**. This project generates short URLs and redirects users to the original website.

## 🚀 Features

- Generate short URLs
- Redirect to the original URL
- REST API using Express.js
- Unique short codes using NanoID
- JSON request and response handling
- In-memory URL storage

## 📁 Project Structure

```
url-shortener/
│── server.js
│── package.json
│── package-lock.json
│── README.md
│── .gitignore
│── node_modules/
```

## 🛠️ Technologies Used

- Node.js
- Express.js
- NanoID
- REST Client / Postman

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Suraj8341/url-shortener.git
```

Go into the project:

```bash
cd url-shortener
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

## 📌 API Endpoints

### Home

```
GET /
```

Returns:

```
URL Shortener API is running!
```

### Create Short URL

```
POST /shorten
```

Request Body:

```json
{
  "url": "https://www.google.com"
}
```

Response:

```json
{
  "originalUrl": "https://www.google.com",
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Redirect

```
GET /:shortCode
```

Redirects the browser to the original URL.

## 📚 What I Learned

- Express.js
- REST APIs
- GET & POST routes
- JSON handling
- Route parameters
- URL redirection
- Backend development fundamentals

## 👨‍💻 Author

**Suraj Neemkar**
