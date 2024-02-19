import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fba1a30dec284837bc8df4de70c85b3d`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults }) 
  }

handlePrevious = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fba1a30dec284837bc8df4de70c85b3d&page=${this.state.page - 1}&pageSize=20  `;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    articles: parsedData.articles,
    page: this.state.page - 1 }) 
  }


  handleNext = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/20))){
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fba1a30dec284837bc8df4de70c85b3d&page=${this.state.page + 1}&pageSize=20  `;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1 })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url} >
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}      
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
