# Overview

This repository is a proof of concept for listening to Venari DevOps version 4.1+ web hooks. The following events are supported:

1) Server Started
2) Job Running
3) Job Paused
4) Job Failed
5) Job Completed
6) Job Alert
7) Job Finding

# Environment Variables

There are three required environment variables in order for the server to properly communicate with the Venari DevOps server and decript the event messages.

1) VENARI_DEVOPS_WEBHOOK_SECRET - Shared key configured in Venari DevOps Admin Web Hook Credentials used for decrypting the event messages
2) VENARI_DEVOPS_URL - Base URL to the Venari DevOps controller node
3) VENARI_DEVOPS_APIKEY - API key used to communicate with the Venari DevOps Controller configured in the controller's web application in the Settings UI.

# Setup

````
npm install
````

# Build
````
npm run build
````

# Run

````
npm run start
````
