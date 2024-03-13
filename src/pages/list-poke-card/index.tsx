import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { GetServerSideProps } from 'next'
import Stack from '@mui/material/Stack'
interface HomeProps {
  dataPokemons: any // Sesuaikan dengan tipe data yang diharapkan
}

const ListPoke: React.FC<HomeProps> = ({ dataPokemons }) => {
  const [dataPokemon, setDataPokemon] = useState()
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  console.log('ini data pokemon masuk : ', dataPokemons)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = 0

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const offset = 0
    const limit = 2000
    const url = `/api/list-all-card?offset=${offset}&limit=${limit}`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const dataPokemons = await response.json()

    return {
      props: { dataPokemons },
    }
  } catch (error) {
    return {
      props: { error: 'Failed to fetch data' },
    }
  }
}

export default ListPoke
