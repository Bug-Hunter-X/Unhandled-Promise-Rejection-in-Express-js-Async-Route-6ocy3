# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Improper error handling in these scenarios can lead to application crashes or unexpected behavior.

## The Problem

The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  If the asynchronous operation fails, the error is caught, but not propagated correctly, causing a silent failure.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections in Express.js routes by using a centralized error handler that handles all uncaught exceptions.