const downloaded = new Set<string>()

export function canDownload(email: string): boolean {
  return !downloaded.has(email.toLowerCase())
}

export function recordDownload(email: string): void {
  downloaded.add(email.toLowerCase())
}
