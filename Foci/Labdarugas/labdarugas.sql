-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2025. Ápr 08. 11:26
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
-- Adatbázis: `labdarugas`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `school_teams`
--

CREATE TABLE `school_teams` (
  `id` int(11) NOT NULL,
  `team_name` varchar(100) NOT NULL,
  `team_group` enum('alsós','felsős','gimis') NOT NULL,
  `wins` int(11) DEFAULT NULL CHECK (`wins` between 0 and 10),
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_hungarian_ci;

--
-- A tábla adatainak kiíratása `school_teams`
--

INSERT INTO `school_teams` (`id`, `team_name`, `team_group`, `wins`, `image_url`) VALUES
(1, 'Villámok', 'alsós', 3, 'https://cdn.pixabay.com/photo/2017/07/13/14/44/kids-2508313_960_720.jpg'),
(2, 'Tigrisek', 'felsős', 7, 'https://cdn.pixabay.com/photo/2016/11/21/15/53/boys-1843433_960_720.jpg'),
(3, 'Sasok', 'gimis', 5, 'https://cdn.pixabay.com/photo/2017/09/07/08/56/people-2723374_960_720.jpg'),
(4, 'Párducok', 'alsós', 2, 'https://cdn.pixabay.com/photo/2016/11/19/12/52/children-1837375_960_720.jpg'),
(5, 'Farkasok', 'felsős', 9, 'https://cdn.pixabay.com/photo/2017/06/13/12/18/soccer-2395121_960_720.jpg'),
(6, 'Sólymok', 'gimis', 6, 'https://cdn.pixabay.com/photo/2017/08/06/15/13/people-2594456_960_720.jpg'),
(7, 'Oroszlánok', 'alsós', 4, 'https://cdn.pixabay.com/photo/2015/07/28/22/05/children-865116_960_720.jpg'),
(8, 'Medvék', 'felsős', 8, 'https://cdn.pixabay.com/photo/2016/11/19/15/32/football-1838324_960_720.jpg'),
(9, 'Hiénák', 'gimis', 10, 'https://cdn.pixabay.com/photo/2017/08/06/15/13/people-2594459_960_720.jpg'),
(10, 'Rókák', 'alsós', 1, 'https://cdn.pixabay.com/photo/2015/07/28/22/05/children-865116_960_720.jpg'),
(11, 'Pelikánok', 'felsős', 0, 'https://cdn.pixabay.com/photo/2016/11/19/15/32/football-1838324_960_720.jpg'),
(12, 'Kóborlók', 'gimis', 4, 'https://cdn.pixabay.com/photo/2017/06/13/12/18/soccer-2395121_960_720.jpg'),
(13, 'Gepárdok', 'alsós', 6, 'https://cdn.pixabay.com/photo/2016/11/19/12/52/children-1837375_960_720.jpg'),
(14, 'Kakasok', 'felsős', 3, 'https://cdn.pixabay.com/photo/2017/07/13/14/44/kids-2508313_960_720.jpg'),
(15, 'Baglyok', 'gimis', 2, 'https://cdn.pixabay.com/photo/2017/09/07/08/56/people-2723374_960_720.jpg'),
(16, 'Vadászok', 'alsós', 5, 'https://cdn.pixabay.com/photo/2016/11/21/15/53/boys-1843433_960_720.jpg'),
(17, 'Cápák', 'felsős', 7, 'https://cdn.pixabay.com/photo/2017/06/13/12/18/soccer-2395121_960_720.jpg'),
(18, 'Kecskék', 'gimis', 1, 'https://cdn.pixabay.com/photo/2017/08/06/15/13/people-2594456_960_720.jpg'),
(19, 'Sünik', 'alsós', 0, 'https://cdn.pixabay.com/photo/2015/07/28/22/05/children-865116_960_720.jpg'),
(20, 'Gólyák', 'felsős', 8, 'https://cdn.pixabay.com/photo/2017/07/13/14/44/kids-2508313_960_720.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `school_teams`
--
ALTER TABLE `school_teams`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `school_teams`
--
ALTER TABLE `school_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
