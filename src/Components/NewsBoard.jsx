import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({category}) => {
    let api_key = "cb2e4b941d5d4d6586b0ada2c39a8b2a";
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
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