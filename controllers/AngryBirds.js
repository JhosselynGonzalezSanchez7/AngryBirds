const { request, response } = require("express");
const pool = require("../db/connection");
const modeloAngryBirds = require("../models/AngryBirds");

const getAngryBirds = async (req = request, res = response) =>{


    let conn;

    try {
        conn = await pool.getConnection()

        const users = await conn.query(modeloAngryBirds.queryAngryBirds, (error) => {throw new Error(error) })

        if (!users) {
            res.status(404).json({msg:"no se encontraron AngryBirds"})
            return
        }
        res.json({users})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getAngryBirdsByID = async (req = request, res = response) =>{

    const {id} = req.params
    let conn;

    try {
        conn = await pool.getConnection()

        const [user] = await conn.query(modeloAngryBirds.querygetAngryBirdsByID, [id], (error) => {throw new Error(error) })

        if (!user) {
            res.status(404).json({msg: `No se encontró el AngryBirds con el ID ${id}`})
            return
        }
        res.json({user})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteAngryBirdsByID = async (req = request, res = response) =>{

    const {id} = req.query
    let conn;

    try {
        conn = await pool.getConnection()

        const {affectedRows} = await conn.query(modeloAngryBirds.querydeleteAngryBirdsByID, [id], (error) => {throw new Error(error) })

        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo eliminar el AngryBirds con el ID ${id}`})
            return
        }

        res.json({msg: `El AngryBirds con ID ${id} se eliminó sastifactoriamente`})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addAngryBirds = async (req = request, res = response) =>{

    const {

        Nombre,
        Primera_Aparicion,
        Poder,
        Genero,
        Tamaño,
        Alcance

    } = req.body

    if (

        ! Nombre ||
        !Primera_Aparicion ||
        !Poder ||
        !Genero ||
        !Tamaño ||
        !Alcance
        
    ){
        res.status(400).json({msg: "Falta información del AngryBirds"})
        return
    }

    let conn;

    try {
        conn = await pool.getConnection()


        const [user] = await conn.query(modeloAngryBirds.queryAngryBirdsExists, [AngryBirds])

        if (user) {
            res.status(403).json({msg: `El AngryBirds ${AngryBirds} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloAngryBirds.queryaddAngryBirds, 
        [ Nombre,
            Primera_Aparicion,
            Poder,
            Genero,
            Tamaño,
            Alcance
    ], (error) => {throw new Error(error) })

        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del AngryBirds ${AngryBirds}`})
            return
        }

        res.json({msg: `El usuario ${AngryBirds} se agrego sastifactoriamente. `})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const updateAngryBirdsByUsuario = async (req = request, res = response) =>{

    const {
        Nombre,
        Primera_Aparicion,
        Poder,
        Genero,
        Tamaño,
        Alcance
    } = req.body

    if (
        ! Nombre ||
        !Primera_Aparicion ||
        !Poder ||
        !Genero ||
        !Tamaño ||
        !Alcance
    ) {
        res.status(400).json({msg: "Falta información del AngryBirds"})
        return
    }

    let conn;

    try {
        conn = await pool.getConnection()


        const [user] = await conn.query(modeloAngryBirds.queryGetAngryBirdsInfo, [heroe])

        if (!user) {
            res.status(403).json({msg: `El AngryBirds ${AngryBirds}} no se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloAngryBirds.queryUpdateByAngryBirds,
            [
                
            Nombre ||user.Nombre,
            Primera_Aparicion ||user.Primera_Aparicion,
            Poder ||user.Poder,
            Genero ||user.Genero,
            Tamaño ||user.Tamaño,
            Alcance||user.Alcance,
            AngryBirds
            
            ], (error) => {throw new Error(error) })

        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del AngryBirds ${AngryBirds}`})
            return
        }

        res.json({msg: `El AngryBirds ${AngryBirds} se actualizó sastifactoriamente. `})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}



module.exports = {getAngryBirds, getAngryBirdsByID, deleteAngryBirdsByID ,addAngryBirds, updateAngryBirdsByUsuario}