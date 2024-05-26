// src/models/PovijestServisiranja.ts
import { PrismaClient, PovijestServisiranja } from '@prisma/client';

const prisma = new PrismaClient();

export const validateServisHistory = async (servisHistory: {
  datum: Date;
  trenutnaKilomentraza: number;
  oglasId: number;
}) => {
  // Fetch the previous servis history for the same oglas, ordered by date descending
  const previousHistory = await prisma.povijestServisiranja.findFirst({
    where: {
      oglasId: servisHistory.oglasId,
    },
    orderBy: {
      datum: 'desc',
    },
  });

  if (previousHistory) {
    if (servisHistory.trenutnaKilomentraza <= previousHistory.trenutnaKilomentraza) {
      throw new Error('Trenutna kilometraža mora biti veća od kilometraže prethodnog servisa.');
    }
  }
};

export const getAllServisHistories = async (): Promise<PovijestServisiranja[]> => {
  return (await prisma.povijestServisiranja.findMany()).sort((a, b) => a.datum.getTime() - b.datum.getTime());
};

export const getServisHistoryById = async (id: number): Promise<PovijestServisiranja | null> => {
  return prisma.povijestServisiranja.findUnique({
    where: { id },
  });
};

export const getServiceHistoryByOglasId = async (oglasId: number): Promise<PovijestServisiranja[]> => {
  return (await prisma.povijestServisiranja.findMany({
    where: { oglasId },
  })).sort((a, b) => a.datum.getTime() - b.datum.getTime());
};

export const createServisHistory = async (data: Omit<PovijestServisiranja, 'id'>): Promise<PovijestServisiranja> => {
  await validateServisHistory(data);
  return await prisma.povijestServisiranja.create({
    data,
  });
};

export const updateServisHistory = async (id: number, servisHistory: {
  datum: Date;
  serviser: string;
  opis: string;
  cijena: number;
  trenutnaKilomentraza: number;
}) => {
  const existingServisHistory = await prisma.povijestServisiranja.findUnique({
    where: { id },
  });

  if (!existingServisHistory) {
    throw new Error('Servis history not found.');
  }

  // Fetch all previous servis histories for the same oglas, excluding the current entry
  const previousHistories = await prisma.povijestServisiranja.findMany({
    where: {
      oglasId: existingServisHistory.oglasId,
      datum: { lt: servisHistory.datum },
    },
    orderBy: {
      datum: 'desc',
    },
  });

  // Check against the most recent previous history, if any
  if (previousHistories.length > 0) {
    const previousHistory = previousHistories[0];
    if (servisHistory.trenutnaKilomentraza <= previousHistory.trenutnaKilomentraza) {
      throw new Error('Trenutna kilometraža mora biti veća od kilometraže prethodnog servisa.');
    }
  }

  return prisma.povijestServisiranja.update({
    where: { id },
    data: servisHistory,
  });
};

export const deleteServisHistory = async (id: number): Promise<PovijestServisiranja> => {
  return prisma.povijestServisiranja.delete({
    where: { id },
  });
};
