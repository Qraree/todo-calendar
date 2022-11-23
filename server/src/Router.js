const EventEmitter = require('events')

const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error(`${method} already exists in ${path}`)
        }

        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
             handler(req, res)
        })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }

    post(path, handler) {
        this.request('POST', path, handler)
    }

    put(path, handler) {
        this.request('PUT', path, handler)
    }

    delete(path, handler) {
        this.request('DELETE', path, handler)
    }

}

module.exports = Router