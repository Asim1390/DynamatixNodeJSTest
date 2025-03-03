import Claims from './data.schema.js';

export const findAllClaims = async () => {
  try {
    const claims = await Claims.find();
    return claims;
  } catch (error) {
    throw new Error('Failed to fetch claims from the database');
  }
};

export const findClaimById = async (id) => {
  try {
    const claim = await Claims.findById(id);
    return claim;
  } catch (error) {
    throw new Error('Failed to fetch claim by ID from the database');
  }
};