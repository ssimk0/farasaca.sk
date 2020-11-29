import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Loader from "../Loader";
import Pagination from "../Pagination/Pagination";

function ArticleHome({articleService}) {
  const [articles, setArticles] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page");

  useEffect(() => {
    articleService.getArticles({p: page || 1, s: 2}).then((data) => {
      setArticles(data);
    })
  }, [articleService, page])
  let articleList = [];

  if (articles && articles.articles && articles.articles.length) {
    articleList = articles.articles.map((article) => {
        return (
          <div className="article p-2" key={article.id}>
            <div className='p-2'>
              <h4 className="title text-2xl"><Link to={`/articles/${article.slug}`}>{article.title}</Link></h4>
              <p className="break-words" dangerouslySetInnerHTML={{__html: article.short}}>
              </p>
            </div>
          </div>
        )
      }
    )
  }


  return articles === null ? <Loader/> : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      {articleList}
      </div>
      <Pagination page={articles.page} total_pages={articles.total_pages}/>
    </div>
  )
}

export default ArticleHome
