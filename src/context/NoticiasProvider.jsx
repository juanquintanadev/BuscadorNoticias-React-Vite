/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

function NoticiasProvider({children}) {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [page, setPage] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    // utilizamos un effect solamente para actualizar la pagina cuando categoria cambia
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&languaje=es&country=ar&page_size=20&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPage(1)
        }
        consultarApi()
    }, [categoria])
    
    // este efect solo cambia cuando page es alterada por pagination
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&languaje=es&country=ar&page=${page}&page_size=20&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [page])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagination = (e, value) => {
        setPage(value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagination,
                page
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext

