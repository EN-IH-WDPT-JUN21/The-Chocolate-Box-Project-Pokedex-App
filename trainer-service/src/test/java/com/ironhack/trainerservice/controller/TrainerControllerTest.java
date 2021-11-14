package com.ironhack.trainerservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ironhack.trainerservice.dao.Trainer;
import com.ironhack.trainerservice.dto.TrainerDTO;
import com.ironhack.trainerservice.repository.TrainerRepository;
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
class TrainerControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private TrainerRepository trainerRepository;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private List<Trainer> trainerList;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        Trainer trainer1 = new Trainer("Bob", 30, "Photo URL", "Videogames", 2L, 3);
        Trainer trainer2 = new Trainer("Mary", 25, "Photo URL", "Pokemon training", 3L, 4);
        trainerList = trainerRepository.saveAll(List.of(trainer1, trainer2));
    }

    @AfterEach
    void tearDown() {
        trainerRepository.deleteAll();
    }

    @Test
    void findAll_PositiveTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/v1/trainers")).andExpect(status().isOk()).andReturn();
        assertTrue(result.getResponse().getContentAsString().contains("Bob"));
        assertTrue(result.getResponse().getContentAsString().contains("Mary"));
    }

    @Test
    void findById_PositiveTest() throws Exception {
        Trainer trainer = trainerList.get(0);
        Long id = trainer.getId();
        MvcResult result = mockMvc.perform(get("/api/v1/trainers/" + id)).andExpect(status().isOk()).andReturn();
        assertTrue(result.getResponse().getContentAsString().contains("Bob"));
    }

    @Test
    void deleteTrainer_PositiveTest() throws Exception {
        Trainer trainer = trainerList.get(0);
        Long id = trainer.getId();
        MvcResult result = mockMvc.perform(delete("/api/v1/trainers/" + id)).andExpect(status().isAccepted()).andReturn();
        trainerList = trainerRepository.findAll();
        assertEquals(1, trainerList.size());
    }

    @Test
    void addTrainer_PositiveTest() throws Exception {
        TrainerDTO trainerDTO = new TrainerDTO("Jane", 27, "Photo URL", "Singing", 6L, 9);
        String body = objectMapper.writeValueAsString(trainerDTO);
        MvcResult result = mockMvc.perform(post("/api/v1/trainers").content(body)
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isCreated()).andReturn();
        assertTrue(result.getResponse().getContentAsString().contains("Jane"));
    }

    @Test
    void editTrainer_PositiveTest() throws Exception {
        TrainerDTO trainerDTO = new TrainerDTO(trainerList.get(0).getId(), "new name", 30, "new photo URL", "new hobby", 2L, 3);
        String body = objectMapper.writeValueAsString(trainerDTO);
        var repoSizeBefore = trainerRepository.findAll().size();
        MvcResult result = mockMvc.perform(put("/api/v1/trainers").content(body)
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
        var repoSizeAfter = trainerRepository.findAll().size();
        assertEquals(repoSizeBefore, repoSizeAfter);
        assertEquals(trainerDTO.getName(), trainerRepository.findById(trainerList.get(0).getId()).get().getName());
        assertEquals(trainerDTO.getAge(), trainerRepository.findById(trainerList.get(0).getId()).get().getAge());
        assertEquals(trainerDTO.getPhoto(), trainerRepository.findById(trainerList.get(0).getId()).get().getPhoto());
        assertEquals(trainerDTO.getHobby(), trainerRepository.findById(trainerList.get(0).getId()).get().getHobby());
        assertEquals(trainerDTO.getFavouritePokemonId(), trainerRepository.findById(trainerList.get(0).getId()).get().getFavouritePokemonId());
    }
}