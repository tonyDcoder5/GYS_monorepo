const knex = require("../db/connection");

//----------CRUD FUNCTIONS-------------
function list(date){
    return knex("events")
        .select("*").where("event_date", ">=", date);
}

module.exports = {
    list
}