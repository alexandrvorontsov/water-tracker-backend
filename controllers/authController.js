const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {};
const signin = async (req, res) => {};
const logout = async (req, res) => {};

module.exports = { signup, signin, logout };
