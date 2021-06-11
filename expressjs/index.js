const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./members')
// const logger = require('./middleware/logger')

const app = express();

const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Homepage routes
app.get('/', (req, res) => {
    res.render('index', {
        title: "Members App",
        members
    })
})

// Static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));