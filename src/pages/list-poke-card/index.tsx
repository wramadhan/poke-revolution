import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
const ListPoke = () => {
  const [dataPokemon, setDataPokemon] = useState()
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = 0
        const limit = 20

        const url = `/api/list-all-card?offset=${offset}&limit=2000`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setDataPokemon(data)
      } catch (error) {
        setError('Failed to fetch data')
      }
    }

    fetchData()
  }, [])
  // if (dataPokemon) {
  //   console.log('ini jumlah', Math.ceil(dataPokemon['count'] / 10))
  // }
  return (
    <div className='min-h-[calc(100vh-92px)] pt-20 bg-primary'>
      <p className='text-center text-white font-mochiypopone'>List Nama Poke</p>
      <input
        placeholder='Cari nama pokemon'
        className='bg-secondary outline-none placeholder:text-primary focus:border-white shadow-inner shadow-black border-transparent border-2 rounded-sm'
      />
      {/* {dataPokemon
        ? dataPokemon.results.map((e, idx) => (
            <p id={(idx + 1).toString()}>{e.name}</p>
          ))
        : null} */}
      {dataPokemon ? (
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(dataPokemon['count'] / 10)}
            color='secondary'
            onChange={(e, v) => setPage(v)}
            className='text-quaternary'
          />
        </Stack>
      ) : null}
    </div>
  )
}

export default ListPoke
