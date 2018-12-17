import {Router, Request, Response} from 'express';

const router = Router();

function largotiempo(){
    setTimeout(()=>{
        console.log('soy el asincrono-------------------------------------------------------------');
    },3000);
}

router.get('/heroes',(req:Request, res:Response)=>{
    console.log('funcion normal');
    largotiempo();
    console.log('finfuncion normal');
    res.json({
        ok:true
    })
});

export default router;