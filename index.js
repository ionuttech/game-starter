const express = require('express');
const app = express();
app.use('/scripts', express.static(__dirname + '/node_modules/phaser/dist'));
app.use(express.static('game'));

app.listen(3000, () => {
	console.log('Game running on port 3000');
});
