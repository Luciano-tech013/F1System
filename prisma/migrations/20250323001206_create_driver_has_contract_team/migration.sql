/*
  Warnings:

  - The primary key for the `Contract` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `salary` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_pkey",
ADD COLUMN     "salary" DECIMAL(65,30) NOT NULL,
ADD CONSTRAINT "Contract_pkey" PRIMARY KEY ("driver_id", "team_id", "entry_date");
