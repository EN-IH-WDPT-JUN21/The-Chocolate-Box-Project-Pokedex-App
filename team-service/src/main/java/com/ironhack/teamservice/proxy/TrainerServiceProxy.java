package com.ironhack.teamservice.proxy;

import com.ironhack.teamservice.dto.TrainerDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("trainer-service")
public interface TrainerServiceProxy {

    @GetMapping("/api/v1/trainers/{id}")
    TrainerDTO findById(@PathVariable Long id);




}
