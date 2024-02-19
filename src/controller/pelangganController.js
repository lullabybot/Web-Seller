// import { body } from "express-validator";
import pelangganModel from "../models/pelangganModel.js";


const ambilPelanggan = async (req, res) => {
    const body = req;
  try {
    const [data] = await pelangganModel.getAllPelanggan (body);
    res.json({
        message: 'Successfull fetching pelanggan',
        data: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  } 
};

const createNewPelanggan = async (req, res) => {
    const body = req.body;
    
    try {
        await pelangganModel.createPelanggan(body);
        res.json({
            message: 'Successfull creating pelanggan',
            data: body
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });
    }
}

const updatePelanggan = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await pelangganModel.editPelanggan(body, id);
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


const deletePelanggan = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await pelangganModel.deletePelanggan(body, id);
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

const getPelanggan = async (req, res) => {
    const{id} = req.params;

    try {
        const [data] = await pelangganModel.getPelanggan(body, id);
        res.json({
            mesage: "get toko successfull",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });       
    }
    console.log('id:', id);
}


const pelangganController = {
    ambilPelanggan,
    createNewPelanggan,
    updatePelanggan,
    deletePelanggan,
    getPelanggan 
}

export default pelangganController;
