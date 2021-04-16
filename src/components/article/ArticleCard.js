import React from 'react';
import "./ArticleCard.css"
import { useHistory } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle, loggedInUser }) => {
    const history = useHistory();

    return (
        <>
            {loggedInUser === article.userId ?

                <div className="card">
                    <div className="card-content">

                        <h3>Article Title: <span className="card-title">
                            {article.title}
                        </span></h3>
                        <p>Date: {article.date}</p>
                        <p>Synopsis: {article.synopsis}</p>
                        <a href={article.url}>URL: {article.url}</a>

                        <button type="button"
                            onClick={() => history.push(`/articles/${article.id}/edit`)}>
                            Edit
                </button>
                        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>

                    </div>
                </div> :

                <div className="card">
                    <div className="card-content">

                        <h3>Article Title: <span className="card-title">
                            {article.title}
                        </span></h3>
                        <p>Date: {article.date}</p>
                        <p>Synopsis: {article.synopsis}</p>
                        <a href={article.url}>URL: {article.url}</a>

                    </div>
                </div>
}
</>   
)
    
}