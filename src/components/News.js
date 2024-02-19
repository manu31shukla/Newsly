import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Kevin Liptak",
      "title": "Navalny’s death puts a new spotlight on key dividing line between Trump and Biden - CNN",
      "description": "The announcement of Alexey Navalny’s death on Friday thrust fresh urgency into the roiling debate in Washington over how forcefully to counter Russia and its president, Vladimir Putin, a question of wide-ranging consequence on which President Joe Biden and hi…",
      "url": "https://www.cnn.com/2024/02/16/politics/navalny-death-biden-trump-divide/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240216101922-23-navalny-gallery.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-17T03:15:00Z",
      "content": "The announcement of Alexey Navalnys death on Friday thrust fresh urgency into the roiling debate in Washington over how forcefully to counter Russia and its president, Vladimir Putin, a question of w… [+8987 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NBC4 Washington"
      },
      "author": "NBC Washington Staff",
      "title": "House explodes in Loudoun County; firefighter trapped - NBC4 Washington",
      "description": "A house exploded in Loudoun County, Virginia, Friday evening, trapping a firefighter in the basement.",
      "url": "http://www.nbcwashington.com/news/local/northern-virginia/house-explodes-in-loudoun-county-firefighter-trapped/3546296/",
      "urlToImage": "https://media.nbcwashington.com/2024/02/Sterling-Loudoun-County-house-explosion.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2024-02-17T02:47:15Z",
      "content": "A house exploded in Loudoun County, Virginia, Friday evening, trapping a firefighter in the basement.\r\nA firefighter radioed a mayday call for the fire in the 300 block of Silver Ridge Drive in Sterl… [+296 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CBS Sports"
      },
      "author": "",
      "title": "College basketball picks, schedule: Predictions for UConn vs. Marquette and more Top 25 games on Saturday - CBS Sports",
      "description": "Our experts have picks for all of Saturday's big games",
      "url": "https://www.cbssports.com/college-basketball/news/college-basketball-picks-schedule-predictions-for-uconn-vs-marquette-and-more-top-25-games-on-saturday/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/02/16/cba34723-8f13-4de2-959d-f5e20acd59a1/thumbnail/1200x675/882de8a93ae52a317d65f9a72e376fdd/usatsi-19941602-1.jpg",
      "publishedAt": "2024-02-17T02:35:00Z",
      "content": "The NFL season is officially over and even with NBA All-Star Weekend taking place over the next few days, college basketball action will be drawing a great deal of attention on Saturday. Twenty-one t… [+3807 chars]"
      },
      {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Holly Bailey, Amy Gardner",
      "title": "‘Star witness’ testifies at Fani Willis hearing in Trump Georgia case - The Washington Post",
      "description": "Terrence Bradley, a former law partner of special prosecutor Nathan Wade, repeatedly declined to say what he knew about the relationship between Wade and Fulton County District Attorney Fani T. Willis (D).",
      "url": "https://www.washingtonpost.com/national-security/2024/02/16/fani-willis-hearing-terrence-bradley-trump-georgia/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/02-16-2024/t_63447d9b3c094664bc675322213254a7_name_Wade.png&w=1440",
      "publishedAt": "2024-02-17T02:34:00Z",
      "content": "ATLANTA A man billed as the star witness in the case to disqualify Fulton County District Attorney Fani T. Willis (D) took the stand Friday and acknowledged he exchanged text messages about Willis wi… [+8422 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Micah Parsons Wins MVP & Calls Out Stephen A. Smith | 2024 NBA All-Star Celebrity Game - Bleacher Report",
      "description": "Micah Parsons won the 2024 NBA All-Star Celebrity Game MVP for Team Shannon Sharpe after dropping 37 points and jokingly trash talked Stephen A. in his postg...",
      "url": "https://www.youtube.com/watch?v=G93nw9UFDDI",
      "urlToImage": "https://i.ytimg.com/vi/G93nw9UFDDI/maxresdefault.jpg",
      "publishedAt": "2024-02-17T02:32:45Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Dark Horizons"
      },
      "author": "Garth Franklin",
      "title": "\"Madame Web\" Producer On Superhero Fatigue - Dark Horizons",
      "description": "Various people have weighed in on the topic of superhero fatigue in recent times, especially as the genre has stumbled with a number of flops lately – even from those who’ve made guaranteed hits in the past. Some have dismissed the concept as notso much tired…",
      "url": "https://www.darkhorizons.com/madame-web-producer-on-superhero-fatigue/",
      "urlToImage": "https://cdndark.darkhorizons.com/wp-content/uploads/2024/02/madame-web-producer-on-superhero-fatigue.jpg",
      "publishedAt": "2024-02-17T01:52:43Z",
      "content": "Various people have weighed in on the topic of superhero fatigue in recent times, especially as the genre has stumbled with a number of flops lately – even from those who’ve made guaranteed hits in t… [+2385 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Jen Christensen",
      "title": "FDA approves new therapy for hard-to-treat metastatic melanoma - CNN",
      "description": "On Friday, the US Food and Drug Administration approved a new, first-of-its-kind therapy that could help patients with metastatic melanoma, a rare but deadly form of skin cancer.",
      "url": "https://www.cnn.com/2024/02/16/health/metastatic-melanoma-treatment-amtagvi/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/iovance-product-shot.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-17T01:23:00Z",
      "content": "On Friday, the US Food and Drug Administration approved a new, first-of-its-kind therapy that could help patients with metastatic melanoma, a rare but deadly form of skin cancer.\r\nThe drug, made by t… [+4407 chars]"
      },
      {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Matt Bonesteel, Glynn A. Hill",
      "title": "Tiger Woods withdraws from first PGA Tour event after surgery with illness - The Washington Post",
      "description": "Tiger Woods bowed out of the Genesis Invitational in the second round after dealing with flu-like symptoms.",
      "url": "https://www.washingtonpost.com/sports/2024/02/16/tiger-woods-withdraws-genesis/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N6HAVMZHTWCPJ55QQXJ7SUG4T4.jpg&w=1440",
      "publishedAt": "2024-02-17T01:22:00Z",
      "content": "Tiger Woods withdrew from the Genesis Invitational on Friday in Pacific Palisades, Calif., after experiencing flu-like symptoms, according to Rob McNamara, vice president of Woodss TGR Ventures.\r\nSo … [+2765 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "WLS-TV"
      },
      "author": null,
      "title": "Chicago migrants: Jean Carlos Martinez, 5, died from sepsis after becoming sick with multiple infections, COVID at Pilsen shelter - WLS-TV",
      "description": "The Cook County Medical Examiner said a 5-year-old migrant boy who died after becoming sick at a Pilsen shelter in December had sepsis due to several infections, including COVID-19.",
      "url": "https://abc7chicago.com/jean-carlos-martinez-pilsen-chicago-sepsis-migrants/14434762/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14434811_021624-wls-migrant-boy-death-cause-6p-vo-vid.jpg?w=1600",
      "publishedAt": "2024-02-17T01:01:21Z",
      "content": null
      },
      {
      "source": {
      "id": "nbc-news",
      "name": "NBC News"
      },
      "author": "Antonio Planas, Maggie Vespa",
      "title": "10-year-old shot at Chiefs parade says surviving shooting was a 'miracle' - NBC News",
      "description": "10-year-old Samuel Arellano, who was shot at the Kansas City Chiefs victory rally, said a bullet missed his lungs by centimeters and it's a “miracle” he’s alive.",
      "url": "https://www.nbcnews.com/news/us-news/10-year-old-struck-bullet-chiefs-parade-says-surviving-shooting-was-mi-rcna139285",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240216-Samuel-Arellano-1-se-322p-a4d437.jpg",
      "publishedAt": "2024-02-17T00:35:00Z",
      "content": "KANSAS CITY, Kan.  A 10-year-old boy who was shot at the Kansas City Chiefs victory rally this week said a bullet missed his lungs by centimeters and it's a miracle hes alive.\r\nSamuel Arellano was ce… [+3633 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Page Six"
      },
      "author": "Sara Nathan",
      "title": "Prince Harry would be willing to return to his royal duties — if King Charles asked him to - Page Six",
      "description": "The Duke of Sussex, 39, made a dash across the Atlantic to see his cancer-stricken father for just over 30 minutes following his recent diagnosis.",
      "url": "https://pagesix.com/2024/02/16/royal-family/prince-harry-would-be-willing-to-return-to-his-royal-duties-if-king-charles-asked-him-to/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/02/76660350.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-02-17T00:13:00Z",
      "content": "Prince Harry would be willing to return to royal duties — if King Charles III asked him to, a source tells Page Six.\r\nThe Duke of Sussex, 39, made a dash across the Atlantic to see his cancer-stricke… [+3174 chars]"
      },
      {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Amanda Silberling",
      "title": "Amazon and SpaceX are quietly trying to demolish national labor law - TechCrunch",
      "description": "Amazon alleged in a legal filing published Friday morning that the National Labor Relations Board (NLRB) is unconstitutional. SpaceX and Trader Joe's --",
      "url": "https://techcrunch.com/2024/02/16/amazon-and-spacex-are-quietly-trying-to-demolish-national-labor-law/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-535059003.jpg?w=1024",
      "publishedAt": "2024-02-16T23:45:12Z",
      "content": "Amazon alleged in a legal filing published Friday morning that the National Labor Relations Board (NLRB) is unconstitutional. SpaceX and Trader Joe’s — companies that, like Amazon, have repeatedly fa… [+1933 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Israel Blasts Biden's Two-State Solution as 'Huge Reward' for Terrorism - CBN News",
      "description": "As fighting escalates in Gaza and along Israel's northern border, the U.S. and its Arab partners are working on a blueprint with a firm timeline for establis...",
      "url": "https://www.youtube.com/watch?v=OYusAw-BsCc",
      "urlToImage": "https://i.ytimg.com/vi/OYusAw-BsCc/maxresdefault.jpg",
      "publishedAt": "2024-02-16T23:45:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "‘Bob Marley: One Love’ Jammin’ To $44M; ‘Madame Web’ Eyes $22M+ Over 6-Day Holiday Frame – Friday Box Office Update - Deadline",
      "description": "Presidents Day box office will see Bob Marley: One Love win with $35M-$38M, while Sony's 'Madame Web' crashes with $20M.",
      "url": "http://deadline.com/2024/02/box-office-bob-marley-one-love-madame-web-1235828289/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/01/One-Love-and-Madame-Web.jpg?w=1024",
      "publishedAt": "2024-02-16T23:10:00Z",
      "content": "FRIDAY AFTERNOON: Paramount’sBob Marley: One Lovehas more than one heart, rather millions as the music biopic about the reggae legend is now heading to $44M over six days after a $6.7M Friday, which … [+3717 chars]"
      },
      {
      "source": {
      "id": "espn",
      "name": "ESPN"
      },
      "author": "ESPN staff",
      "title": "2024 NBA All-Star Weekend: Live updates and highlights - ESPN",
      "description": "The NBA's biggest stars are in Indianapolis for All-Star Weekend. Here are the best moments from the NBA's signature midseason showcase.",
      "url": "https://www.espn.com/nba/story/_/id/39526853/nba-all-star-weekend-2024-best-moments",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0217%2Fr1292338_1296x729_16%2D9.jpg",
      "publishedAt": "2024-02-16T22:58:00Z",
      "content": "The 2024 NBA All-Star Weekend is underway with a jam-packed slate in Indianapolis.\r\nEditor's Picks\r\nIn Friday's celebrity game, Team Shannon, coached by Hall of Fame tight end Shannon Sharpe, 50 Cent… [+1783 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": null,
      "title": "Biden condemns House taking break without passing fresh Ukraine aid - BBC.com",
      "description": "The president says taking a two-week break without passing fresh aid is \"bizarre\" and \"outrageous\".",
      "url": "https://www.bbc.com/news/world-us-canada-68322241",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/151A5/production/_132673468_gettyimages-2008653693.jpg",
      "publishedAt": "2024-02-16T22:55:24Z",
      "content": "By Matt Murphy &amp; Anthony ZurcherBBC News, Washington\r\nPresident Joe Biden has said the US House's decision to call a two-week recess without passing fresh aid for Ukraine is \"bizarre\" and \"outrag… [+3786 chars]"
      },
      {
      "source": {
      "id": "nbc-news",
      "name": "NBC News"
      },
      "author": "Ashley Morris",
      "title": "The 27 best Amazon Presidents Day sales 2024 to shop now - NBC News",
      "description": "Shop the best Presidents Day deals on Amazon across categories like tech, bedding, home and kitchen and more.",
      "url": "https://www.nbcnews.com/select/shopping/amazon-presidents-day-sales-2024-rcna139276",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240214-amazon-presidents-day-lifestyle-kb-main-631a45.jpg",
      "publishedAt": "2024-02-16T22:22:45Z",
      "content": "Amazons Presidents Day deals are here, and this weekend you can save big while shopping across categories. Amazon is offering deals on mattresses, furniture, appliances and more, making it a great ti… [+4685 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Annie Grayer",
      "title": "House Republicans seek to downplay FBI informant charges that undermine Biden impeachment inquiry - CNN",
      "description": "House Republicans leading the impeachment inquiry into President Joe Biden tried to downplay the importance of an FBI informant whose claims they once championed after he was charged with fabricating foreign bribery allegations involving the president and his…",
      "url": "https://www.cnn.com/2024/02/16/politics/republicans-biden-impeachment-fbi-informant/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1845884227.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-16T21:57:00Z",
      "content": "House Republicans leading the impeachment inquiry into President Joe Biden tried to downplay the importance of an FBI informant whose claims they once championed after he was charged with fabricating… [+6703 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NPR"
      },
      "author": "D. Parvaz",
      "title": "Israel raids largest hospital in Gaza's Khan Younis, apprehends Hamas suspects - NPR",
      "description": "Israeli forces have found no hostage remains so far, but their raid has essentially rendered the largest hospital in Gaza's Khan Younis nonfunctional.",
      "url": "https://www.npr.org/2024/02/16/1231942329/israel-hamas-war-gaza-nasser-hospital-khan-younis",
      "urlToImage": "https://media.npr.org/assets/img/2024/02/16/gettyimages-1855953793-1-_wide-d91ec9ead8869923f36d603ae6be9d3121066ebe-s1400-c100.jpg",
      "publishedAt": "2024-02-16T21:56:18Z",
      "content": "A man inspects the damage in a room following Israeli bombardment at Nasser Hospital in Khan Younis, southern Gaza Strip, on Dec. 17.\r\nStringer/AFP via Getty Images\r\nTEL AVIV, Israel Since Wednesday,… [+7399 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Reuters",
      "title": "UAW workers at Ford's Kentucky truck plant threaten strike next Friday - Reuters",
      "description": null,
      "url": "https://www.reuters.com/business/autos-transportation/uaw-workers-fords-kentucky-truck-plant-serve-strike-notice-2024-02-16/",
      "urlToImage": null,
      "publishedAt": "2024-02-16T21:47:00Z",
      "content": null
      }
    ]
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fba1a30dec284837bc8df4de70c85b3d`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles }) 
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url} >
            <NewsItem title={element.title?element.title.slice(0 , 45):""} description={element.description?element.description.slice(0 , 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}      
        </div>
      </div>
    )
  }
}

export default News
