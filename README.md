# Web Portfolio Back-End - Node.js, Prisma, PostgreSQL
This repository contains the back-end of my web portfolio, built using Node.js, Express, Prisma ORM, and PostgreSQL. It serves as the API for managing the data behind the portfolio website, including handling content for the "About Me", "Projects", and "Contact Form" sections.

## Project Overview
The back-end is built with Node.js and Express to handle HTTP requests, while Prisma ORM interacts with the PostgreSQL database. The API exposes endpoints to manage various data for the portfolio, such as adding, updating, and deleting project details, managing user contact messages, and more.

This back-end is designed to power the Web Portfolio Front-End where I showcase various front-end and full-stack projects along with creative coding projects.

## Key Features
Project Management:

Allows adding, updating, and deleting portfolio project details (e.g., project name, description, tech stack).

Contact Form:

Users can send messages via the contact form on the portfolio website. The form submissions are stored in the database and can be accessed by the portfolio owner.

User Authentication:

Secure authentication endpoints are provided for portfolio admins (future enhancements), with token-based authentication for user access.

Prisma ORM:

All database operations (CRUD) are handled using Prisma, making it easy to interact with the PostgreSQL database.

Contact Form
POST /contact: Submit a contact form message (name, email, and message).

Authentication (future enhancements)
POST /auth/login: Admin login endpoint (will return a JWT token).

Technologies Used
Node.js: JavaScript runtime for building the back-end server.

Express: Web framework for Node.js used to create API endpoints.

Prisma ORM: An ORM tool that makes it easier to interact with a PostgreSQL database.

PostgreSQL: Relational database used to store project and contact form data.

JWT: JSON Web Tokens (for secure user authentication, planned for future use).

License
This project is licensed under the MIT License - see the LICENSE file for details.

Copyright Notice: All design elements, visuals, and intellectual property related to this back-end API are protected by copyright and cannot be copied, reproduced, or used without the express permission of the author.

