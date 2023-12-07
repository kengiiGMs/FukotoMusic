-- DropForeignKey
ALTER TABLE `albums` DROP FOREIGN KEY `albums_singer_id_fkey`;

-- DropForeignKey
ALTER TABLE `music` DROP FOREIGN KEY `music_album_id_fkey`;

-- AlterTable
ALTER TABLE `albums` MODIFY `singer_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `music` MODIFY `album_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `albums` ADD CONSTRAINT `albums_singer_id_fkey` FOREIGN KEY (`singer_id`) REFERENCES `singers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `music` ADD CONSTRAINT `music_album_id_fkey` FOREIGN KEY (`album_id`) REFERENCES `albums`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
