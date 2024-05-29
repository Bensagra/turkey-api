import {getConnection} from "./../database/database";

const getMaterial= async(req,res)=>{
const connection = await getConnection();
const result = await connection.query("SELECT * FROM `Material`");
res.json(result);
};


export const methods = {
    getMaterial
}