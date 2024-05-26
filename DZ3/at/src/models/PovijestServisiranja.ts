// src/models/PovijestServisiranja.ts
import { PrismaClient, PovijestServisiranja } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllServisHistories = async (): Promise<PovijestServisiranja[]> => {
  return prisma.povijestServisiranja.findMany();
};

export const getServisHistoryById = async (id: number): Promise<PovijestServisiranja | null> => {
  return prisma.povijestServisiranja.findUnique({
    where: { id },
  });
};

export const getServiceHistoryByOglasId = async (oglasId: number): Promise<PovijestServisiranja[]> => {
  return prisma.povijestServisiranja.findMany({
    where: { oglasId },
  });
};

export const createServisHistory = async (data: Omit<PovijestServisiranja, 'id'>): Promise<PovijestServisiranja> => {
  return await prisma.povijestServisiranja.create({
    data,
  });
};

export const updateServisHistory = async (id: number, data: Partial<PovijestServisiranja>): Promise<PovijestServisiranja> => {
  return prisma.povijestServisiranja.update({
    where: { id },
    data,
  });
};

export const deleteServisHistory = async (id: number): Promise<PovijestServisiranja> => {
  return prisma.povijestServisiranja.delete({
    where: { id },
  });
};
