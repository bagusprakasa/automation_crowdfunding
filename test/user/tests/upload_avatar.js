/*
 * @Author: bagusprakasa
 * @Date:   2022-08-15 06:07:22
 * @Last Modified by:   bagusprakasa
 * @Last Modified time: 2022-08-15 06:07:22
 */

const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const fs = require("fs");
chai.use(chaiHttp);
require("dotenv").config();
const api = chai.request(process.env.URL);
module.exports = function (attach) {
  describe("Upload Avatar", function () {
    it("Success upload avatar", function (done) {
      api
        .post("avatars")
        .set("Content-Type", "multipart/form-data")
        .set("Authorization", "Bearer " + global.token)
        .attach(
          "avatar",
          fs.readFileSync(
            "C:/Dev/Javascript/automation_crowdfunding/jihyo.jpg"
          ),
          "jihyo.jpg"
        )
        .end(function (err, res) {
          expect(res.status).to.equals(200);
          console.log(res.body);
          done();
        });
    });
  });
};
