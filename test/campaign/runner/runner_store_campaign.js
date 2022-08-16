/*
 * @Author: bagusprakasa
 * @Date:   2022-08-15 06:07:22
 * @Last Modified by:   bagusprakasa
 * @Last Modified time: 2022-08-15 06:07:22
 */

const emaiGen = require("email-generator");
const name = "Galih Bagus Prakasa";
const email = emaiGen.generateEmail().replace(/['"]+/g, "");
const occupation = "QA Automation Testing";
const password = "password";
const campaign = "Bantu aku buat upgrade komputer";
const short_description = "ini adalah aktivitas";
const description =
  "Ini adalah suatu aktivitas penggalangan dana untuk galih upgrade pc";
const goal_amount = 15000000;
const perks = "ini perks";

// 1. Register
require("../../user/tests/register.js")(name, email, occupation, password);

// 2. Login
require("../../user/tests/login.js")(password);

// 3. Store Campaign
require("../tests/store_campaign.js")(
  campaign,
  short_description,
  description,
  goal_amount,
  perks
);

// 4. Get all campaign
require("../tests/campaign.js");
