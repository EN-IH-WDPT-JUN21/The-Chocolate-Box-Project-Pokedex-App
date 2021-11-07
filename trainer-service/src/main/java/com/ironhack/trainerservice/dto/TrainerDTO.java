package com.ironhack.trainerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrainerDTO {
    private Long id;

    @NotBlank(message = "Product cannot be empty or null.")
    private String name;

    @NotNull
    private int age;

    private String photo;
    private String hobby;
    private Long teamId;
    private int favouritePokemonId;

    public TrainerDTO(String name, int age, String photo, String hobby, Long teamId, int favouritePokemonId) {
        this.name = name;
        this.age = age;
        this.photo = photo;
        this.hobby = hobby;
        this.teamId = teamId;
        this.favouritePokemonId = favouritePokemonId;
    }
}
