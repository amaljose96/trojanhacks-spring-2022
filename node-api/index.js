const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 5001
const { createClient }  = require('redis');
const redisClient = createClient();
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect();


//TODO: REWRITE AS POST
app.get("/login",(req,res)=>{
    let info = req.query;
    redisClient.get(info.username).then(data=>{
        data=JSON.parse(data)
        data.liveTime = new Date().getTime()
        redisClient.set(info.username, JSON.stringify(data)).then(()=>{
            res.send(data)
        })
    }).catch(e=>{
        info.liveTime = new Date().getTime()
        redisClient.set(info.username, JSON.stringify(info)).then(()=>{
            res.send(info)
        })
    })
});

app.get("/users",(req,res)=>{
    let currentUser = req.query.username;
    redisClient.get(currentUser).then(data=>{
        data=JSON.parse(data)
        data.liveTime = new Date().getTime()
        redisClient.set(currentUser, JSON.stringify(data))
    })
    redisClient.keys("*").then(data=>{
        Promise.all(data.filter(name=>name!=currentUser).map(username=>{
            console.log("username",username)
            return redisClient.get(username).then(data=>{
                data=JSON.parse(data)
                let currentTime = new Date().getTime()
                return {
                    username:data.username,
                    online:(currentTime - data.liveTime) < 60*1000
                }
            })
        })).then(data=>{
            res.send(data)
        })
    })
})


app.get("/updateUser",(req,res)=>{
    let from = req.query.old;
    let to = req.query.new;
    console.log(req.query,from,to)
    redisClient.get(from).then(data=>{
        redisClient.del(from).then(()=>{
            let newData = {
                username:to,
                liveTime:new Date().getTime()
            }
            console.log("Updated to ",newData)
            redisClient.set(to, JSON.stringify(newData)).then(()=>{
                res.send(newData)
            })
        })
    });
})

app.listen(port, () => {
    console.log(`DuoSign API listening on port ${port}`)
})