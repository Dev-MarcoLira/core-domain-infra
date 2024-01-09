import { Request, Response, Router } from 'express'
const router = Router()

router.get('/student', (_, res: Response) => { 

    
    res.send('students route')

})

router.post('/student', (req: Request, res: Response) => {

    const { name, email, password } = req.body

    if(!name){
        res.status(500)
        res.send('name is missing')
    }
        
    if(!email){
        res.status(500)
        res.send('email is missing')
    }

    if(!password){
        res.status(500)
        res.send('password is missing')
    }

    res.status(201)
    res.send('students route')

})

export default router