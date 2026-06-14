import express from 'express'
import router from './router/router.js'
import { log } from 'node:console'
import cors from 'cors'
import connectDB from './db/db.js'


const app = express()
const PORT=3000
connectDB()


app.use(cors())
app.use(express.json())
app.use('/api',router)
app.listen(PORT, ()=>{
    console.log('running at http://localhost:'+PORT+'/api');
});
export default app