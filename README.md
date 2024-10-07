
# Streaming App Setup Guide

This guide will help you set up and run the streaming app, which includes NGINX-RTMP for video streaming, a backend server, and a client React app. You will also be able to add overlays on the video during the stream.

## Prerequisites

Before starting, ensure you have the following installed:

- **Docker** (for NGINX-RTMP server and FFmpeg setup)
- **Node.js and npm** (for backend and client)

## Steps to Set Up the Project

### 1. Fork and Clone the Repository

1. First, fork the repository to your GitHub account.
2. Then, clone the forked repository to your local system using the following command:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

### 2. NGINX-RTMP Setup

1. Open the `nginx-rtmp` folder in your CLI.
2. Build the NGINX and RTMP images by running the following command:

   ```bash
   docker compose --env-file .env up
   ```

   **Note:** Install Docker first if you haven’t done so.

3. Stop the NGINX service after it's built.

4. Add the video file to be streamed inside your `ffmpeg` folder.
5. Make necessary changes in the `entrypoint` code in the `Dockerfile` and save it.

### 3. Client Setup

1. Open the `client` folder.
2. Install dependencies by running:

   ```bash
   npm i
   ```

   or

   ```bash
   npm install
   ```

3. Stop the React app for now (if it's running).

### 4. Backend Setup

1. Open the `backend` folder.
2. Start the backend by running:

   ```bash
   npm start
   ```

### 5. Configure Environment Variables

Replace the environment variables in your `.env` files according to your project configuration.

## Running the Application

Now, run the following in the given order:

1. **NGINX-RTMP Server**:
   Run the NGINX-RTMP server using:

   ```bash
   docker compose --env-file .env up
   ```

2. **Backend Server**:
   Start the backend server.

3. **Client (React App)**:
   Start the React app.

   ```bash
   npm start
   ```

## Features

- You can add overlays (e.g., logos, text) on the video while streaming.

---

Feel free to open an issue or contact us if you face any problems!
