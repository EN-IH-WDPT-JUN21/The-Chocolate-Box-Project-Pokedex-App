# The-Chocolate-Box-Project-Pokedex-App


  <li> spring.datasource.url=jdbc:mysql://localhost:3306/pokeapp </li>
  <li> spring.datasource.username=ironhacker </li>
  <li> spring.datasource.password=1r0nH@ck3r </li>

<br>
<b> Welcome to the Chocolate Box Pokedex </b>

<br><br>
This Pokedex will allow you to: 

· Search Pokemon

· Get detailed Pokemon information

· Create / View and Edit Teams - made from upto 6 Pokemon & 1 Trainer

· Create / View Trainers 

# The-Chocolate-Box-Project-Pokedex-App

## Table of Contents

1. [**Requirements**](#Requirements)
2. [**Diagrams**](#Diagrams)
3. [**New Project Structure**](#New-Project-Structure)
4. [**SETUP: Cloud Method**](#SETUP-Cloud-Method)
5. [**SETUP: Local Method**](#SETUP-Local-Method)
6. [**Services**](#Services)
7. [**DTOs**](#DTOs)

<br><br>
## Getting started

### Running The Chocolate Box Pokedex
<br>
1. Download ZIP file / Clone the project: 

https://github.com/EN-IH-WDPT-JUN21/The-Chocolate-Box-Project-Pokedex-App.git

2. Create mySQL database at the standard localhost port 3306 called "pokeapp" 

Or use the below commands to Set up database and the same login details as us to save changing this in all microservices 

```
CREATE DATABASE pokeapp;
CREATE USER 'ironhacker'@'localhost' IDENTIFIED BY '1r0nH@ck3r';
GRANT ALL PRIVILEGES ON *.* TO 'ironhacker'@'localhost'; -- *.* gives permission everywhere  

```

3. Right click POM file and Click "+ Add As Maven Project" for the Discovery, Team, Trainer services 

4. Load Project in Visual Studio enter the following into terminal: 

  ```
  cd .\pokedex-front-end\pokedex-app\ 
  npm install 
  ng serve 
  ```

5. Enjoy at http://localhost:4200/ 

## · Diagrams

<b>· Use case diagram : </b>

<img src="pokemon-app.png" />

<b>· Class diagrams : </b>

<img src="pokemon-backend-class-diagram" />

<img src="pokemon-front-end-class-diagram" />

<b>· Microservices Relations Diagram : </b>

<img src="pokemon-microservices" />
