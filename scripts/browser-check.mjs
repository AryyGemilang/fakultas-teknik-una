// Run with PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node scripts/browser-check.mjs
import assert from 'node:assert/strict'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const browser = await chromium.launch({ channel: 'chromium', headless: true })
try {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  const origin = (process.env.SITE_URL || 'http://localhost:5173').replace(/\/$/, '') + '/#'
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of ['/', '/profil', '/program-studi', '/program-studi/teknik-sipil', '/program-studi/teknik-mesin', '/program-studi/teknik-informatika', '/pimpinan', '/dosen', '/dosen/dekan', '/berita', '/berita/demo-01', '/fasilitas', '/kontak', '/tidak-ada']) {
      await page.goto(origin + path)
      await page.locator('main').waitFor()
      assert.ok(await page.locator('main').innerText(), path)
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px overflow: ${path}`)
    }
  }
  await page.goto(origin)
  await page.getByRole('button', { name: 'Buka menu' }).click()
  await page.getByRole('navigation', { name: 'Navigasi seluler' }).getByRole('link', { name: 'Dosen', exact: true }).click()
  await page.waitForURL('**/dosen')
  await page.getByLabel('Filter program studi').selectOption('teknik-mesin')
  assert.equal(await page.locator('main article').count(), 6)
  await page.getByPlaceholder('Cari nama atau bidang keahlian...').fill('tidak ditemukan')
  assert.match(await page.locator('main').innerText(), /Tidak ada dosen/)
  await page.goto(origin + '/berita?kategori=Prestasi')
  assert.equal(await page.locator('main article').count(), 1)
  await page.goto(origin)
  const carousel = page.getByRole('region', { name: 'Dosen Fakultas Teknik' })
  await carousel.getByRole('button', { name: 'Dosen berikutnya' }).click()
  assert.equal(await carousel.locator('li[inert]').count(), 17)
  assert.equal(await carousel.locator('li').nth(0).getAttribute('aria-hidden'), 'true')
  await carousel.focus()
  await page.keyboard.press('ArrowLeft')
  assert.equal(await carousel.getByRole('button', { name: 'Dosen sebelumnya' }).isDisabled(), true)
  await carousel.locator('div.overflow-hidden').first().dispatchEvent('touchstart', { touches: [{ identifier: 1, clientX: 300 }] })
  await carousel.locator('div.overflow-hidden').first().dispatchEvent('touchend', { changedTouches: [{ identifier: 1, clientX: 100 }] })
  assert.equal(await carousel.locator('li').nth(0).getAttribute('aria-hidden'), 'true')
  await page.goto(origin + '/kontak')
  await page.getByRole('button', { name: 'Periksa pesan' }).click()
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 4)
  await page.getByLabel('Nama', { exact: true }).fill('Pengunjung')
  await page.getByLabel('Email', { exact: true }).fill('pengunjung@example.com')
  await page.getByLabel('Subjek', { exact: true }).fill('Informasi program studi')
  await page.getByLabel('Pesan', { exact: true }).fill('Mohon informasi program studi fakultas.')
  await page.getByRole('button', { name: 'Periksa pesan' }).click()
  assert.match(await page.getByRole('status').innerText(), /pesan belum terkirim/)
  assert.equal(await page.getByLabel('Nama', { exact: true }).inputValue(), 'Pengunjung')
  await page.goto(origin)
  const links = await page.locator('a[href^="#/"]').evaluateAll(nodes => [...new Set(nodes.map(n => n.getAttribute('href').slice(1)))])
  for (const link of links) {
    await page.goto(origin + link)
    assert.ok(!(await page.locator('main').innerText()).includes('tidak ditemukan'), link)
  }
  assert.deepEqual(errors, [])
  console.log('PASS: 14 routes at 3 widths; mobile navigation; lecturer/news filters; carousel buttons, keyboard and swipe; contact validation; homepage links; no runtime errors.')
} finally {
  await browser.close()
}
