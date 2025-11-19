/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `checkIn` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "createdAt",
ADD COLUMN     "checkIn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOut" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "guests" INTEGER NOT NULL,
ADD COLUMN     "hotelId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
