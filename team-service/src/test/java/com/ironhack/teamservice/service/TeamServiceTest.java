package com.ironhack.teamservice.service;

import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;
import com.ironhack.teamservice.repositories.TeamRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TeamServiceTest {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private ITeamService teamService;

    private Team team1;
    private Team team2;
    private Team team3;

    @BeforeEach
    void setUp() {
        team1 = new Team("Team1", "photo1", 1L, 1,2,3,4,5,6);
        team2 = new Team("Team2", "photo2", 2L, 1,2,3,4,5,6);
        team3 = new Team("Team3", "photo3", 3L, 1,2,3,4,5,6);

        teamRepository.saveAll(List.of(team1, team2, team3));
    }

    @AfterEach
    void tearDown() {
        teamRepository.deleteAll();
    }

    @Test
    void findAll() {
        var totalRepo = teamService.findAll().size();
        assertEquals(3, totalRepo);
    }

    @Test
    void findById() {
        var teamFound = teamService.findById(team1.getId());
        assertEquals(team1.getName(), teamFound.getName());
    }

    @Test
    void deleteTeam() {
        var repoSizeBefore = teamRepository.findAll().size();
        teamService.deleteTeam(team1.getId());
        var repoSizeAfter = teamRepository.findAll().size();
        assertEquals(repoSizeBefore - 1, repoSizeAfter);
    }

    @Test
    void addTeam() {
        TeamDTO teamDTO = new TeamDTO("newTeam", "newPhoto", 1L, 1,2,3,4,5,6);
        var repoSizeBefore = teamRepository.findAll().size();
        teamService.addTeam(teamDTO);
        var repoSizeAfter = teamRepository.findAll().size();
        assertEquals(repoSizeBefore + 1, repoSizeAfter);
    }

    @Test
    void editTeam() {
        TeamDTO teamDTO = new TeamDTO(team1.getId(), "newTeamName", "newPhoto", 2L, 9,10,11,12,13,14);
        var repoSizeBefore = teamRepository.findAll().size();
        teamService.editTeam(teamDTO);
        var repoSizeAfter = teamRepository.findAll().size();
        assertEquals(repoSizeBefore, repoSizeAfter);
        assertEquals(teamDTO.getName(), teamRepository.findById(team1.getId()).get().getName());
        assertEquals(teamDTO.getPhoto(), teamRepository.findById(team1.getId()).get().getPhoto());
        assertEquals(teamDTO.getTrainerId(), teamRepository.findById(team1.getId()).get().getTrainerId());
        assertEquals(teamDTO.getPokemonId1(), teamRepository.findById(team1.getId()).get().getPokemonId1());
        assertEquals(teamDTO.getPokemonId2(), teamRepository.findById(team1.getId()).get().getPokemonId2());
        assertEquals(teamDTO.getPokemonId3(), teamRepository.findById(team1.getId()).get().getPokemonId3());
        assertEquals(teamDTO.getPokemonId4(), teamRepository.findById(team1.getId()).get().getPokemonId4());
        assertEquals(teamDTO.getPokemonId5(), teamRepository.findById(team1.getId()).get().getPokemonId5());
        assertEquals(teamDTO.getPokemonId6(), teamRepository.findById(team1.getId()).get().getPokemonId6());
    }
}