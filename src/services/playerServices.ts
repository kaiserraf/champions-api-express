import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";
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

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    
    if(Object.keys(player).length !== 0){
        await playerRepository.insertPlayer(player);
        response = await httpResponse.created();
    }else{
        response = await httpResponse.badRequest();
    }

    return response;
}

export const deletePlayerService = async (id:number) => {
    let response = null;
    await playerRepository.deleteOnePlayer(id);

    response = await httpResponse.OK({message: "deleted"});
    return response;
}

export const updatePlayerService = async (id:number, statistics:StatisticsModel) => {
    const data = await playerRepository.findAndModifyPlayer(id, statistics);
    const response = await httpResponse.OK(data);
    return response;
}