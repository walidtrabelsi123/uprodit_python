# Uprodit Challenge

## Context

This project is part of a [challenge](https://doc.uprodit.com/docs/challenge/) started by [Uprodit](https://www.uprodit.com/). The goal of the challenge is to : creating an API with Python and Flask linked to a PostgreSQL database, and developing a modern user interface using React JS..

## Backend Component

Python API with Flask: In this part of the project, i've created an API using Python and the Flask framework. This API was designed to handle user data, stored in a PostgreSQL database. It provides endpoints for retrieving all existing user profiles and adding new profiles through POST requests.
This API serves as the core of the system, providing the data needed to power the search and filtering features

## Frontend Component

User Interface with React JS: The frontend part of this project relies on React JS, a modern JavaScript library for building interactive and responsive user interfaces. i've used React to develop a user-friendly interface that communicates with the Flask API that i created. Users can access a search page that allows them to filter user profiles based on different criteria. i've also integrated navigation between different pages for a smooth user experience, including the ability to add new users through a form.

## Tools

For this challenge, we are using:

- [React](https://reactjs.org/) 
- Javascript
- [Postgresql](https://www.postgresql.org/)
- [Python](https://www.python.org/)
- [Flask] (https://flask.palletsprojects.com/en/2.3.x/)

## Local setup

To get started working frontend locally with the project:

- cd frontend
- Run `npm start` inside the root folder

To get started working backend locally with the project:

- cd backend
- cd flaskapp
- cd uprodit 
- Run 'python app.py' inside the root folder

You can also use the provided Docker setup by running: