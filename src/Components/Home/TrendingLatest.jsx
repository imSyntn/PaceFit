import React from 'react'
import '../../Styles/Home/TrendingLatest.scss'
import ContentSection from './ContentSection';

const TrendingLatest = () => {
    return (
        <div className="Trending-Latest">
            <ContentSection heading={"TRENDING"} id={1} />
            <ContentSection heading={"LATEST"} id={2} />
        </div>
    )
}

export default TrendingLatest