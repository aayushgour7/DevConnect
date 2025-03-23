const express = require('express'); 
const connectDB = require('./config/db')

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({extended : false}))

app.get('/',(req,res)=>res.send('API Running'))

// Define routes
app.use('/api/users', require('./api/routes/users'));
app.use('/api/auth', require('./api/routes/auth'));
app.use('/api/profile', require('./api/routes/profile'));
app.use('/api/posts', require('./api/routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{ console.log(`🚀 DevConnector started on PORT: ${PORT}`) });