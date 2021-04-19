import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle, getArticlesByUserId}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';
import { getAllFriends, getFriendsById } from '../../modules/FriendManager';



export const ArticleList = () => {
  let [newArray, setNewArray] = useState([])
  const [articles, setArticles] = useState([]);
  const history = useHistory();

  
  const loggedInUser = JSON.parse(sessionStorage.getItem("nutshell_user"))
    
  const getFriends = () => {
     return (getAllFriends(loggedInUser).then(friendsFromAPI => {return friendsFromAPI.map(friend => {return (friend.userId)})}).then(results => {return results.concat(loggedInUser)}))
      
    
  }
    

    
    const getArticles = (array) => {
      let artArr = []
    const urlArray = array.map(userId => {
      return (
        getArticlesByUserId(userId).then(response => {return response}))})
        Promise.all(urlArray).then(
        response => {return response.map(arr => {return arr.forEach(obj => {return (obj)})})
        
          
        })}
        
 
        useEffect (() => {
          getFriends().then(response => {getArticles(response)}).then(results => {console.log(results)})
        }, [])
        
       
        
          
          
          const handleDeleteArticle = (id) => {
            deleteArticle(id)
            .then(() => getArticles()
            .then(setArticles));
          };




  return (
  
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { history.push("/articles/create") }}>
          Add Article
        </button>
      </section>

      <div className="container-cards">
        {articles.map(article =>
    <ArticleCard
      key={article.id}
      article={article}
      handleDeleteArticle={handleDeleteArticle}
      loggedInUser={loggedInUser} />).reverse()}
      </div>

    </>
  )}