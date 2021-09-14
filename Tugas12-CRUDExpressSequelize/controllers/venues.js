const {Venues} = require('../models');

class VenuesController{
    static async store(req,res){
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone

        await Venues.create({name: name,address: address,phone : phone})
        res.status(201).json({status : 'success',data: 'venues is saved!'})
    }
    static async findAll(req,res){
        let venues = await Venues.findAll();
        res.status(201).json({status: 'success',data: venues})
    }
    static async show(req,res){
        let id = req.params.id
        let venues = await Venues.findByPk(id)
        res.status(201).json({status: 'success', data: venues})
    }
    static async update(req,res){
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone
        let id = req.params.id
        let query = await Venues.update({
            name: name,
            address: address,
            phone: phone
        },{
            where: {
                id: id 
            }
        })
        res.status(201).json({status: 'success', data: 'data is update'})
    }
    static async destroy(req,res){
        await Venues.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({status: 'success', data: 'data is deleted'})
    }
}

module.exports = VenuesController