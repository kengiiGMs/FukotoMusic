/*
  Warnings:

  - Made the column `singer_id` on table `albums` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `albums` DROP FOREIGN KEY `albums_singer_id_fkey`;

-- AlterTable
ALTER TABLE `albums` MODIFY `singer_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `albums` ADD CONSTRAINT `albums_singer_id_fkey` FOREIGN KEY (`singer_id`) REFERENCES `singers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
