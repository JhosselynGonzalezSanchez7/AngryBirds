-- MariaDB dump 10.19  Distrib 10.11.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.11.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `angrybirds`
--

DROP TABLE IF EXISTS `angrybirds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `angrybirds` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Primera_Aparicion` varchar(255) NOT NULL,
  `Poder` varchar(255) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Tamaño` varchar(255) NOT NULL,
  `Alcance` varchar(255) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `angrybirds`
--

LOCK TABLES `angrybirds` WRITE;
/*!40000 ALTER TABLE `angrybirds` DISABLE KEYS */;
INSERT INTO `angrybirds` VALUES
(1,'Red','Nivel 1','Hace una batalla de llanto para derrumbatla','M','Mediano','Mediano','2022-11-16 02:29:21','2022-11-16 02:29:21'),
(2,'Jay,Jake,Jim','Nivel 2','Divide en 3','M','Pequeño','Debil','2022-11-16 02:29:22','2022-11-16 02:29:22'),
(3,'Chuck','Nivel 4','Hace mas veloz','M','Mediano','Mediano','2022-11-16 02:29:22','2022-11-16 02:29:22'),
(4,'Matilda','Nivel 16','Dejando huevos de bomba','F','Grande','Fuerte','2022-11-16 02:29:22','2022-11-16 02:29:22'),
(5,'Silver','Nivel 23','Hace un bucle hacia abajo','F','Mediano-Pequeño','Mediano','2022-11-16 02:29:22','2022-11-16 02:29:22'),
(6,'Bomb','Nivel 36','Explotando como una bomba','M','Mediano-Grande','Fuerte','2022-11-16 02:29:22','2022-11-16 02:29:22'),
(7,'Terence','Nivel 44','Destruye mas bloques','M','Mas Grande','Fuerte','2022-11-16 02:29:22','2022-11-16 02:29:22');
/*!40000 ALTER TABLE `angrybirds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES
(1,'Jhosselyn07','Jhosselyn','Gonzalez Sanchez',21,'F','1234','2001-08-07','s','2022-10-16 19:12:04','2022-10-16 19:13:53'),
(2,'Arturo06','Arturo','Jose Gregorio',25,'M','1234','1997-09-06','s','2022-10-16 19:12:13','2022-10-16 19:13:54');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-23  8:05:52
