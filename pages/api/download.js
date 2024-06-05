import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { type } = req.query;

  // Define the Google Drive file URLs
  const fileUrls = {
    resume: 'https://drive.google.com/uc?export=download&id=165w5EF5gtC2w7vRot5xZiRWuhIg38A4z',
    freelance: 'https://drive.google.com/uc?export=download&id=1v2R4Ui9GBApIwQQj5x_F6KBaEtuJGY4-'
  };

  // Check if the requested type is valid
  if (!fileUrls[type]) {
    return res.status(400).json({ error: 'Invalid file type' });
  }

  try {
    // Fetch the file from Google Drive
    const response = await fetch(fileUrls[type]);
    const fileBuffer = await response.buffer();

    // Set the appropriate headers and send the file to the client
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${type}.pdf`);
    res.send(fileBuffer);
  } catch (error) {
    console.error('Error fetching the file:', error);
    res.status(500).json({ error: 'Failed to download the file' });
  }
}
