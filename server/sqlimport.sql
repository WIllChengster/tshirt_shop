-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 28, 2020 at 03:11 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `tshirt_shop`
--
CREATE DATABASE IF NOT EXISTS `tshirt_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tshirt_shop`;

-- --------------------------------------------------------

--
-- Table structure for table `shirts`
--

CREATE TABLE `shirts` (
  `shirt_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shirts`
--

INSERT INTO `shirts` (`shirt_id`, `name`, `img`, `price`) VALUES
(1, 'Your Design Here', 'http://localhost:5000/assets/imgs/tshirt.jpeg', 1099),
(2, 'Trooper Tshirt', 'http://localhost:5000/assets/imgs/trooper-tshirt.jpg', 1199),
(3, 'CSS is great!', 'http://localhost:5000/assets/imgs/css_is_great.jpg', 1499),
(4, 'Cannot Brain', 'http://localhost:5000/assets/imgs/cannot-brain.jpeg', 1399),
(7, 'Hire Me ', 'http://localhost:5000/assets/imgs/hire_me.jpeg', 1999),
(8, 'Cash Money', 'http://localhost:5000/assets/imgs/cash_money.jpeg', 1199),
(9, 'Send Memes', 'http://localhost:5000/assets/imgs/send_memes.jpeg', 1099);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `fname`, `lname`, `user_id`) VALUES
('willchengsters@gmail.com', 'hello', 'will', 'cheng', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shirts`
--
ALTER TABLE `shirts`
  ADD PRIMARY KEY (`shirt_id`),
  ADD UNIQUE KEY `UNIQUE` (`shirt_id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shirts`
--
ALTER TABLE `shirts`
  MODIFY `shirt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
