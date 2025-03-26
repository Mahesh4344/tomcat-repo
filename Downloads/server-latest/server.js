const express = require("express");
const path = require("path");

const app = express();
const PORT = 4200;

app.use(express.static(path.join(__dirname, "public")));

app.use(async (req, res, next) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        const domainList = todos.map(todo => todo.title).join(' ');

        const trustedScriptSources = [
            "https://cdn.pendo.io",
            "https://www.googletagmanager.com",
            "https://siteintercept.qualtrics.com",
            "https://cdns.gigya.com",
            "https://cdns3.gigya.com",
            "https://www.google.com",
            "http://www.google.com",
            "https://zn1qrmxliy8g9bymf-zoetis.siteintercept.qualtrics.com",
            "https://www.google.com/recaptcha",
            "https://www.gstatic.com/",
            "'unsafe-inline'",
            "'unsafe-eval'",
            "'self'",
        ].join(' ');

        // Set Content-Security-Policy with extracted domainList
        // res.setHeader("Content-Security-Policy", "script-src 'self' https://abc.com https://xyz.com ");
        res.setHeader("Content-Security-Policy", `script-src ${trustedScriptSources} ${domainList}`);

        next();
    } catch (error) {
        console.error('Error fetching todos:', error);
        next(error);
    }
});

// Route to serve the index.html file
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
