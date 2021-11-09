package com.ironhack.teamservice.controller;

import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface ITeamController {
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<Team> findAll();

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    Team findById(@PathVariable Long id);

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    void deleteTeam(@PathVariable Long id);

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    Team addTeam(@RequestBody TeamDTO teamDTO);

    @PutMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    Team editTeam(@RequestBody TeamDTO teamDTO);
}
