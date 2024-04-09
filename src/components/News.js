import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

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
      loading: true,
      page: 1,
      totalResults: 0,  
    }
    document.title= this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - Newsly";
  }

  async updateNews(pageNo){
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false}) 
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }

// handlePrevious = async () => {
//   this.setState({page: this.state.page - 1});
//   this.updateNews();
//   }


//   handleNext = async () => {
//       this.setState({page: this.state.page + 1});
//       this.updateNews();
//   }

  fetchData = async () => {
      this.setState({
        page: this.state.page + 1
      });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles), 
      totalArticles: parsedData.totalResults, 
      });
  };


  truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{marginTop: '100px'}}>Newsly - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Loader/>}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalArticles}
          loader={<Loader/>}
          >
            <div className='container my-3'>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url} >
            <NewsItem title={element.title?element.title:""} description={this.truncateDescription(element.description || '', 150)} imageUrl={element.urlToImage} newsUrl={element.url}
            author={element.author? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>
            
          })}      
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
  }
}

export default News
