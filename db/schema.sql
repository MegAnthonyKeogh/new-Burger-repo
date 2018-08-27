CREATE DATABASE burger_DB;

USE burger_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY (id)
);