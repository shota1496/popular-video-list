export default async function handler(req, res) {
  try {
    const apiUrl = 'https://snapshot.search.nicovideo.jp/api/v2/snapshot/video/contents/search?q=&targets=title&fields=contentId,title,viewCounter&_sort=-viewCounter&_offset=0&_limit=3&_context=apiguide';
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'API fetch failed', detail: error.message });
  }
}
