-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 10, 2022 at 04:12 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `support_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_resolved` int(11) DEFAULT NULL,
  `is_assigned` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220109153547-create-user.js'),
('20220109153830-create-issues.js'),
('20220109154013-create-support-agent.js'),
('20220109154302-create-support-agent-issues.js');

-- --------------------------------------------------------

--
-- Table structure for table `support_agents`
--

CREATE TABLE `support_agents` (
  `id` int(11) NOT NULL,
  `is_available` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `support_agents`
--

INSERT INTO `support_agents` (`id`, `is_available`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 0, 2, '2022-01-09 20:47:35', '2022-01-10 08:36:27'),
(2, 0, 3, '2022-01-09 20:47:35', '2022-01-10 08:47:53'),
(3, 0, 4, '2022-01-09 21:56:26', '2022-01-10 08:48:14'),
(4, 0, 5, '2022-01-09 21:56:26', '2022-01-10 08:36:01');

-- --------------------------------------------------------

--
-- Table structure for table `support_agent_issues`
--

CREATE TABLE `support_agent_issues` (
  `id` int(11) NOT NULL,
  `issue_id` int(11) DEFAULT NULL,
  `support_agent_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `phone`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Jeremiah Jayce', 'jerryjayce@gmail.com', '09058163129', 'a;lskdfnopjsnfdoipnsfaoipnmlka;nsdasd', 1, '2022-01-09 20:48:17', '2022-01-09 20:48:17'),
(2, 'test agent 1', 'agenemail1@gmail.com', '23874897698137', 'lksdjabnfjansfkl;nmasl;kdfndsa', 2, '2022-01-09 20:48:17', '2022-01-09 20:48:17'),
(3, 'test agent 2', 'agentemail2@gmail.com', '82348943240', 'kdjsnkjlnsdkjldsds', 2, '2022-01-09 20:48:17', '2022-01-09 20:48:17'),
(4, 'test agent 3', 'agentemail3@gmail.com', '0934890823904', 'ksdlnjfojsndafoi;asd', 2, '2022-01-09 20:48:17', '2022-01-09 20:48:17'),
(5, 'test agent 4', 'agentemail4@gmail.com', '92374987324423', 'l;kzdhsfpoisdnfpklj;adfs', 2, '2022-01-09 20:48:17', '2022-01-09 20:48:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `support_agents`
--
ALTER TABLE `support_agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_agent_issues`
--
ALTER TABLE `support_agent_issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `support_agents`
--
ALTER TABLE `support_agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `support_agent_issues`
--
ALTER TABLE `support_agent_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
