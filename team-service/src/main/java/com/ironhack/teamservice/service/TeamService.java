package com.ironhack.teamservice.service;


import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;
import com.ironhack.teamservice.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService implements ITeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Override
    public List<Team> findAll(){
        return teamRepository.findAll();
    }

    @Override
    public Team findById(Long id){
        Optional<Team> team = teamRepository.findById(id);
        if(team.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No team found with ID: " + id);
        return team.get();
    }

    @Override
    public void deleteTeam(Long id){
        Team team = findById(id);
        teamRepository.delete(team);
    }

    @Override
    public Team addTeam(TeamDTO teamDTO){
        Team team = new Team();
        team.setName(teamDTO.getName());
        team.setPhoto(teamDTO.getPhoto());
        team.setTrainerId(teamDTO.getTrainerId());
        team.setPokemonId1(teamDTO.getPokemonId1());
        team.setPokemonId2(teamDTO.getPokemonId2());
        team.setPokemonId3(teamDTO.getPokemonId3());
        team.setPokemonId4(teamDTO.getPokemonId4());
        team.setPokemonId5(teamDTO.getPokemonId5());
        team.setPokemonId6(teamDTO.getPokemonId6());
        return teamRepository.save(team);
    }

    @Override
    public Team editTeam(TeamDTO teamDTO){
        Team team = findById(teamDTO.getId());
            team.setName(teamDTO.getName());
            team.setPhoto(teamDTO.getPhoto());
            team.setTrainerId(teamDTO.getTrainerId());
            team.setPokemonId1(teamDTO.getPokemonId1());
            team.setPokemonId2(teamDTO.getPokemonId2());
            team.setPokemonId3(teamDTO.getPokemonId3());
            team.setPokemonId4(teamDTO.getPokemonId4());
            team.setPokemonId5(teamDTO.getPokemonId5());
            team.setPokemonId6(teamDTO.getPokemonId6());
        return teamRepository.save(team);
    }
}
