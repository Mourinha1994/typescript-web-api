import app from './app';
import * as chai from 'chai';
import chatHttp = require('chai-http');
import "mocha";

chai.use(chatHttp);

describe("Hello API Request", () => {
    it("Should return hello on call", async () => {
        return chai
            .request(app)
            .get("/")
            .then(res => {
                chai.expect(res.text).to.eql("Hello")
            })
    })
})