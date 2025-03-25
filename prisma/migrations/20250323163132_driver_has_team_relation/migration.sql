/*
  Warnings:

  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `team_id` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_driver_id_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_team_id_fkey";

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "team_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Contract";

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
