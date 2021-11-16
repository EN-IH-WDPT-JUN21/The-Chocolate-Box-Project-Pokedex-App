package com.ironhack.trainerservice.controller;

import com.ironhack.trainerservice.dao.Trainer;
import com.ironhack.trainerservice.dto.TrainerDTO;
import com.ironhack.trainerservice.interfaces.ITrainerController;
import com.ironhack.trainerservice.interfaces.ITrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/trainers")
public class TrainerController implements ITrainerController {

    @Autowired
    ITrainerService trainerService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Trainer> findAll() {
        return trainerService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Trainer findById(@PathVariable Long id) {
        return trainerService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteTrainer(@PathVariable Long id) {
        trainerService.deleteTrainer(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Trainer addTrainer(@RequestBody @Valid TrainerDTO trainerDTO) {
        return trainerService.addTrainer(trainerDTO);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Trainer editTrainer(@RequestBody @Valid TrainerDTO trainerDTO) {
        return trainerService.editTrainer(trainerDTO);
    }

}
