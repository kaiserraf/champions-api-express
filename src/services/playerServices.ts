import * as playerRepository from "../repositories/players-respository";
import * as httpResponse from "../utils/httpHelper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;
    if(data){
        response = await httpResponse.OK(data);
    }else{
        response = await httpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id:number) => {
    const data = await playerRepository.findPlayerById(id);
    let response = null

    if(data){
        response = await httpResponse.OK(data);
    }else{
        response = await httpResponse.noContent();
    }

    return response;
}