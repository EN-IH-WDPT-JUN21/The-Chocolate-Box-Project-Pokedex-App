package com.ironhack.teamservice.controller;

import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;
import com.ironhack.teamservice.service.ITeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/teams")
public class TeamController implements ITeamController {

    @Autowired
    private ITeamService teamService;

    @Override
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Team> findAll(){
        return teamService.findAll();
    }

    @Override
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Team findById(@PathVariable Long id){
        return teamService.findById(id);
    }

    @Override
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteTeam(@PathVariable Long id){
        teamService.deleteTeam(id);
    }

    @Override
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Team addTeam(@RequestBody TeamDTO teamDTO){
        return teamService.addTeam(teamDTO);
    }

    @Override
    @PutMapping("/{id}/edit")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Team editTeam(@RequestBody TeamDTO teamDTO){
        return teamService.editTeam(teamDTO);
    }
}
