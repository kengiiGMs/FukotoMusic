/*
  Warnings:

  - Added the required column `banner` to the `albums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner` to the `music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner` to the `playlists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner` to the `singers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `albums` ADD COLUMN `banner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `music` ADD COLUMN `banner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `playlists` ADD COLUMN `banner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `singers` ADD COLUMN `banner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `banner` VARCHAR(191) NOT NULL;
