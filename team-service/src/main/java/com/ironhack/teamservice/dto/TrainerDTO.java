package com.ironhack.teamservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TrainerDTO {

    private Long id;
    private String name;
    private String photo;
    private String hobby;
    private Integer age;
    private Long teamId;

    public TrainerDTO(String name, String photo, String hobby, Integer age, Long teamId) {
        this.name = name;
        this.photo = photo;
        this.hobby = hobby;
        this.age = age;
        this.teamId = teamId;
    }
}
