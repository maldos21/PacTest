const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.use(express.urlencoded())

app.get('/', function(req, res) {
    res.render("index.ejs");
});

app.post('/submit-form', (req, res) => {
    const username = req.body.firstname;
    res.send(username);
    res.end();
});

/*
app.get('/', (req, res) => {
    res.send(routingTest.html);
});
*/

app.get('/api/courses', (req, res) => {
    res.send(courses);
});



app.get('/api/courses/:id', (req, res) => {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {res.status(404).send("Course not Found");}// 404
    res.send(course);
});
// query parameters stored in object with bunch of key value pairs

// port
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('listening on port ${port}...'));
/*
app.post()
app.put()
app.delete()
*/
// 30.10