/*
  Warnings:

  - Added the required column `position` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "position" TEXT NOT NULL;
