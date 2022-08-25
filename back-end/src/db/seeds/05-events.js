/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const data = require("./05-events.json");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE prompts RESTART IDENTITY CASCADE")
		.then(() => knex("events").insert(data));
};
