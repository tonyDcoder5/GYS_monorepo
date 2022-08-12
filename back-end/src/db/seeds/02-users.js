const data = require("./02-users.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
		.then(() => knex("users").insert(data));
};
