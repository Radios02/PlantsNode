import express from 'express';
import path from 'path';
import __dirname from './until/rootpath.js';
const app = express();
app.use(express.json());


const flowers = [
    { name: "Rózsa", category: "évelő" },
    { name: "Tulipán", category: "egyéves" },
    { name: "Napraforgó", category: "egyéves" },
    { name: "Vitorlavirág", category: "szobanövény" },
    { name: "Harangláb", category: "évelő" },
    { name: "Pipacs", category: "mezei" },
    { name: "Bársonyvirág", category: "egyéves" }

];

const trees = [
    { name: "Tölgy", category: "lombhullató" },
    { name: "Fenyő", category: "örökzöld" },
    { name: "Feketefenyő", category: "örökzöld" },
    { name: "Babérmeggy", category: "örökzöld" },
    { name: "Hárs", category: "lombhullató" },
    { name: "Cseresznye", category: "lombhullató" },
    { name: "Juhar", category: "lombhullató" }
];


app.get('/', (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get('/flowers', (req, res) => {
    res.json(flowers);
});

app.get('/trees', (req, res) => {
    res.json(trees);
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

app.listen(3010, () => {
    console.log('Server runs on port 3010');
});