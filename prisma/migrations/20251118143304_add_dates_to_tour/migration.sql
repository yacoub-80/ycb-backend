/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "createdAt",
DROP COLUMN "date",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "role";
