/*
 * @Author: bagusprakasa
 * @Date:   2022-08-15 06:07:22
 * @Last Modified by:   bagusprakasa
 * @Last Modified time: 2022-08-15 06:07:22
 */

const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require("dotenv").config();

const api = chai.request(process.env.URL);
module.exports = function (password) {
  describe("Login", function () {
    it("Success Login", function (done) {
      api
        .post("login")
        .set("Content-type", "application/json")
        .send({
          email: global.email,
          password: password,
        })
        .end(function (err, res) {
          expect(res.status).to.equals(200);
          global.token = res.body.data.token;
          done();
        });
    });
  });
};
