import { PrismaClient, Oglas } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllOglasi = async (): Promise<Oglas[]> => {
  return await prisma.oglas.findMany();
};

export const getOglasById = async (id: number): Promise<Oglas | null> => {
  return await prisma.oglas.findUnique({
    where: { id },
  });
};

export const createOglas = async (data: Omit<Oglas, 'id'>): Promise<Oglas> => {
  return await prisma.oglas.create({
    data,
  });
};

export const updateOglas = async (id: number, data: Partial<Oglas>): Promise<Oglas> => {
  return await prisma.oglas.update({
    where: { id },
    data,
  });
};

export const deleteOglas = async (id: number): Promise<Oglas> => {
  return await prisma.oglas.delete({
    where: { id },
  });
};

export {OblikKaroserije} from '@prisma/client';
export {VrstaMjenjaca} from '@prisma/client';
export {VrstaMotora} from '@prisma/client';
