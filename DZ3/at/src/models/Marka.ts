import { PrismaClient, Marka } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMarke = async (): Promise<Marka[]> => {
  return await prisma.marka.findMany();
  // return [
  //   {
  //     id: 1,
  //     naziv: 'Opel',
  //     ikonaUrl: 'https://www.opel.hr/content/dam/Opel/Europe/croatia/nscwebsite/hr/00_Home/Opel-Logo-Header.png',
  //   },
  //   {
  //     id: 2,
  //     naziv: 'Volkswagen',
  //     ikonaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png',
  //   },
  //   {
  //     id: 3,
  //     naziv: 'Audi',
  //     ikonaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Audi-Logo_2016.svg/1200px-Audi-Logo_2016.svg.png',
  //   },
  // ];
};

export const getMarkaById = async (id: number): Promise<Marka | null> => {
  return await prisma.marka.findUnique({
    where: { id },
  });
};

export const createMarka = async (data: Omit<Marka, 'id'>): Promise<Marka> => {
  return await prisma.marka.create({
    data,
  });
};

export const updateMarka = async (id: number, data: Partial<Marka>): Promise<Marka> => {
  return await prisma.marka.update({
    where: { id },
    data,
  });
};

export const deleteMarka = async (id: number): Promise<Marka> => {
  return await prisma.marka.delete({
    where: { id },
  });
};
