package com.ironhack.teamservice.service;

import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;

import java.util.List;

public interface ITeamService {
    List<Team> findAll();

    Team findById(Long id);

    void deleteTeam(Long id);

    Team addTeam(TeamDTO teamDTO);

    Team editTeam(TeamDTO teamDTO);
}
