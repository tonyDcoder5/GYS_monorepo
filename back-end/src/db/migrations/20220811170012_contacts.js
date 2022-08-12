/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("contacts", (table) => {
		table.increments("contact_id").primary();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.string("mobile_number");
        table.string("email_address").notNullable();
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("contacts");
};
