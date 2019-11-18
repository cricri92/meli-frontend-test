const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static('public'));

app.listen(app.get('port'), () => {
	console.log(`Server init at http://localhost:${app.get('port')}/`);
});