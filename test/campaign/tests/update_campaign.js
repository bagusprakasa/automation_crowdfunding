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
module.exports = function (
  name,
  short_description,
  description,
  goal_amount,
  perks
) {
  describe("Update Campaign", function () {
    it("Success Update Campaign", function (done) {
      api
        .put("campaigns/" + global.id_campaign)
        .set("Content-type", "application/json")
        .set("Authorization", "Bearer " + global.token)
        .send({
          name: name,
          short_description: short_description,
          description: description,
          goal_amount: goal_amount,
          perks: perks,
        })
        .end(function (err, res) {
          expect(res.status).to.equals(200);
          done();
        });
    });
  });
};
