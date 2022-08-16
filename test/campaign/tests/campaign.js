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
describe("Get Campaign", function () {
  it("Success Get Campaign", function (done) {
    api
      .get("campaigns")
      .set("Content-type", "application/json")
      .end(function (err, res) {
        expect(res.status).to.equals(200);
        done();
      });
  });
});
