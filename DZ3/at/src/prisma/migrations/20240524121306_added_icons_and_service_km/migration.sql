/*
  Warnings:

  - Added the required column `ikonaUrl` to the `Marka` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trenutnaKilomentraza` to the `PovijestServisiranja` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marka" ADD COLUMN     "ikonaUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PovijestServisiranja" ADD COLUMN     "trenutnaKilomentraza" INTEGER NOT NULL;
