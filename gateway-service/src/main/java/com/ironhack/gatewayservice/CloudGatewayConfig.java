package com.ironhack.gatewayservice;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudGatewayConfig {

    @Bean
    public RouteLocator gatewayRouter(RouteLocatorBuilder routeLocatorBuilder){
        return routeLocatorBuilder
                .routes()
                .route(p -> p.path("/api/v1/teams/**")
                        .uri("lb://team-service"))
                .route(p -> p.path("/api/v1/trainers/**")
                        .uri("lb://trainer-service"))
                .build();
    }

}
