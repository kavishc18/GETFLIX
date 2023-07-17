<?php
require_once('functions.php');

createTable('Users',
'`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(50) NOT NULL,
`password` VARCHAR(60) NOT NULL,
PRIMARY KEY (`id`)');

createTable('UsersFav',
'`id` INT NOT NULL AUTO_INCREMENT,
`user_id` INT NOT FOREIGN KEY REFERENCES users(id),
`film_id` INT NOT NULL,
PRIMARY KEY (`id`)'
);

?>