const express = require('express')
const app = express();

const mealsRouter = require('./data/meals.json');
const reviewRouter = require('./data/reviews.json');
const reservationRouter=require('./data/reservations.json');
app.set('reservationRouter',reservationRouter)
app.set('mealsRouter', mealsRouter);
app.set('reviewRouter', reviewRouter);
app.use(require('./routes/reservation'))
app.use(require('./routes/reservations'))
app.use(require('./routes/meal'))
app.use(require('./routes/large-meals'));
app.use(require('./routes/cheap-meals'));
app.use(require('./routes/meals'));

app.listen(8000);