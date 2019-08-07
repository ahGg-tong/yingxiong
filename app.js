

const express = require('express');
const app = express();
app.listen(3000, () => console.log('服务器启动了'));

app.use(express.static('manager'));
app.use('/uploads', express.static(__dirname + '/uploads'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const dp = require('./dp.js');


//  获取英雄的接口
app.get('/getHeroes', (req, res) => {
    dp('select * from heroes', null, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


// 添加英雄的接口
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});


app.post('/addHero', upload.single('heroIcon'), (req, res) => {
    let sql = 'insert into heroes set ?';
    let values = {
        name: req.body.heroName,
        nickname: req.body.heroNickName,
        skill: req.body.skillName,
        file: req.file.path
    };


    dp(sql, values, (err, result) => {
        if (err) {
            res.send({code: 201, message: '添加失败'});
        } else {
            res.send({code: 200, message: '添加成功'});
        }
    });
});