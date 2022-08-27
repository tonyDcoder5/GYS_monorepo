/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("resources",(table)=>{
    table.increments("resource_id").primary();
    table.string("resource_name").notNullable();
    table.string("resource_description",1000).notNullable();
    table.string("resource_url",500).notNullable();
    table.timestamps(true,true)
  })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("resources")
};
