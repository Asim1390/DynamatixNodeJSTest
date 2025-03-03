import express from 'express';
import { getClaims, getClaimById } from './data.controller.js';

const router = express.Router();


router.get('/claims', getClaims); // Fetch all claims
router.get('/claims/:id', getClaimById); // Fetch a specific claim by ID here are some eg id's 67c5ebefd0a6b39a8f7391ec , 67c5ebefd0a6b39a8f7391ed , 67c5ebefd0a6b39a8f7391f3

export default router;