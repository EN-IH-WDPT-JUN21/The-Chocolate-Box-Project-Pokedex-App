package com.ironhack.trainerservice.interfaces;

import com.ironhack.trainerservice.dao.Trainer;
import com.ironhack.trainerservice.dto.TrainerDTO;

import java.util.List;

public interface ITrainerController {
    List<Trainer> findAll();
    Trainer findById(Long id);
    void deleteTrainer(Long id);
    Trainer addTrainer(TrainerDTO trainerDTO);
    Trainer editTrainer(TrainerDTO trainerDTO);
}
