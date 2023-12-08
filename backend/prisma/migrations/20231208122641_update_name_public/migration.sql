/*
  Warnings:

  - You are about to drop the column `public` on the `playlists` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `playlists` DROP COLUMN `public`,
    ADD COLUMN `is_public` BOOLEAN NOT NULL DEFAULT false;
