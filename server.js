const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());
const PORT =  5000;



const ProductRoutes = require('./Routes/ProductRoutes');

const PromotionRoutes = require('./Routes/PromotionRoutes');

const TraderRoutes = require('./Routes/TraderRoutes');
const CustomerRoutes = require('./Routes/CustomerRoutes');

const CusLogin = require('./Routes/CusLogin');


const BuyRoutes = require('./Routes/BuyRoutes');

const TradeLogin = require('./Routes/TradeLogin');



app.use(bodyparser());


app.use(ProductRoutes.routes()).use(ProductRoutes.allowedMethods());
app.use(PromotionRoutes.routes()).use(PromotionRoutes.allowedMethods());
app.use(TraderRoutes.routes()).use(TraderRoutes.allowedMethods());
app.use(CustomerRoutes.routes()).use(CustomerRoutes.allowedMethods());
app.use(TradeLogin.routes()).use(TradeLogin.allowedMethods());

app.use(CusLogin.routes()).use(CusLogin.allowedMethods());


app.use(BuyRoutes.routes()).use(BuyRoutes.allowedMethods());


app.use(ctx => {
 ctx.body = 'Koa server is running';
});

app.listen(PORT);

console.log(`Application is running on port ${PORT}`);