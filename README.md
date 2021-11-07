# The-Chocolate-Box-Project-Pokedex-App

```sh
/*Creating a database*/
CREATE DATABASE IF NOT EXISTS pokeApp;
USE pokeApp;

/*Creating a database user*/
CREATE USER IF NOT EXISTS 'ironhacker'@'localhost' IDENTIFIED BY '1r0nh4ck3r';
GRANT ALL PRIVILEGES ON *.* TO 'ironhacker'@'localhost';
FLUSH PRIVILEGES;
```
