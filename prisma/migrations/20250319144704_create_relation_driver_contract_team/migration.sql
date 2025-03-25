-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "number_of_wins" INTEGER NOT NULL DEFAULT 0,
    "number_of_gp" INTEGER NOT NULL DEFAULT 0,
    "main_sponsor" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "driver_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "finish_date" TIMESTAMP(3),

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("driver_id","team_id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "base" TEXT NOT NULL,
    "date_fundation" TIMESTAMP(3) NOT NULL,
    "main_sponsor" TEXT NOT NULL,
    "number_of_championships_won" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
