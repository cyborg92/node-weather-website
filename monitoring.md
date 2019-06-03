# Express status monitor

It is an incredibly simple, self-hosted module,to add to Express server. It exposes a /status route that reports real-time server metrics with the help of Socket.io and Chart.js.

### Step 1. 
    sudo npm install express-status-monitor --save

### Step 2. 
    app.use(require('express-status-monitor')()); 

This need to be added before any other middleware or router

### Step 3. 

Run server and go to serverurl/status

# Clinic.js

Clinic.js includes three tools to help diagnose and pinpoint Node.js performance issues.

link for clinic.js https://clinicjs.org/

### Doctor
    Collects metrics by injecting probes
    Assess health and heuristics
    Creates recommendations
### Bubbleprof – a new, completely unique, approach to profiling  Node.js code
    Collects metrics using async_hooks
    Tracks latency between operations
    Creates bubble graphs
### Flame – uncovers the bottlenecks and hot paths in code with flamegraphs
    Collects metrics by CPU sampling
    Tracks top-of-stack frequency
    Creates flame graphs

## Installing Clinic.js

### Step 1. 
    npm install -g clinic

### Step 2. 
    clinic mode name(doctor/flame/bubbleprof) --node server-starting-filename.js

### Step 3. download a package to run loadtesting, here using autocannon, install it using npm 
    npm install -g autocannon

### Step 4. In a parallel terminal run autocannon -c number of connections -a amount of requests  server url
    autocannon -c 1000 -a 10000 http://localhost:3000

### Step 5. In the terminal running clinic, press ctrl+c to stop the process

This would stop the analysis and create a html page and opens it in browser with all the analysis


# Pm2

Running Node.js applications in production gets a lot easier with PM2. It’s a process manager that easily run apps in cluster mode.

## Installing pm2

 ### Step 1. 
    sudo npm install -g pm2

 ### Step 2. Start the pm2 process

    pm2 start app.js -i 0

 The -i 0 flag stands for instances. This will run Node.js application in cluster mode, where the 0 stands for number of CPU cores or user can give as string max so it detects by itself to run on max cores. A negative integer can be given which will evaluate to max-integer.

### Step 3

    pm2 monit
