module.exports = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}