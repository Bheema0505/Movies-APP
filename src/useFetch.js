import { useState, useEffect } from 'react'
const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=4b6fcf9a'

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const [timeout, updatedTimeout] = useState()

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setData(data.Search || data)

        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // here using debouncing technique to limit the no. of APi calls
    clearTimeout(timeout)

    const timeoutId = setTimeout(()=>{
      fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }, 500)

    updatedTimeout(timeoutId)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch
