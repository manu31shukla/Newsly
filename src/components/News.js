import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title= this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - Newsly";
  }

  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fba1a30dec284837bc8df4de70c85b3d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false}) 
  }

  async componentDidMount(){
    this.updateNews();
  }

handlePrevious = async () => {
  this.setState({page: this.state.page - 1});
  this.updateNews();
  }


  handleNext = async () => {
      this.setState({page: this.state.page + 1});
      this.updateNews();
  }

  truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Newsly - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url} >
            <NewsItem title={element.title?element.title:""} description={this.truncateDescription(element.description || '', 150)} imageUrl={element.urlToImage} newsUrl={element.url}
            author={element.author? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}      
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
