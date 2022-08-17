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
const attach = "./jihyo.jpg";

// 1. Register
require("../tests/register.js")(name, email, occupation, password);

// 2. Login
require("../tests/login.js")(password);

// 3. Upload Avatar
require("../tests/upload_avatar.js")(attach);
