const modeloAngryBirds = {
    querygetAngryBirds: "SELECT * FROM personajes",
    querygetAngryBirdsByID: `SELECT * FROM personajes WHERE ID = ?`,
    querydeleteAngryBirdsByID: `UPDATE personajes SET activo = 'N' WHERE ID = ?`,
    queryAngryBirdsExists: `SELECT heroe FROM personajes WHERE heroe = ?`,
    queryaddAngryBirds: `
    INSERT INTO AngryBirds(
        Nombre,
        Primera_Aparicion,
        Poder,
        Genero,
        Tamaño,
        Alcance
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`,
    queryGetAngryBirdsInfo:
    `SELECT Nombre,
    Primera_Aparicion,
    Poder,
    Genero,
    Tamaño,
    Alcance
            FROM  AngryBirds
            WHERE AngryBirds = ?`,
    queryUpdateByAngryBirds:
    `UPDATE personajes SET  
    Nombre = ?,
    Primera_Aparicion = ?,
    Poder = ?,
    Genero = ?,
    Tamaño = ?,
    Alcance = ?,
    WHERE AngryBirds = ?`
    }

    module.exports = modeloAngryBirds