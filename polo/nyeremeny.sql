-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2025. Ápr 13. 12:45
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `nyeremeny`
--
CREATE DATABASE IF NOT EXISTS `nyeremeny` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nyeremeny`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ajandek_polok`
--

CREATE TABLE `ajandek_polok` (
  `id` int(11) NOT NULL,
  `kep_utvonal` varchar(255) NOT NULL,
  `ar` int(11) NOT NULL,
  `tipus` enum('férfi','nő','unisex') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ajandek_polok`
--

INSERT INTO `ajandek_polok` (`id`, `kep_utvonal`, `ar`, `tipus`) VALUES
(1, './IMG/1.jpg', 3990, 'férfi'),
(2, './IMG/2.jpg', 4290, 'nő'),
(3, './IMG/3.jpg', 4590, 'unisex'),
(4, './IMG/4.jpg', 3790, 'férfi'),
(5, './IMG/5.jpg', 4990, 'nő'),
(6, './IMG/6.jpg', 3490, 'unisex'),
(7, './IMG/7.jpg', 4190, 'férfi'),
(8, './IMG/8.jpg', 3890, 'nő'),
(9, './IMG/9.jpg', 4690, 'unisex'),
(10, './IMG/10.jpg', 3890, 'férfi'),
(11, './IMG/11.jpg', 4490, 'nő'),
(12, './IMG/12.jpg', 3990, 'unisex'),
(13, './IMG/13.jpg', 4290, 'férfi'),
(14, './IMG/14.jpg', 3790, 'nő'),
(15, './IMG/15.jpg', 4890, 'unisex'),
(16, './IMG/16.jpg', 4090, 'férfi'),
(17, './IMG/17.jpg', 3590, 'nő'),
(18, './IMG/18.jpg', 4790, 'unisex'),
(19, './IMG/19.jpg', 4190, 'férfi'),
(20, './IMG/20.jpg', 3890, 'nő');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `regisztracio`
--

CREATE TABLE `regisztracio` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `cim` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefon` varchar(30) DEFAULT NULL,
  `meret` enum('XS','S','M','L','XL','XXL') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `ajandek_polok`
--
ALTER TABLE `ajandek_polok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `regisztracio`
--
ALTER TABLE `regisztracio`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `ajandek_polok`
--
ALTER TABLE `ajandek_polok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT a táblához `regisztracio`
--
ALTER TABLE `regisztracio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
