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
module.exports = function (name, email, occupation, password) {
  describe("Register", function () {
    it("Success Register", function (done) {
      api
        .post("register")
        .set("Content-type", "application/json")
        .send({
          name: name,
          email: email,
          occupation: occupation,
          password: password,
        })
        .end(function (err, res) {
          expect(res.status).to.equals(200);
          global.email = res.body.data.email;
          console.log(res.body.meta);
          done();
        });
    });
  });
};
