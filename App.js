const express = require('express');
const app = express();
const port = 4000;
const request = require('request');
//const cors = require('cors');
//var proxy = require('express-http-proxy');

//app.use(cors());
//app.use('/proxy', proxy('www.naver.com'));
/*
curl -v -X GET "https://dapi.kakao.com/v2/search/web" \
--data-urlencode "query=이효리" \
-H "Authorization: KakaoAK KakaoAK 20704dc08371287d883bef9f102d6bc4"
*/
app.get('/api/eosblack', (req, res, next) => {
    var options = {
        url: 'https://www.cryptofuture.co.kr/exchange/price/realTimeSelect/history',
        method:'get',
    };

    request(options, (error,response,b)=>{
        res.send(b);
    });
});


app.get('/api/kakao_search', (req, res, next) => {
    var options = {
        url: 'https://dapi.kakao.com/v2/search/web',
        method:'get',
        headers: {
          'Authorization': 'KakaoAK 20704dc08371287d883bef9f102d6bc4',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        //form:{
        //    query: req.query.query
        //},
        body:`query=${req.query.query}&size=50`
    };

    request(options, (error,response,b)=>{
        res.send(b);
    });
});


/*
app.get('/getUser/:username', function(req, res){
    fs.readFile( __dirname + "/../data/user.json", 'utf8', function (err, data) {
    var users = JSON.parse(data);
    res.json(users[req.params.username]);
});
*/

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});