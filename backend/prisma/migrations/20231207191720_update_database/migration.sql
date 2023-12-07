/*
  Warnings:

  - Added the required column `singer_id` to the `albums` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `albums` ADD COLUMN `singer_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `albums` ADD CONSTRAINT `albums_singer_id_fkey` FOREIGN KEY (`singer_id`) REFERENCES `singers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
