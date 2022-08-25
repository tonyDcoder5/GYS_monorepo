const service = require("./events.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//-----------HELPER FUNCTIONS-------------

//-----------CRUD FUNCTIONS---------------

async function list(req,res,next){
    const date = new Date().toDateString();
    const data = await service.list(date)
    return res.status(200).json({data})
}

module.exports = {
    list: [asyncErrorBoundary(list)]
}