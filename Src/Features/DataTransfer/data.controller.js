import Claims from './data.schema.js'; 

export const getClaims = async (req, res) => {
  try {
    const claims = await Claims.find(); 
    res.status(200).json({ success: true, data: claims });
  } catch (error) {
    console.error('Error fetching claims:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch claims' });
  }
};

export const getClaimById = async (req, res) => {
  try {
    const { id } = req.params;
    const claim = await Claims.findById(id); //here are some eg id's 67c5ebefd0a6b39a8f7391ec , 67c5ebefd0a6b39a8f7391ed , 67c5ebefd0a6b39a8f7391f3
    if (!claim) {
      return res.status(404).json({ success: false, message: 'Claim not found' });
    }
    res.status(200).json({ success: true, data: claim });
  } catch (error) {
    console.error('Error fetching claim by ID:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch claim' });
  }
};