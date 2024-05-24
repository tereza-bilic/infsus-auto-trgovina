-- CreateEnum
CREATE TYPE "OblikKaroserije" AS ENUM ('Limuzina', 'Karavan', 'Kupe', 'Kabriolet', 'SUV', 'Pickup', 'Minivan');

-- CreateEnum
CREATE TYPE "VrstaMotora" AS ENUM ('Benzin', 'Dizel', 'Elektricni', 'Hibridni');

-- CreateEnum
CREATE TYPE "VrstaMjenjaca" AS ENUM ('Manuelni', 'Automatski');

-- CreateTable
CREATE TABLE "Oglas" (
    "id" SERIAL NOT NULL,
    "naslov" TEXT NOT NULL,
    "modelId" INTEGER NOT NULL,
    "opis" TEXT NOT NULL,
    "slikaUrl" TEXT NOT NULL,
    "kilometraza" INTEGER NOT NULL,
    "cijena" DOUBLE PRECISION NOT NULL,
    "godinaProizvodnje" INTEGER NOT NULL,
    "oblikKaroserije" "OblikKaroserije" NOT NULL,
    "vrstaMotora" "VrstaMotora" NOT NULL,
    "vrstaMjenjaca" "VrstaMjenjaca" NOT NULL,
    "snagaKw" INTEGER NOT NULL,
    "datumObjave" TIMESTAMP(3) NOT NULL,
    "objavioKorisnikId" INTEGER NOT NULL,

    CONSTRAINT "Oglas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prodavac" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Prodavac_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marka" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,

    CONSTRAINT "Marka_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PovijestServisiranja" (
    "id" SERIAL NOT NULL,
    "datum" TIMESTAMP(3) NOT NULL,
    "serviser" TEXT NOT NULL,
    "opis" TEXT NOT NULL,
    "cijena" DOUBLE PRECISION NOT NULL,
    "oglasId" INTEGER NOT NULL,

    CONSTRAINT "PovijestServisiranja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prodavac_email_key" ON "Prodavac"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Marka_naziv_key" ON "Marka"("naziv");

-- AddForeignKey
ALTER TABLE "Oglas" ADD CONSTRAINT "Oglas_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Marka"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Oglas" ADD CONSTRAINT "Oglas_objavioKorisnikId_fkey" FOREIGN KEY ("objavioKorisnikId") REFERENCES "Prodavac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PovijestServisiranja" ADD CONSTRAINT "PovijestServisiranja_oglasId_fkey" FOREIGN KEY ("oglasId") REFERENCES "Oglas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
