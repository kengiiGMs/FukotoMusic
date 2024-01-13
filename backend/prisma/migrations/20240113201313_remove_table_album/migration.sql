/*
  Warnings:

  - You are about to drop the column `album_id` on the `music` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `music` table. All the data in the column will be lost.
  - You are about to drop the `albums` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `singer_id` to the `music` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `albums` DROP FOREIGN KEY `albums_singer_id_fkey`;

-- DropForeignKey
ALTER TABLE `music` DROP FOREIGN KEY `music_album_id_fkey`;

-- AlterTable
ALTER TABLE `music` DROP COLUMN `album_id`,
    DROP COLUMN `releaseDate`,
    ADD COLUMN `singer_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `albums`;

-- AddForeignKey
ALTER TABLE `music` ADD CONSTRAINT `music_singer_id_fkey` FOREIGN KEY (`singer_id`) REFERENCES `singers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
