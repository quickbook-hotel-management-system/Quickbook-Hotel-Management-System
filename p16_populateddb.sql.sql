CREATE DATABASE  IF NOT EXISTS `pg16_hotelbookingmanagement` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pg16_hotelbookingmanagement`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: pg16_hotelbookingmanagement
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `room_id` int NOT NULL,
  `booking_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `check_in_date` date NOT NULL,
  `check_out_date` date NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `booking_status` enum('Pending','Confirmed','Checked-In','Checked-Out','Cancelled') DEFAULT 'Pending',
  PRIMARY KEY (`booking_id`),
  KEY `fk_booking_customer` (`customer_id`),
  KEY `fk_booking_room` (`room_id`),
  CONSTRAINT `fk_booking_customer` FOREIGN KEY (`customer_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_booking_room` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chk_booking_dates` CHECK ((`check_out_date` > `check_in_date`))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,4,2,'2026-07-01 10:00:00','2026-07-10','2026-07-12',360.00,'Confirmed'),(2,5,7,'2026-07-03 11:00:00','2026-07-15','2026-07-18',1260.00,'Checked-In'),(3,6,4,'2026-07-05 09:00:00','2026-07-20','2026-07-22',300.00,'Pending'),(4,7,1,'2026-07-08 03:00:00','2026-07-25','2026-07-28',360.00,'Cancelled');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `state_id` int NOT NULL,
  `city_name` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_city_state` (`state_id`),
  CONSTRAINT `fk_city_state` FOREIGN KEY (`state_id`) REFERENCES `states` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,1,'Kolhapur'),(2,1,'AhilyaNagar'),(3,2,'Pune'),(4,2,'Nashik'),(5,3,'Satara'),(6,4,'Sangali');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `facility_id` int NOT NULL AUTO_INCREMENT,
  `facility_name` varchar(100) NOT NULL,
  PRIMARY KEY (`facility_id`),
  UNIQUE KEY `facility_name` (`facility_name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
INSERT INTO `facilities` VALUES (7,'Airport Shuttle'),(1,'Free WiFi'),(3,'Gym'),(8,'Laundry'),(5,'Parking'),(4,'Restaurant'),(6,'Spa'),(2,'Swimming Pool');
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_facilities`
--

DROP TABLE IF EXISTS `hotel_facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_facilities` (
  `hotel_facilities_id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int NOT NULL,
  `facility_id` int NOT NULL,
  PRIMARY KEY (`hotel_facilities_id`),
  UNIQUE KEY `uq_hotel_facility` (`hotel_id`,`facility_id`),
  KEY `fk_hotelfacility_facility` (`facility_id`),
  CONSTRAINT `fk_hotelfacility_facility` FOREIGN KEY (`facility_id`) REFERENCES `facilities` (`facility_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hotelfacility_hotel` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_facilities`
--

LOCK TABLES `hotel_facilities` WRITE;
/*!40000 ALTER TABLE `hotel_facilities` DISABLE KEYS */;
INSERT INTO `hotel_facilities` VALUES (1,1,1),(2,1,2),(3,1,4),(4,1,5),(5,2,1),(6,2,2),(7,2,3),(8,2,4),(9,2,6),(10,3,1),(11,3,5),(12,3,8),(13,4,1),(14,4,3),(15,4,4),(16,4,7);
/*!40000 ALTER TABLE `hotel_facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `city_id` int NOT NULL,
  `hotel_name` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT '0.0',
  `approval_status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
  PRIMARY KEY (`hotel_id`),
  KEY `fk_hotel_user` (`uid`),
  KEY `fk_hotel_city` (`city_id`),
  CONSTRAINT `fk_hotel_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hotel_user` FOREIGN KEY (`uid`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,2,1,'Sunrise Hotel','123 Sunset Blvd','Maharashtra','90001','sunrise@gmail.com','9876543210',4.5,'Approved'),(2,2,2,'Golden Bay Resort','45 Ocean Road','Kerala','94102','goldenbay@gmail.com','9876543211',4.8,'Approved'),(3,3,5,'Palm Paradise','78 Beach Street','MP','33101','palm@gmail.com','9876543212',4.2,'Approved'),(4,3,6,'Royal Palace','500 Manhattan Ave','Karnataka','10001','royal@gmail.com','9876543213',4.9,'Pending');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int NOT NULL,
  `payment_method` enum('Card','UPI','Cash','NetBanking') NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `payment_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `booking_id` (`booking_id`),
  UNIQUE KEY `transaction_id` (`transaction_id`),
  CONSTRAINT `fk_payment_booking` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,1,'Card',360.00,'TXN100001','2026-07-01 10:05:00'),(2,2,'UPI',1260.00,'TXN100002','2026-07-03 11:10:00'),(3,3,'Cash',300.00,'TXN100003','2026-07-05 09:10:00'),(4,4,'NetBanking',360.00,'TXN100004','2026-07-08 03:15:00');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `hotel_id` int NOT NULL,
  `rating` int NOT NULL,
  `comment` text,
  `review_date` date DEFAULT (curdate()),
  PRIMARY KEY (`review_id`),
  KEY `fk_review_customer` (`customer_id`),
  KEY `fk_review_hotel` (`hotel_id`),
  CONSTRAINT `fk_review_customer` FOREIGN KEY (`customer_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_review_hotel` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chk_rating` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,4,1,5,'Excellent stay with friendly staff.','2026-07-13'),(2,5,3,4,'Very clean rooms and good food.','2026-07-19'),(3,6,2,5,'Amazing experience.','2026-07-23'),(4,7,1,3,'Average service but good location.','2026-07-29');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(3,'Customer'),(2,'Hotel Owner');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_images`
--

DROP TABLE IF EXISTS `room_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(500) NOT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `room_id_idx` (`room_id`),
  CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_images`
--

LOCK TABLES `room_images` WRITE;
/*!40000 ALTER TABLE `room_images` DISABLE KEYS */;
INSERT INTO `room_images` VALUES (1,'images/rooms/room101_1.jpg',1),(2,'images/rooms/room101_2.jpg',1),(3,'images/rooms/room102_1.jpg',2),(4,'images/rooms/room103_1.jpg',3),(5,'images/rooms/room103_2.jpg',3),(6,'images/rooms/room201_1.jpg',4),(7,'images/rooms/room202_1.jpg',5),(8,'images/rooms/room301_1.jpg',6),(9,'images/rooms/room301_2.jpg',6),(10,'images/rooms/room302_1.jpg',7),(11,'images/rooms/room401_1.jpg',8),(12,'images/rooms/room401_2.jpg',8);
/*!40000 ALTER TABLE `room_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int NOT NULL,
  `image_id` int DEFAULT NULL,
  `room_number` varchar(20) DEFAULT NULL,
  `room_type` enum('STANDARD','DELUXE','SUITE') DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `price_per_night` decimal(10,2) DEFAULT NULL,
  `availability_status` enum('AVAILABLE','BOOKED','MAINTENANCE') DEFAULT 'AVAILABLE',
  PRIMARY KEY (`room_id`),
  KEY `fk_room_hotel` (`hotel_id`),
  KEY `fk_room_image` (`image_id`),
  CONSTRAINT `fk_room_hotel` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_room_image` FOREIGN KEY (`image_id`) REFERENCES `room_images` (`image_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `chk_capacity` CHECK ((`capacity` > 0)),
  CONSTRAINT `chk_price` CHECK ((`price_per_night` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,1,1,'101','STANDARD',2,120.00,'AVAILABLE'),(2,1,3,'102','DELUXE',4,180.00,'BOOKED'),(3,1,4,'103','SUITE',5,350.00,'AVAILABLE'),(4,2,6,'201','STANDARD',2,150.00,'AVAILABLE'),(5,2,7,'202','SUITE',4,220.00,'MAINTENANCE'),(6,3,8,'301','DELUXE',4,200.00,'AVAILABLE'),(7,3,10,'302','SUITE',5,420.00,'BOOKED'),(8,4,12,'401','DELUXE',3,280.00,'AVAILABLE');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(100) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE KEY `state_name` (`state_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (3,'Karnataka'),(2,'Kerala'),(1,'Maharashtra'),(4,'MP');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `idproof` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('Active','Inactive','Blocked') DEFAULT 'Active',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `idproof` (`idproof`),
  KEY `fk_user_role` (`role_id`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'System Admin','admin@hotel.com','9000000001','AADHAR100001','admin123','Active'),(2,2,'John Smith','johnowner@gmail.com','9000000002','PASSPORT100002','owner123','Active'),(3,2,'Emma Wilson','emmaowner@gmail.com','9000000003','DL100003','owner123','Active'),(4,3,'Michael Brown','michael@gmail.com','9000000004','AADHAR100004','cust123','Active'),(5,3,'Sophia Johnson','sophia@gmail.com','9000000005','PASSPORT100005','cust123','Active'),(6,3,'David Miller','david@gmail.com','9000000006','VOTER100006','cust123','Active'),(7,3,'Olivia Davis','olivia@gmail.com','9000000007','AADHAR100007','cust123','Active');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-25 22:56:18
