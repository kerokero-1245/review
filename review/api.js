const express = require('express');

const app = express();
const parser = require('body-parser');
const cors = require('cors');
const { getJsonData, postJsonData } = require('./jsonFunction');

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(cors());

app.listen(3000,()=>{console.log("Server起動");});

app.post('/orders', function(req, res) {
    const randomOrderNo = Math.random().toString(32).substring(3);
    const jsonPath = './server/orderData.json';
    const jsonData = getJsonData(jsonPath);
    var processOrder = jsonData.find(c => c.id === parseInt(randomOrderNo));

    while(processOrder){
        processOrder = jsonData.find(c => c.id === parseInt(randomOrderNo));
    }

    var json = {
        "id":randomOrderNo,
        "serviceId":req.body.serviceId,
        "status":"CREATED"
    }
    const data_ = postJsonData(json,jsonPath);
    res.json(json);
});

app.post('/billings', function(req, res) {
    const randomOrderNo = Math.random().toString(32).substring(3);
    const jsonPath = './server/billingData.json';
    const jsonData = getJsonData(jsonPath);

    var processOrder = jsonData.find(c => c.id === parseInt(randomOrderNo));

    while(processOrder){
        processOrder = jsonData.find(c => c.id === parseInt(randomOrderNo));
    }
    const json = {
        "id":randomOrderNo,
        "orderId":req.body.orderId,
        "amount":req.body.amount
    }
    const data_ = postJsonData(json,jsonPath);
    res.json(json);
});

/* 以下各Method定義。コーディングテスト対象外のため未実装 */

app.get('/orders', function(req, res) {
    // const randomOrderNo = Math.random().toString(32).substring(10);
    // var processOrder = orderData.find(c => c.id === parseInt(randomOrderNo));
    // while(!processOrder){
    //     processOrder = orderData.find(c => c.id === parseInt(randomOrderNo));
    // }
    // orderData.push(randomOrderNo,req.serviceId,"CREATED");
    // res.send(orderData[index]);
    // console.log("getメソッド");
});
app.get('/billings', function(req, res) {
    // const randomOrderNo = Math.random().toString(32).substring(10);
    // var processOrder = orderData.find(c => c.id === parseInt(randomOrderNo));
    // while(!processOrder){
    //     processOrder = orderData.find(c => c.id === parseInt(randomOrderNo));
    // }
    // orderData.push(randomOrderNo,req.serviceId,"CREATED");
    // res.send(orderData[index]);
    // console.log("getメソッド");
});
app.patch('/orders', function(req, res) {
    // const processOrder = orderData.find(c => c.id === parseInt(req.params.id));
    // if (!processOrder) return res.status(404).send('更新対象は見つかりませんでした');
    // const index = orderData.indexOf(processOrder);
    // orderData[index].serviceId = req.query;
    // res.send(orderData[index]);
});
app.patch('/billings', function(req, res) {
    // const processOrder = orderData.find(c => c.id === parseInt(req.params.id));
    // if (!processOrder) return res.status(404).send('更新対象は見つかりませんでした');
    // const index = orderData.indexOf(processOrder);
    // orderData[index].serviceId = req.query;
    // res.send(orderData[index]);
});
app.delete('/orders', function(req, res) {
    // const processOrder = orderData.find(c => c.id === parseInt(req.params.id));
    // if (!processOrder) return res.status(404).send('削除対象は見つかりませんでした');
    // const index = orderData.indexOf(processOrder);
    // orderData.splice(index, 1);
});
app.delete('/billings', function(req, res) {
    // const processOrder = orderData.find(c => c.id === parseInt(req.params.id));
    // if (!processOrder) return res.status(404).send('削除対象は見つかりませんでした');
    // const index = orderData.indexOf(processOrder);
    // orderData.splice(index, 1);
});