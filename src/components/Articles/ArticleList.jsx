import React from "react";
import {Link} from "react-router-dom";
import i18n from "../../utils/i18n";


function ArticleList({articles, user}) {
    let articleList = [];
    let createLink;

    if (articles && articles.length) {
        articleList = articles.map((article) => {
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

    if (user && (user.can_edit || user.is_admin)) {
        createLink = (
            <div className="text-right">
                <Link to="/articles/create" className="btn">{i18n.t('articles.link.create')}</Link>
            </div>
        )
    }

    return (
        <div id="news" className="grid">
            {createLink}
            <div>
                {articleList}
            </div>
        </div>
    );
}


export default ArticleList;
