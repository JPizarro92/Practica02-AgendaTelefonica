-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-05-2021 a las 14:44:48
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operator`
--

DROP TABLE IF EXISTS `operator`;
CREATE TABLE IF NOT EXISTS `operator` (
  `ope_id` int(255) NOT NULL AUTO_INCREMENT,
  `ope_name` varchar(255) NOT NULL,
  `ope_delete` varchar(1) NOT NULL DEFAULT 'N',
  `ope_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ope_update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ope_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phone`
--

DROP TABLE IF EXISTS `phone`;
CREATE TABLE IF NOT EXISTS `phone` (
  `ph_id` int(255) NOT NULL AUTO_INCREMENT,
  `ph_type` varchar(50) NOT NULL,
  `ph_number` varchar(10) NOT NULL,
  `ph_delete` varchar(1) NOT NULL DEFAULT 'N',
  `ph_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ph_update_at` timestamp NULL DEFAULT NULL,
  `ope_id` int(255) DEFAULT NULL,
  `usu_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`ph_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int(255) NOT NULL AUTO_INCREMENT,
  `usu_cedula` varchar(15) NOT NULL,
  `usu_name` varchar(50) NOT NULL,
  `usu_surname` varchar(100) NOT NULL,
  `usu_date_birth` date NOT NULL,
  `usu_rol` varchar(50) NOT NULL,
  `usu_email` varchar(255) NOT NULL,
  `usu_sex` varchar(1) NOT NULL DEFAULT 'N',
  `usu_password` varchar(255) NOT NULL,
  `usu_image` varchar(255) DEFAULT NULL,
  `usu_address` varchar(255) NOT NULL,
  `usu_delete` varchar(1) NOT NULL DEFAULT 'N',
  `usu_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usu_updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`usu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usu_id`, `usu_cedula`, `usu_name`, `usu_surname`, `usu_date_birth`, `usu_rol`, `usu_email`,  `usu_sex`,`usu_password`, `usu_image`, `usu_address`, `usu_delete`, `usu_created_at`, `usu_updated_at`) VALUES
(1, '0105165542', 'JORGE VINICIO', 'PIZARRO ROMERO', '1992-01-16', 'ADMIN', 'jpizarror@est.ups.edu.ec', 'M', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '', 'N', '2021-05-22 15:43:48', NULL),
(2, '0105622241', 'SEGUNDO ROLANDO', 'CALLE TIRADO', '1996-05-15', 'ADMIN', 'scallet@est.ups.edu.ec', 'M', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '', 'N', '2021-05-22 15:50:02', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
