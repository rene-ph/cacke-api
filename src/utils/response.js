class Response {
    constructor(data, message, status) {
        this.message = message;
        this.data = data;
        this.status = status;
    }

    getResponse() {
        return {
            message: this.message,
            data: this.data,
            status: this.status
        }
    }
}

module.exports = Response;