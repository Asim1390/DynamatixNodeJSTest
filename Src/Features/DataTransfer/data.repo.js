/**
 * Mongoose model for the Claims collection.
 * @module ClaimsRepository
 * @requires ./data.schema
 */

import Claims from './data.schema.js';

/**
 * Fetches all claims from the database.
 * @function findAllClaims
 * @async
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of claim objects.
 * @throws {Error} If there is an error fetching the claims.
 * @example
 * // Example usage:
 * const claims = await findAllClaims();
 * console.log(claims); // Output: [{ companyReference: 'REF123', policyNumber: 'POL123', ... }, ...]
 */
export const findAllClaims = async () => {
  try {
    const claims = await Claims.find();
    return claims;
  } catch (error) {
    throw new Error('Failed to fetch claims from the database');
  }
};

/**
 * Fetches a specific claim by its ID from the database.
 * @function findClaimById
 * @async
 * @param {string} id - The ID of the claim to fetch.
 * @returns {Promise<Object>} A promise that resolves to the claim object.
 * @throws {Error} If there is an error fetching the claim by ID.
 * @example
 * // Example usage:
 * const claim = await findClaimById('67c5ebefd0a6b39a8f7391ec');
 * console.log(claim); // Output: { companyReference: 'REF123', policyNumber: 'POL123', ... }
 */
export const findClaimById = async (id) => {
  try {
    const claim = await Claims.findById(id);
    return claim;
  } catch (error) {
    throw new Error('Failed to fetch claim by ID from the database');
  }
};