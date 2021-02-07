import express from 'express'
import PostMessage from '../models/postMessage.js'
const router = express.Router();

//Getting all posts - 
router.get('/', async (req,res)=>{
    try{
        const posts = await PostMessage.find()
        res.status(200).json(posts)
    }
    catch(e)
    {
        console.log(e)
        res.status(404).json(e)
    }
})

//Posting a new post -
router.post('/', (req,res)=>{})
router.get('/', (req,res)=>{})
router.get('/', (req,res)=>{})
export default router