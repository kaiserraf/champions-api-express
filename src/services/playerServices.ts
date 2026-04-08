import { findAllPlayers } from "../repositories/players-respository";
import { noContent, OK } from "../utils/httpHelper";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;
    if(data){
        response = await OK(data);
    }else{
        response = await noContent();
    }
    return response;
}