import express from 'express';

const app = express();

//para o express entender que é uma api 
app.use(express.json());

const users = [
        'victor',
        'wilker',
        'santos',
        'oliveira',
        'wagner'
    ]


// search 
app.get('/users',(request,response)=>{
    const search = String(request.query.search);
    const FilterUser = search ? users.filter(user => user.includes(search)) : users;

    return response.json(FilterUser);
});


app.get('/',(request,response)=>{
    //home da api 
    return response.json("API inicializada");
});

app.get('/users', (request, response)  => {
    //console.log('Hello World, Routes success');
    return response.json(users);
});

app.get('/users/:id', (request, response)  => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user );
});



app.post('/users',(request,response) =>{
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});


app.listen(3000);