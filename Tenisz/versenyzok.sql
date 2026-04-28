-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2025. Ápr 01. 22:05
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
-- Adatbázis: `versenyzok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `teniszezok`
--

CREATE TABLE `teniszezok` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nev` varchar(100) DEFAULT NULL,
  `csoport` varchar(50) DEFAULT NULL,
  `gyozelem` int(11) DEFAULT NULL,
  `fenykep` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `teniszezok`
--

INSERT INTO `teniszezok` (`id`, `nev`, `csoport`, `gyozelem`, `fenykep`) VALUES
(1, 'Novak Djokovic', 'Profi', 1050, 'https://images.pexels.com/photos/5740513/pexels-photo-5740513.jpeg?auto=compress&cs=tinysrgb&w=1200'),
(2, 'Rafael Nadal', 'Profi', 1068, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(3, 'Roger Federer', 'Veterán', 1251, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(4, 'Carlos Alcaraz', 'Profi', 180, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(5, 'Daniil Medvedev', 'Profi', 340, 'https://www.atptour.com/en/players/novak-djokovic/D643/overview'),
(6, 'Stefanos Tsitsipas', 'Profi', 280, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(7, 'Alexander Zverev', 'Profi', 320, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(8, 'Andrey Rublev', 'Profi', 290, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(9, 'Jannik Sinner', 'Profi', 200, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(10, 'Taylor Fritz', 'Profi', 230, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(11, 'Casper Ruud', 'Profi', 220, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(12, 'Matteo Berrettini', 'Profi', 210, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(13, 'Felix Auger-Aliassime', 'Profi', 190, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(14, 'Holger Rune', 'Profi', 170, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(15, 'Frances Tiafoe', 'Profi', 200, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(16, 'Hubert Hurkacz', 'Profi', 240, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(17, 'Grigor Dimitrov', 'Profi', 430, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(18, 'Stan Wawrinka', 'Veterán', 560, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(19, 'Andy Murray', 'Veterán', 720, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
(20, 'John Doe', 'Amatőr', 50, 'https://images.pexels.com/photos/5730295/pexels-photo-5730295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `teniszezok`
--
ALTER TABLE `teniszezok`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `teniszezok`
--
ALTER TABLE `teniszezok`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
