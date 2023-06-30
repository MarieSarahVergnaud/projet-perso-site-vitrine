CREATE DATABASE IF NOT EXISTS `mara_db`;

USE `mara_db`;

DROP TABLE IF EXISTS `mara_oeuvres`;


CREATE TABLE IF NOT EXISTS `mara_oeuvres` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(100) NOT NULL,
    `description` VARCHAR(45) ,
    `technique` VARCHAR(45) ,
    `portecle` BOOLEAN,
    `taille` VARCHAR(35) ,
    `image` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
)

INSERT INTO `mara_oeuvres` ( titre, technique, taille, image) VALUES
    ('Ponyo',"Petit ponyo en laine feutrée à l'aiguille",'laine feutrée','false','petit','http://localhost:5000\assets\image_card\ponyo-petit-lainefeutrée.JPG'),
    ('Totoro','Gros Totoro avec une feuille sur la tête','laine feutrée','false','grand','http://localhost:5000\assets\image_card\totoro-gros-lainefeutrée.JPG'),
    ('Totoro bleu','Petit Totoro bleu','laine feutrée','false','petit','http://localhost:5000\assets\image_card\ponyo-petit-lainefeutrée.JPG'),
    ('Totoro','Petit Totoro version porte cle','laine feutrée','true','grand','http://localhost:5000\image_card\assets\totoro-gros-lainefeutrée.JPG');
