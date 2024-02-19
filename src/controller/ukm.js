import tokoModel from '../models/toko.js';

const getAllUkm = async (req, res) => {
    try {
        const [data] = await tokoModel.getAllToko();
          res.json({
            message: 'GET all toko Success',
            data: data
    })
    }catch(error){
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        })
    } 
}

const createNewUkm = async (req, res) => {
    const {body} = req;
    
    try {
        await tokoModel.createToko(body);
        res.json({
            message: 'Successfull creating ukm',
            data: body,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });
    }
}

const updateUkm = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await tokoModel.editToko(body, id);
        res.json({
            message: "update success",
            data: body
    })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });
    }
    console.log('id:', id)
}


const deleteUkm = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await tokoModel.deleteToko(body, id);
        res.json({
            message: "delete user success",
            data: body
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });      
    }
}

const getToko = async (req, res) => {
    const{id} = req.params;
    const {body} = req;
    try {
        await tokoModel.getToko(body, id);
        res.json({
            mesage: "get toko successfull",
            data: body
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });       
    }
}


const ukmController = {
    getAllUkm,
    createNewUkm,
    updateUkm,
    deleteUkm,
    getToko }

export default ukmController;
