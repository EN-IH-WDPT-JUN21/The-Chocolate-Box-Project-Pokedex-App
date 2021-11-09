package com.ironhack.trainerservice.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer age;
    private String photo;
    private String hobby;
    private Long teamId;
    private int favouritePokemonId;

    public Trainer(String name, Integer age, String photo, String hobby, Long teamId, int favouritePokemonId) {
        this.name = name;
        this.age = age;
        this.photo = photo;
        this.hobby = hobby;
        this.teamId = teamId;
        this.favouritePokemonId = favouritePokemonId;
    }
}
