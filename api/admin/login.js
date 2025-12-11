const { getDb } = require('../_db');
const crypto = require('crypto');

async function parseJsonBody(req) {
  if (req.body && Object.keys(req.body).length) return req.body;
  return await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
    });
    req.on('error', err => reject(err));
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  let body;
  try { body = await parseJsonBody(req); } catch (err) { return res.status(400).json({ error: 'Invalid JSON body' }); }

  const { username, password } = body || {};
  if (!username || !password) return res.status(400).json({ error: 'Missing credentials' });

  const db = await getDb();
  const admin = await db.collection('admins').findOne({ username });
  if (!admin) return res.status(401).json({ error: 'Invalid credentials' });
  if (admin.password !== password) return res.status(401).json({ error: 'Invalid credentials' });

  const token = crypto.randomBytes(32).toString('hex');
  await db.collection('sessions').insertOne({ token, userId: admin._id, role: 'admin', createdAt: new Date() });
  res.json({ token, user: { username: admin.username, name: admin.name } });
};
