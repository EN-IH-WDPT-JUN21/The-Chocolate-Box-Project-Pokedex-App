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
        if(teamDTO.getPokemonId2() != null){
            team.setPokemonId2(team.getPokemonId2());
        }
        if(teamDTO.getPokemonId3() != null){
            team.setPokemonId3(team.getPokemonId3());
        }
        if(teamDTO.getPokemonId4() != null){
            team.setPokemonId4(team.getPokemonId4());
        }
        if(teamDTO.getPokemonId5() != null){
            team.setPokemonId5(team.getPokemonId5());
        }
        if(teamDTO.getPokemonId6() != null){
            team.setPokemonId6(team.getPokemonId6());
        }
        return teamRepository.save(team);
    }

    @Override
    public Team editTeam(TeamDTO teamDTO){
        Team team = findById(teamDTO.getId());
        if(teamDTO.getName() != null) {
            team.setName(teamDTO.getName());
        }
        if(teamDTO.getPhoto() != null) {
            team.setPhoto(teamDTO.getPhoto());
        }
        if(teamDTO.getTrainerId() != null) {
            team.setTrainerId(teamDTO.getTrainerId());
        }
        if(teamDTO.getPokemonId1() != null) {
            team.setPokemonId1(teamDTO.getPokemonId1());
        }
        if(teamDTO.getPokemonId2() != null){
            team.setPokemonId2(teamDTO.getPokemonId2());
        }
        if(teamDTO.getPokemonId3() != null){
            team.setPokemonId3(teamDTO.getPokemonId3());
        }
        if(teamDTO.getPokemonId4() != null){
            team.setPokemonId4(teamDTO.getPokemonId4());
        }
        if(teamDTO.getPokemonId5() != null){
            team.setPokemonId5(teamDTO.getPokemonId5());
        }
        if(teamDTO.getPokemonId6() != null){
            team.setPokemonId6(teamDTO.getPokemonId6());
        }
        return teamRepository.save(team);
    }
}
