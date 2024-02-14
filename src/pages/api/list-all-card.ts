import { NextApiRequest, NextApiResponse } from 'next'

interface Pokemon {
  name: string
  id: string
  url?: string | any
}

interface ApiResponse {
  count: number
  next: string | any
  previous: string | any
  results: Pokemon[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const offset = parseInt(req.query.offset as string) || 0
    const limit = parseInt(req.query.limit as string) || 20

    const url = `${process.env.NEXT_PUBLIC_POKE_URL}${process.env.NEXT_PUBLIC_NAME}/?offset=${offset}&limit=${limit}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to fetch data from Server')
    }

    const data: ApiResponse = await response.json()

    // Mengubah URL menjadi hanya bagian terakhirnya
    data.results = data.results.map((pokemon) => {
      const parts = pokemon.url.split('/')
      const id = parts[parts.length - 2] // Mengambil bagian terakhir dari URL
      return {
        name: pokemon.name,
        id: id, // Menggunakan hanya bagian terakhir dari URL sebagai ID Pokemon
      }
    })

    // Parse URL dari response next dan previous
    const nextUrl = data.next ? new URL(data.next as string) : null
    const previousUrl = data.previous ? new URL(data.previous) : null

    // Ambil nilai offset dan limit dari query string untuk next dan previous
    let nextOffset = 0
    let nextLimit = limit
    let previousOffset = 0
    let previousLimit = limit
    if (nextUrl) {
      nextOffset = parseInt(nextUrl.searchParams.get('offset')!)
      nextLimit = parseInt(nextUrl.searchParams.get('limit')!)
    }
    if (previousUrl) {
      previousOffset = parseInt(previousUrl.searchParams.get('offset')!)
      previousLimit = parseInt(previousUrl.searchParams.get('limit')!)
    }

    // Buat objek baru untuk next dengan offset dan limit
    const nextObject = data.next
      ? {
          offset: nextOffset,
          limit: nextLimit,
        }
      : null

    // Ganti nilai next pada respons dengan objek baru jika next tidak null
    if (nextObject) {
      data.next = nextObject
    }

    // Buat objek baru untuk previous dengan offset dan limit
    const previousObject = data.previous
      ? {
          offset: previousOffset,
          limit: previousLimit,
        }
      : null

    // Ganti nilai previous pada respons dengan objek baru jika previous tidak null
    if (previousObject) {
      data.previous = previousObject
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' })
  }
}
