import {Router} from 'express';
const router= router();
import {home, login, registro, insertUsers} from "../controllers/controllers.js";


//rutas
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/showUsers', showUsers);
router.post('/insertUsers', insertUsers);




router.get('/connect',  async(req,res)=>{
    const [result]=await pool.query('SElect 1+1 as result')
    res.json(result[0])
});




 
export default router;

