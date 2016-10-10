#! /bin/bash
#################################################################################
#     File Name           :     install.sh
#     Created By          :     Peilun Zhang
#     Creation Date       :     [2016-10-10 17:42]
#     Description         :      
#################################################################################

cp .env.example .env
mysql -e "create database IF NOT EXISTS homestead;" -uroot
mysql -uroot -e "GRANT ALL PRIVILEGES ON homestead.* To 'homestead'@'localhost' IDENTIFIED BY 'secret';"
composer self-update
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve

