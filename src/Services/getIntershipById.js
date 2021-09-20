import { dataIntership } from "../data/dataInternship";

export const getIntershipById = (id) => {
  return dataIntership.find((inter) => inter.IdIntership === id);
};
