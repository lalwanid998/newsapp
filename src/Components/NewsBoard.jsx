import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({category}) => {
    let VITE_API_KEY="cb2e4b941d5d4d6586b0ada2c39a8b2a";
    const [articles,setArticles] = useState([]);

    useEffect(async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${VITE_API_KEY}`;
        let response = await fetch(url);
        let data = await response.json();
        
    },[category])

    return ( 
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles && articles.map((news,index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
     );
}
 
export default NewsBoard;