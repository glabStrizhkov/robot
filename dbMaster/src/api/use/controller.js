const { Crud } = require('../../modelMaster/crud');

module.exports = {
    async create(req, res){
        try{
            const { modelName } = req.params;
            const { data } = req.body;
            const Model = new Crud(modelName);
            if(Model.err) res.status(400).json({ msg: "ERROR!", error: Model.err });
            const object = await Model.create(data);
            res.status(200).json({ msg: "CREATED", data: object });
        } catch (error) {
            res.status(500).json({ msg: "ERROR!", error });
        }
    },
    async getOne(req, res){
        try{
            const { modelName } = req.params;
            const { by, value } = req.query;
            const Model = new Crud(modelName);
            if(Model.err) res.status(400).json({ msg: "ERROR!", error: Model.err });
            let searchObj = {};
            searchObj[by] = value;
            const object = await Model.getOne(searchObj);
            res.status(200).json({ msg: "GOT", data: object });
        } catch (error) {
            res.status(500).json({ msg: "ERROR!", error });
        }
    },
    async getAll(req, res){
        try{
            const { modelName } = req.params;
            const Model = new Crud(modelName);
            if(Model.err) res.status(500).json({ msg: "ERROR!", error: Model.err });
            const object = await Model.getAll();
            res.status(200).json({ msg: "GOT", data: object });
        } catch (error) {
            res.status(500).json({ msg: "ERROR!", error });
        }
    },
    async update(req, res){
        try{
            const { modelName } = req.params;
            const { by, data } = req.body;
            const Model = new Crud(modelName);
            if(Model.err) res.status(400).json({ msg: "ERROR!", error: Model.err });
            await Model.update(by, data);
            const object = await Model.getOne(by);
            res.status(200).json({ msg: "UPDATED", data: object });
        } catch (error) {
            res.status(500).json({ msg: "ERROR!", error });
        }    },
    async remove(req, res){
        try{
            const { modelName } = req.params;
            const { by } = req.body;
            const Model = new Crud(modelName);
            if(Model.err) res.status(500).json({ msg: "ERROR!", error: Model.err });
            await Model.remove(by);
            res.status(200).json({ msg: "REMOVED" });
        } catch (error) {
            res.status(500).json({ msg: "ERROR!", error });
        }
    }
}