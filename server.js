import express from 'express';
import { hostname } from 'os';
import { env } from 'process';

const PORT = 3000;
const HOST = '0.0.0.0';
const HOSTNAME = hostname();

const app = express();
app.get('/', (req, res) => {
    res.json({
        message: `Hello from ${HOSTNAME}`,
        timestamp: Date.now(),
        app: env.APP_NAME,
        headers: req.headers,
        ip: req.ip,
        hostname: req.hostname,
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
