/**
 * Mongoose model for the Claims collection.
 * @module ClaimsController
 * @requires ./data.schema
 */

import Claims from './data.schema.js';

/**
 * Fetches all claims from the database and sends a JSON response.
 * @function getClaims
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with all claims data.
 * @throws {Error} If there is an error fetching the claims.
 * @example
 * // Example response:
 * // {
 * //   "success": true,
 * //   "data": [
 * //     { "companyReference": "REF123", "policyNumber": "POL123", ... },
 * //     { "companyReference": "REF456", "policyNumber": "POL456", ... }
 * //   ]
 * // }
 */
export const getClaims = async (req, res) => {
  try {
    const claims = await Claims.find();
    res.status(200).json({ success: true, data: claims });
  } catch (error) {
    console.error('Error fetching claims:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch claims' });
  }
};

/**
 * Fetches a specific claim by its ID from the database and sends a JSON response.
 * @function getClaimById
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {string} req.params.id - The ID of the claim to fetch.
 * @returns {Promise<void>} Sends a JSON response with the claim data.
 * @throws {Error} If there is an error fetching the claim by ID.
 * @example
 * // Example request:
 * // GET /claims/67c5ebefd0a6b39a8f7391ec
 * // Example response:
 * // {
 * //   "success": true,
 * //   "data": {
 * //     "companyReference": "REF123",
 * //     "policyNumber": "POL123",
 * //     ...
 * //   }
 * // }
 */
export const getClaimById = async (req, res) => {
  try {
    const { id } = req.params;
    const claim = await Claims.findById(id);
    if (!claim) {
      return res.status(404).json({ success: false, message: 'Claim not found' });
    }
    res.status(200).json({ success: true, data: claim });
  } catch (error) {
    console.error('Error fetching claim by ID:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch claim' });
  }
};