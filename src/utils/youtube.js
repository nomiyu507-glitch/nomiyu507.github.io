/**
 * 将 YouTube 观看链接转为 embed URL；非 YouTube 或无法解析时返回空字符串。
 */
export function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  try {
    const u = new URL(trimmed)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0]
      if (id) return `https://www.youtube.com/embed/${id}`
    }
    // https://studio.youtube.com/video/VIDEO_ID/edit
    if (host === 'studio.youtube.com') {
      const m = u.pathname.match(/\/video\/([^/]+)/)
      if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}`
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (u.pathname.startsWith('/shorts/')) {
        const parts = u.pathname.split('/').filter(Boolean)
        const id = parts[1]
        if (id) return `https://www.youtube.com/embed/${id}`
      }
      const v = u.searchParams.get('v')
      if (v) return `https://www.youtube.com/embed/${v}`
    }
  } catch {
    return ''
  }
  return ''
}
