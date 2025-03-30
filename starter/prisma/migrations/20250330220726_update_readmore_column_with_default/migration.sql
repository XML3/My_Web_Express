/*
  Warnings:

  - You are about to drop the column `readMore` on the `Content` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "readMore",
ADD COLUMN     "ReadMore" TEXT NOT NULL DEFAULT 'https://github.com/XML3?tab=repositories';
