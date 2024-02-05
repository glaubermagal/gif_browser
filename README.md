# GIF Browser

A simple GIF Browser built with Next.js, TypeScript, and Docker.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [TODO](#todo)

## Introduction

The GIF Browser is a web application built with Next.js and TypeScript that allows users to browse and search for GIFs. It's designed to be easy to set up and deploy using Docker.

## Features

- Browse trending GIFs
- Search for specific GIFs
- Responsive design for various devices

## Prerequisites

Before you begin, ensure you have the following dependencies installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/glaubermagal/gif-browser.git
cd gif-browser
```

2. Build and run the Docker containers:

```bash
docker-compose up
```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the GIF Browser.

## Usage

- Open the GIF Browser in your browser.
- Use the search formfunctionality to find specific GIFs.

## Configuration

You can customize the application by modifying the environment variables in the `.env` file. See [`.env.example`](.env.example) for an example.

## TODO

- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add CI/CD pipeline