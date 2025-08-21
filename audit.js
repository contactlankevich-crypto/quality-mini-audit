import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const report = {
      title: '',
      description: '',
      h1: '',
      https: url.startsWith('https://')
    };

    // Fetch HTML
    const response = await fetch(url);
    const html = await response.text();

    // Simple regex-based parse
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    report.title = titleMatch ? titleMatch[1] : '';

    const descMatch = html.match(/<meta name=["']description["'] content=["'](.*?)["']/i);
    report.description = descMatch ? descMatch[1] : '';

    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    report.h1 = h1Match ? h1Match[1] : '';

    // Return results
    res.status(200).json(report);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch site' });
  }
}
