/*
 * @Author: bagusprakasa
 * @Date:   2022-08-15 06:07:22
 * @Last Modified by:   bagusprakasa
 * @Last Modified time: 2022-08-15 06:07:22
 */

const name = "Galih Bagus Prakasa";
const email = "galih@mail.com";
const occupation = "QA Automation Testing";
const password = "password";

// 1. Register
require("../tests/register.js")(name, email, occupation, password);
