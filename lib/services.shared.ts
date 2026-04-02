export type ServicePoint = { ligne?: string };

export type Service = {
  slug: string;
  titre: string;
  ordre: number;
  icone: string;
  resume: string;
  description: string;
  image: string;
  /** Libellés des puces (page Services). */
  points: string[];
};
