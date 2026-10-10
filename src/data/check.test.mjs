import assert from 'node:assert/strict'
import { test } from 'node:test'
import { dosen, pimpinan, cariOrang } from './orang.ts'
import { programStudi } from './fakultas.ts'
import { berita, fasilitas } from './konten.ts'
import { namaLengkap } from './namaLengkap.ts'
import { existsSync } from 'node:fs'

test('identitas unik dan relasi program valid pada dataset asli', () => {
  const orang = [...dosen, ...pimpinan]
  assert.equal(new Set(orang.map(o => o.id)).size, orang.length)
  for (const o of orang) {
    assert.equal(cariOrang(o.id), o)
    assert.ok(o.program === 'fakultas' || programStudi.some(p => p.id === o.program))
    if (!o.nama) assert.match(namaLengkap(o), /^\[Nama /)
  }
  assert.equal(cariOrang('tidak-ada'), undefined)
})

test('gambar berita tersedia dan fasilitas belum diverifikasi tetap placeholder', () => {
  for (const b of berita) {
    assert.ok(!Number.isNaN(Date.parse(b.tanggal)))
    if (b.gambar?.startsWith('./')) assert.ok(existsSync(new URL(`../../public/${b.gambar.slice(2)}`, import.meta.url)))
  }
  for (const f of fasilitas) assert.equal(f.status, 'placeholder')
})
