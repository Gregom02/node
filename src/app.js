import express from 'express';
import {dirname, join} from 'path'; 
import { fileURLToPath } from 'url';
import indexroutes from './routes/index.js'
import {PORT} from './config.js'

/* iniciamos express*/
const apt = express();

app.get('/', (red, res)=> res.send('Hola,bienvenidoo'));

app.listen(3000);
console.log("El servidor escucha en el puerto 300");

const app=express();


const _dirname=dirname(fileURLToPath(import.meta.url));

console.log(__dirname);



app.set('view engine','ejs');
app.set('views',join(__dirname, 'views'));

//enrutador
app.use(indexroutes);

//configurar public como statics
app.use(express.static(join,(_dirname, 'public')));

 
 
app.listen(process.env.PORT || port);
console.log("logrado");

app.listen(PORT);

 
 
 
