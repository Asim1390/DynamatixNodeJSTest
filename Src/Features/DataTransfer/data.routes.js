/**
 * Express router for handling claims-related routes.
 * @module claimsRouter
 * @requires express
 * @requires ./data.controller
 */

import express from 'express';
import { getClaims, getClaimById } from './data.controller.js';

const router = express.Router();

/**
 * Route to fetch all claims.
 * @name GET /claims
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with all claims data.
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
router.get('/claims', getClaims);

/**
 * Route to fetch a specific claim by ID.
 * @name GET /claims/:id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {string} req.params.id - The ID of the claim to fetch.
 * @returns {Promise<void>} Sends a JSON response with the claim data.
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
router.get('/claims/:id', getClaimById);

export default router;