/*
  Warnings:

  - You are about to drop the column `trenutnaKilomentraza` on the `PovijestServisiranja` table. All the data in the column will be lost.
  - Added the required column `trenutnaKilometraza` to the `PovijestServisiranja` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PovijestServisiranja" DROP COLUMN "trenutnaKilomentraza",
ADD COLUMN     "trenutnaKilometraza" INTEGER NOT NULL;
