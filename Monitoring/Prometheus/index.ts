import express from 'express';

const app = express();
app.use(express.json());

app.get('/cpu', (req, res)=>{
    for(let i=0; i<1e8; i++) {
        Math.random();
    }
    res.json({ message: 'CPU load generated' });
})

app.get('/users', (req, res)=>{
    res.json({message:"user"})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});