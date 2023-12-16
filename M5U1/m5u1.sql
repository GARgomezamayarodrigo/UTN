-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-12-2023 a las 23:52:28
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `m5u1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio de empleados`
--

DROP TABLE IF EXISTS `ejercicio de empleados`;
CREATE TABLE IF NOT EXISTS `ejercicio de empleados` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(80) NOT NULL,
  `APELLIDO` varchar(80) NOT NULL,
  `TRABAJO` varchar(80) NOT NULL,
  `EDAD` int NOT NULL,
  `SALARIO` int NOT NULL,
  `EMAIL` varchar(80) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `ejercicio de empleados`
--

INSERT INTO `ejercicio de empleados` (`ID`, `NOMBRE`, `APELLIDO`, `TRABAJO`, `EDAD`, `SALARIO`, `EMAIL`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 120000, 'juan_hagan@bignet.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
