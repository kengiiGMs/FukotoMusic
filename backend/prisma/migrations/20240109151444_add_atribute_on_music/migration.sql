/*
  Warnings:

  - You are about to drop the column `singer_id` on the `music` table. All the data in the column will be lost.
  - Added the required column `mp3` to the `music` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `music` DROP FOREIGN KEY `music_singer_id_fkey`;

-- AlterTable
ALTER TABLE `music` DROP COLUMN `singer_id`,
    ADD COLUMN `mp3` VARCHAR(191) NOT NULL;
