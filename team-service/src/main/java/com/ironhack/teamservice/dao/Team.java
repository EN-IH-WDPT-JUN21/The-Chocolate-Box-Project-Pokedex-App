package com.ironhack.teamservice.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String photo;
    private Long trainerId;
    private Integer pokemonId1;
    private Integer pokemonId2;
    private Integer pokemonId3;
    private Integer pokemonId4;
    private Integer pokemonId5;
    private Integer pokemonId6;

    public Team(String name, String photo, Long trainerId, int pokemonId1, int pokemonId2, int pokemonId3, int pokemonId4, int pokemonId5, int pokemonId6) {
        this.name = name;
        this.photo = photo;
        this.trainerId = trainerId;
        this.pokemonId1 = pokemonId1;
        this.pokemonId2 = pokemonId2;
        this.pokemonId3 = pokemonId3;
        this.pokemonId4 = pokemonId4;
        this.pokemonId5 = pokemonId5;
        this.pokemonId6 = pokemonId6;
    }
}
