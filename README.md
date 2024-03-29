# The-Chocolate-Box-Project-Pokedex-App

## Welcome to the Chocolate Box Pokedex
## Table of Contents

1. [**About**](#About)
1. [**Getting started**](#Getting-started)
2. [**Diagrams**](#Diagrams)


<br><br>

## About 
#### This Pokedex will allow you to: 

* Search Pokemon

* Get detailed Pokemon information

* Create / View and Edit Teams - made from upto 6 Pokemon & 1 Trainer

* Create / View Trainers 
<br><br>
## Getting started

### Running The Chocolate Box Pokedex
<br>

1. Download ZIP file / Clone the project: 
```
https://github.com/EN-IH-WDPT-JUN21/The-Chocolate-Box-Project-Pokedex-App.git
```

2. Create mySQL database at the standard localhost port 3306 called "pokeapp" 

```
Or use the below commands to Set up database and the same login details as us to save changing this in all microservices 

CREATE DATABASE pokeapp;
CREATE USER 'ironhacker'@'localhost' IDENTIFIED BY '1r0nH@ck3r';
GRANT ALL PRIVILEGES ON *.* TO 'ironhacker'@'localhost'; -- *.* gives permission everywhere  

```

3. Set Up & Run The Microservices 
```
Right click POM file and Click "+ Add As Maven Project" for the Discovery, Team, Trainer services 
Run Each Microservice Application 
```

4. Load Project in Visual Studio enter the following into terminal: 

  ```
  cd .\pokedex-front-end\pokedex-app\ 
  npm install 
  ng serve 
  ```

5. Enjoy at http://localhost:4200/ 

## Diagrams

<b>· Use case diagram : </b>

<img src="Pokemon-app.png" />

<b>· Microservices Relations Diagram : </b>

<img src="pokemon-microservices.png" />

<b>· Class diagrams : </b>
<b>· Back End : </b>
<img src="pokemon-backend-class-diagram.png" />
<b>· Front End : </b>
<img src="pokemon-front-end-class-diagrams.png"/>
