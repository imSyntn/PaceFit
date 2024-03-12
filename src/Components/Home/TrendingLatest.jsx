import React from 'react'
import '../../Styles/Home/TrendingLatest.scss'
import ContentSection from './ContentSection';

const TrendingLatest = () => {
    return (
        <div className="Trending-Latest">
            <ContentSection heading={"TRENDING"} />
            <ContentSection heading={"LATEST"} />
        </div>
    )
}

export default TrendingLatest