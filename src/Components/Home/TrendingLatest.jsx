import React from 'react'
import '../../Styles/TrendingLatest.scss'
import ContentSection from './ContentSection';
import one from '../../Assets/Hero Section/1.png'

const TrendingLatest = () => {
    return (
        <div className="Trending-Latest">
            <ContentSection heading={"TRENDING"} sectionImage={one} />
            <ContentSection heading={"LATEST"} sectionImage={one} />
        </div>
    )
}

export default TrendingLatest