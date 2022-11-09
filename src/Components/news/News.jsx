import React, { useState } from 'react';
import { useEffect } from 'react';
import NewsCard from './NewsCard';
const News = () => {
    const [apiData, setApiData] = useState(null);
    const [mainData, setMainData] = useState(null);
    const category = "cricket";

    const newsApi = async () => {
        let url = `https://inshorts.deta.dev/news?category=${category}`;
        const newsData = await fetch(url);
        const jsonData = await newsData.json();
        
        if (jsonData) {
            setApiData(jsonData);
            setMainData(jsonData.data);
            console.log(jsonData.data[0].data[0]);
        }
    }

    useEffect(() => {

        newsApi();
    }, []);
    return (<>
        {
            apiData ? (
                mainData.map(() => {
                    return <NewsCard newsapi={mainData} />
                })
            ) : (
                <p>data not found</p>
            )
        }

    </>);
}

export default News;