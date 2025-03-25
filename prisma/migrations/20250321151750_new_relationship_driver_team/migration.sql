/*
  Warnings:

  - A unique constraint covering the columns `[fullname]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `duration` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Driver_fullname_key" ON "Driver"("fullname");
