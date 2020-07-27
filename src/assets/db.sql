-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2020 a las 22:30:38
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` char(1) DEFAULT 'A',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `usuario_id`, `titulo`, `descripcion`, `fecha`, `estatus`, `created_at`, `updated_at`) VALUES(1, 1, 'Tarea de prueba 1', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 1', '2020-07-28 17:30:00', 'A', '2020-07-26 19:27:01', '2020-07-26 19:27:01');
INSERT INTO `tareas` (`id`, `usuario_id`, `titulo`, `descripcion`, `fecha`, `estatus`, `created_at`, `updated_at`) VALUES(2, 1, 'Tarea de prueba 2', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 2', '2020-07-28 19:00:00', 'F', '2020-07-26 19:27:01', '2020-07-26 19:27:01');
INSERT INTO `tareas` (`id`, `usuario_id`, `titulo`, `descripcion`, `fecha`, `estatus`, `created_at`, `updated_at`) VALUES(3, 2, 'Tarea de prueba 3', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 3', '2020-07-28 18:00:00', 'A', '2020-07-26 19:27:01', '2020-07-26 19:27:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `avatar`, `nombre`, `email`, `created_at`, `updated_at`) VALUES(1, '15da18f68e6a6931116180c91aae5132', 'Franklin Archila', 'franklin.archila@gmail.com', '2020-07-26 19:20:50', '2020-07-26 19:20:50');
INSERT INTO `usuarios` (`id`, `avatar`, `nombre`, `email`, `created_at`, `updated_at`) VALUES(2, '09abd59eb5653a7183ba812b8261f48b', 'Usuario Test 1', 'user1@gmail.com', '2020-07-26 19:22:17', '2020-07-26 19:22:17');
INSERT INTO `usuarios` (`id`, `avatar`, `nombre`, `email`, `created_at`, `updated_at`) VALUES(3, '205e460b479e2e5b48aec07710c08d50', 'Usuario Test 2', 'user2@gmail.com', '2020-07-26 19:22:18', '2020-07-26 19:22:18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tarea1` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `fk_tarea1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
