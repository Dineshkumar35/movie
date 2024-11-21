import React, { useEffect, useState, useRef } from 'react';
import MovieList from './MovieList';
import Header from '../Common/Header';

const Movie = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

    const fetchData = async (pageNum) => {
        try {
            const response = await fetch(`https://test.create.diagnal.com/data/page${pageNum}.json`);
            const data = await response.json();
            return data.page['content-items'].content.map((item) => ({
                title: item.name,
                image: `https://test.create.diagnal.com/images/${item['poster-image']}`,
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    useEffect(() => {
        const loadItems = async () => {
            const newItems = await fetchData(page);
            setItems((prevItems) => [...prevItems, ...newItems]);
            setFilteredItems((prevItems) => [...prevItems, ...newItems]);
        };

        loadItems();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);


    const handleSearch = (query) => {
        if (!query) {
            setFilteredItems(items);
        } else {
            setFilteredItems(
                items.filter((item) =>
                    item?.title.toLowerCase().includes(query?.toLowerCase())
                )
            );
        }
    };
    

    return (
        <>
            <Header onSearch={handleSearch} onhandleBack={()=>setFilteredItems(items)}/>
            <div className="grid-container">
                {filteredItems.map((item, index) => (
                    <MovieList key={index} image={item.image} title={item.title} />
                ))}
                <div ref={loaderRef} style={{ height: '1px', width: '100%' }}></div>
            </div>
        </>

    );
};

export default Movie;
