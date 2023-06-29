const pool = require('Express');
mongoose.connect('localhost:27017/videojuegos', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;