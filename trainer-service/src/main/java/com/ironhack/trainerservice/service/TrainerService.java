package com.ironhack.trainerservice.service;

import com.ironhack.trainerservice.dao.Trainer;
import com.ironhack.trainerservice.dto.TrainerDTO;
import com.ironhack.trainerservice.interfaces.ITrainerService;
import com.ironhack.trainerservice.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerService implements ITrainerService {
    @Autowired
    TrainerRepository trainerRepository;

    @Override
    public List<Trainer> findAll() {
        return trainerRepository.findAll();
    }

    @Override
    public Trainer findById(Long id) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(id);
        if(trainerOptional.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No trainer found with ID: " + id);
        return trainerOptional.get();
    }

    @Override
    public void deleteTrainer(Long id) {
        trainerRepository.delete(findById(id));
    }

    @Override
    public Trainer addTrainer(TrainerDTO trainerDTO) {
        Trainer trainer = new Trainer();
        trainer.setName(trainerDTO.getName());
        trainer.setAge(trainerDTO.getAge());
        trainer.setPhoto(trainerDTO.getPhoto());
        trainer.setHobby(trainerDTO.getHobby());
        trainer.setTeamId(trainerDTO.getTeamId());
        trainer.setFavouritePokemonId(trainerDTO.getFavouritePokemonId());
        return trainerRepository.save(trainer);
    }

    @Override
    public Trainer editTrainer(TrainerDTO trainerDTO) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(trainerDTO.getId());
        if(trainerOptional.isPresent()) {
            Trainer trainer = trainerOptional.get();
            trainer.setName(trainerDTO.getName());
            trainer.setAge(trainerDTO.getAge());
            trainer.setPhoto(trainerDTO.getPhoto());
            trainer.setHobby(trainerDTO.getHobby());
            trainer.setTeamId(trainerDTO.getTeamId());
            trainer.setFavouritePokemonId(trainerDTO.getFavouritePokemonId());

            return trainerRepository.save(trainer);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Trainer does not exist.");
        }
   }
}
