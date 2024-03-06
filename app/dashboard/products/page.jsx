"use client"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
const ProductPage = () => {
    const [search, setSearch] = useState("")
    const [countries, setCountries] = useState([]);

    const [filteredCountries, setFilteredCountries] = useState([])



    const getCountries = async () => {

        try {
            const response = await axios.get('https://restcountries.com/v2/all')
            setCountries(response.data)
            setFilteredCountries(response.data)
        } catch (error) {
            console.log(error)
        }

    };

    const columns = [
        {
            name: "country Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "country Native Name",
            selector: (row) => row.nativeName,
            sortable: true,
        },
        {
            name: "country Capital",
            selector: (row) => row.capital,
            sortable: true,
        },
        {
            name: "country Flag",
            selector: (row) => <img src={row.flag} width={50} height={50} alt="flags" />
        },

    ]


    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase())
        })
        setFilteredCountries(result)
    }, [search])

    return (
        <DataTable
            title="Products List"
            columns={columns}
            data={filteredCountries}
            // fixedHeader
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type="text"
                    placeholder="Search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            }
            pagination />
    )
}

export default ProductPage