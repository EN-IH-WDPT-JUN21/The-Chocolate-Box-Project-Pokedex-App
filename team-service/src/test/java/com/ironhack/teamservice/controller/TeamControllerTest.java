package com.ironhack.teamservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ironhack.teamservice.dao.Team;
import com.ironhack.teamservice.dto.TeamDTO;
import com.ironhack.teamservice.repositories.TeamRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class TeamControllerTest {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private Team team1;
    private Team team2;
    private Team team3;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();

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
    void findAll() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/v1/teams")).andExpect(status().isOk()).andReturn();
        assertTrue(result.getResponse().getContentAsString().contains("Team1"));
        assertTrue(result.getResponse().getContentAsString().contains("Team2"));
        assertTrue(result.getResponse().getContentAsString().contains("Team3"));

    }

    @Test
    void findById() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/v1/teams/" + team1.getId())).andExpect(status().isOk()).andReturn();
        assertTrue(result.getResponse().getContentAsString().contains("Team1"));
        assertFalse(result.getResponse().getContentAsString().contains("Team2"));
        assertFalse(result.getResponse().getContentAsString().contains("Team3"));
    }

    @Test
    void deleteTeam() throws Exception {
        var repoSizeBefore = teamRepository.findAll().size();
        MvcResult result = mockMvc.perform(delete("/api/v1/teams/" + team1.getId())).andExpect(status().isOk()).andReturn();
        var repoSizeAfter = teamRepository.findAll().size();
        assertEquals(repoSizeBefore - 1, repoSizeAfter);
    }

    @Test
    void addTeam() throws Exception {
        TeamDTO teamDTO = new TeamDTO("newTeam", "newPhoto", 1L, 1,2,3,4,5,6);
        String body = objectMapper.writeValueAsString(teamDTO);
        var repoSizeBefore = teamRepository.findAll().size();
        MvcResult result = mockMvc.perform(post("/api/v1/teams").content(body)
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isCreated()).andReturn();
        var repoSizeAfter = teamRepository.findAll().size();
        assertEquals(repoSizeBefore + 1, repoSizeAfter);
    }

    @Test
    void editTeam() throws Exception {
        TeamDTO teamDTO = new TeamDTO(team1.getId(), "newTeam", "newPhoto", 1L, 1,2,3,4,5,6);
        String body = objectMapper.writeValueAsString(teamDTO);
        var repoSizeBefore = teamRepository.findAll().size();
        MvcResult result = mockMvc.perform(put("/api/v1/teams/" + team1.getId() + "/edit").content(body)
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isAccepted()).andReturn();
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