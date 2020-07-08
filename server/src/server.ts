import express from 'express';

const app = express();

app.get('/users', (request, response)  => {
    console.log('Hello World, Routes success');
    response.json([
        'victor',
        'wilker',
        'santos',
        'oliveira',
        'wagner'
    ]);
});

app.listen(3000);