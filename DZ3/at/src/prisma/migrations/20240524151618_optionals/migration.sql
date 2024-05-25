-- DropForeignKey
ALTER TABLE "Oglas" DROP CONSTRAINT "Oglas_objavioKorisnikId_fkey";

-- AlterTable
ALTER TABLE "Oglas" ALTER COLUMN "objavioKorisnikId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Oglas" ADD CONSTRAINT "Oglas_objavioKorisnikId_fkey" FOREIGN KEY ("objavioKorisnikId") REFERENCES "Prodavac"("id") ON DELETE SET NULL ON UPDATE CASCADE;
