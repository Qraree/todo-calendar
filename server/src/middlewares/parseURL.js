module.exports = (baseUrl) => (req, res) => {
    const urlParser = new URL(req.url, baseUrl)
    const params = {}
    urlParser.searchParams.forEach((value, key) => params[key] = value)
    req.pathname = urlParser.pathname;
    req.params = params;
}