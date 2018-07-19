-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2018 at 12:18 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'Avraham Fried', 'images/Fried.jpg', '[{\"name\": \"itcha Ani\", \"url\": \"./songs/Avraham-Fried/itchaAni.mp3\"},{\"name\": \"Maslool Mechadash\", \"url\": \"./songs/Avraham-Fried/MasloolMechadash.mp3\"},{\"name\": \"Pashut Anashim\", \"url\": \"./songs/Avraham-Fried/PashutAnashim.mp3\"},{\"name\": \"Shaarei Dmaot\", \"url\": \"./songs/Avraham-Fried/ShaareiDmaot.mp3\"},{\"name\": \"Shlach li\", \"url\": \"./songs/Avraham-Fried/Shlachli.mp3\"}]'),
(2, 'Benny Friedman', 'images/Benny.jpg', '[{\"name\": \"Ivri Anochi\", \"url\": \"./songs/Benny-Friedman/IvriAnochi.mp3\"},{\"name\": \"Kulam Sharim\", \"url\": \"./songs/Benny-Friedman/KulamSharim.mp3\"},{\"name\": \"Toda\", \"url\": \"./songs/Benny-Friedman/Toda.mp3\"},{\"name\": \"Who believes\", \"url\": \"./songs/Benny-Friedman/Whobelieves.mp3\"}]'),
(3, 'Uziya Tzadok', 'images/uziya.jpg', '[{\"name\": \"Shir Yamecha\", \"url\": \"./songs/Uziya-Tzadok/ShirYamecha.mp3\"},{\"name\": \"Toda\", \"url\": \"./songs/Uziya-Tzadok/Toda.mp3\"},{\"name\": \"Tzel Ez Tamar\", \"url\": \"./songs/Uziya-Tzadok/TzelEzTamar.mp3\"}]'),
(4, 'Yaakov Shwekey', 'images/Yaakov.jpg', '[{\"name\": \"Habet\", \"url\": \"./songs/Yaakov-Shwekey/Habet.mp3\"},{\"name\": \"Maera\", \"url\": \"./songs/Yaakov-Shwekey/Maera.mp3\"},{\"name\": \"Rachem\", \"url\": \"./songs/Yaakov-Shwekey/Rachem.mp3\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
