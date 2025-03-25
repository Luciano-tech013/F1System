/*
  Warnings:

  - Added the required column `debut_team` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `founder` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `president` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "debut_team" TEXT NOT NULL,
ADD COLUMN     "debut_year" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "height" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "number_of_championships" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "number_of_fastest_laps" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "number_of_poles" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "weight" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "founder" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "number_of_poles" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "number_of_races" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "number_of_races_won" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "president" TEXT NOT NULL;
