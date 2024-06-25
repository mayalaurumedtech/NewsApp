import React, { Component } from 'react';
import NewsItems from './NewsItem.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from './spinner.js';
import propTypes from 'react-bootstrap/esm/Image.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  // articles = [

  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hindustan Times"
  //     },
  //     "author": "Neeraj Chauhan",
  //     "title": "Amit Shah to chair high level meeting on Manipur - Hindustan Times",
  //     "description": "People familiar with the development said senior officials from the Centre, state governments including CM N Biren Singh, army and other security forces are expected to attend the meeting at 4pm | Latest News India",
  //     "url": "https://www.hindustantimes.com/india-news/amit-shah-to-chair-high-level-meeting-on-manipur-101718603447513.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/The-northeastern-state-has-seen-fresh-violence-in-_1718603399561.jpg",
  //     "publishedAt": "2024-06-17T05:50:47Z",
  //     "content": "Union home minister Amit Shah will chair a meeting on Monday evening to review the security situation in Manipur, the first such high-level meeting by the central government after the National Democr… [+1938 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hindustan Times"
  //     },
  //     "author": "Sumanti Sen",
  //     "title": "Who was Michael William Nash? Michigan splash pad shooter may have planned more attacks before killing himself - Hindustan Times",
  //     "description": "Before dying by suicide, Michael William Nash allegedly fired 28 rounds at the Brooklands Plaza Splash Pad, injuring nine people, including two children.",
  //     "url": "https://www.hindustantimes.com/world-news/us-news/who-was-michael-william-nash-michigan-splash-pad-shooter-may-have-planned-more-attacks-before-killing-himself-101718602462986.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/US-CRIME-SHOOTING-MICHIGAN-3_1718602735333_1718602747498.jpg",
  //     "publishedAt": "2024-06-17T05:43:03Z",
  //     "content": "The Oakland County Sheriff's Office identified the gunman who shot and wounded nine people at the Brooklands Plaza Splash Pad in Rochester Hills as Michael William Nash. The 42-year-old allegedly fir… [+1855 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Jagran.com"
  //     },
  //     "author": "Ashish Singh",
  //     "title": "Garena Free Fire MAX Redeem Codes Today 2024 For June 17: Win Free Diamonds, Gun Skins And More - Jagran English",
  //     "description": "Garena Free Fire MAX Redeem Codes Today 2024: Win free diaomonds, gun skins and a lot more using the Free Fire MAX redeem codes.",
  //     "url": "https://english.jagran.com/technology/garena-free-fire-max-redeem-codes-today-2024-indian-server-advance-hacks-for-june-17-gun-skins-get-free-diamonds-10167600",
  //     "urlToImage": "https://imgeng.jagran.com/images/2024/06/17/article/image/free-fire-max-redeem-codes-2024 (1)-1715492861721-1718601689837.jpg",
  //     "publishedAt": "2024-06-17T05:27:00Z",
  //     "content": "Garena Free Fire MAX Redeem Codes Today 2024: Now claim a variety of new gifts and free prizes to enhance your inventory with gun skins, weapons and free diamonds using the Free Fire MAX redeem codes… [+1770 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "Japan New Virus | Rare \"Flesh-Eating Bacteria\" That Can Kill In 2 Days Spreading In Japan - NDTV",
  //     "description": "A disease caused by a rare \"flesh-eating bacteria\" that can kill people within 48 hours is spreading in Japan after the country relaxed Covid-era restriction...",
  //     "url": "https://www.youtube.com/watch?v=hNLoX7G358w",
  //     "urlToImage": "https://i.ytimg.com/vi/hNLoX7G358w/maxresdefault.jpg",
  //     "publishedAt": "2024-06-17T05:08:47Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hindustan Times"
  //     },
  //     "author": "AFP",
  //     "title": "Sri Lanka deliver big win over Netherlands as they bow out of T20 World Cup - Hindustan Times",
  //     "description": "Opener Kusal Mendis and middle-order batsman Charith Asalanka posted identical scores of 46 to set the pace for the 2014 champions in a total of 201 for six | Crickit",
  //     "url": "https://www.hindustantimes.com/cricket/sri-lanka-deliver-big-win-over-netherlands-as-they-bow-out-of-t20-world-cup-101718596873214.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/PTI06-17-2024-000018A-0_1718597114435_1718597138348.jpg",
  //     "publishedAt": "2024-06-17T04:08:40Z",
  //     "content": "An eliminated Sri Lankan team overwhelmed the Netherlands by 83 runs in the final Group D match of the T20 World Cup at the Daren Sammy Stadium in St Lucia on Sunday.\r\nCaptain Scott Edwards and opene… [+1904 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "India Today"
  //     },
  //     "author": "India Today Tech",
  //     "title": "iPhone 15 gets massive discount on Flipkart, check out the deal - India Today",
  //     "description": "Flipkart offers a substantial discount on the iPhone 15 making it available for under Rs 70000 with additional benefits for old device exchange",
  //     "url": "https://www.indiatoday.in/technology/news/story/iphone-15-gets-massive-discount-on-flipkart-here-is-how-the-deal-works-2554059-2024-06-17",
  //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/apple-iphone-15-160750776-16x9.jpg?VersionId=4UwJxg6x8r5NTHxuF5.oeO3NHYvcoBe.",
  //     "publishedAt": "2024-06-17T04:00:20Z",
  //     "content": "Planning to buy the iPhone 15? Flipkart is currently the only shopping platform that is selling the device for under Rs 70,000. In all other apps like Amazon, the iPhone is listed for around Rs 73,00… [+1942 chars]"
  //   },

  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Livemint"
  //     },
  //     "author": "Karishma Pranav Bhavsar",
  //     "title": "Captain Babar Azam on Pakistan's T20 World Cup 2024 exit, 'cannot play in every player's place, there are 11 players... | Mint - Mint",
  //     "description": "T20 World Cup 2024: After defeating Ireland, Pakistan captain Babar Azam acknowledged the team's collective failure to perform up to expectations. He emphasized the need for each player to understand and execute their role effectively for future matches.",
  //     "url": "https://www.livemint.com/sports/cricket-news/captain-babar-azam-on-pakistans-t20-world-cup-2024-exit-cannot-play-in-every-players-place-there-are-11-players-11718592551644.html",
  //     "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/17/1600x900/AP05-06-2024-000050B-0_1718533260963_1718593215264.jpg",
  //     "publishedAt": "2024-06-17T03:32:38Z",
  //     "content": "T20 World Cup 2024: Pakistan on Sunday beat Ireland in a three-wicket consolation win. Both the teams are bowed out of Twenty20 World Cup after their disappointing performance. Pakistan secured the t… [+2660 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Livemint"
  //     },
  //     "author": "Asit Manohar",
  //     "title": "DEE Development Engineers to Stanley Lifestyles: ₹1087 crore at stake; GMP, other details of three upcoming IPOs | Stock Market News - Mint",
  //     "description": "Upcoming IPOs: Three mainboard public issues opening this week are DEE Development Engineers IPO, Stanley Lifestyles IPO, and Akme Fintrade India IPO",
  //     "url": "https://www.livemint.com/market/ipo/dee-development-engineers-to-stanley-lifestyles-rs-1087-crore-at-stake-gmp-other-details-of-three-upcoming-ipos-11718593415898.html",
  //     "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/17/1600x900/Upcoming_IPOs_DEE_Development_Engineers_IPO_1718594026397_1718594026568.jpg",
  //     "publishedAt": "2024-06-17T03:26:11Z",
  //     "content": "Upcoming IPOs this week: Three mainboard initial public offerings (IPOs) DEE Development Engineers IPO, Stanley Lifestyles IPO, and Akme Fintrade India IPO will hit the Indian primary market this wee… [+3217 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "India Today"
  //     },
  //     "author": "India Today Entertainment Desk",
  //     "title": "Chandu Champion box office Day 3: Kartik Aaryan film holds strong, earns Rs 22 crore - India Today",
  //     "description": "Chandu Champion box office collection Day 3 The Kabir Khan directed sports drama earned in double digits on its first Sunday",
  //     "url": "https://www.indiatoday.in/movies/bollywood/story/chandu-champion-box-office-collection-day-3-kartik-aaryan-film-earns-rs-22-crore-2554052-2024-06-17",
  //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/chandu-champion-box-office-172555744-16x9_0.jpg?VersionId=S089NLMKfBrjTlkzRjKL8YcrXXv9g20W",
  //     "publishedAt": "2024-06-17T03:26:04Z",
  //     "content": "Kabir Khan's latest biographical sports drama, Chandu Champion, gained momentum on its first Sunday (June 16) after a slow start at the box office on Friday, June 14. The film, starring Kartik Aaryan… [+1841 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hindustan Times"
  //     },
  //     "author": "HT News Desk",
  //     "title": "EVM ‘hacking’ row: Who is Ravindra Waikar, Shiv Sena MP from Mumbai North West? - Hindustan Times",
  //     "description": "Ravindra Dattaram Waikar contested 2024 Lok Sabha polls as a candidate of Eknath Shinde's Shiv Sena from Mumbai North West Lok Sabha seat and won by 48 votes. | Latest News India",
  //     "url": "https://www.hindustantimes.com/india-news/evm-hacking-row-who-is-ravindra-waikar-shiv-sena-mp-from-mumbai-north-west-unlocking-elon-musk-101718591384925.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/Shivsena-UBT-MLA-Ravindra-Waikar-joined-Shivsena-E_1710184071830_1718594050104.jpg",
  //     "publishedAt": "2024-06-17T03:18:34Z",
  //     "content": "A fresh political slugfest erupted after a report by Mid-Day newspaper that claimed that a relative of the Shiv Sena candidate in Mumbai North West Lok Sabha constituency Ravindra Waikar was found us… [+3550 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hindustan Times"
  //     },
  //     "author": "HT News Desk",
  //     "title": "Zomato to acquire Paytm's movie ticketing business? What Deepinder Goyal's company said - Hindustan Times",
  //     "description": "Deepinder Goyal's company said that this plan aligns with Zomato's vision to expand its 'going out' offerings.",
  //     "url": "https://www.hindustantimes.com/business/zomato-to-acquire-paytms-movie-ticketing-business-what-deepinder-goyals-company-said-101718593608533.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/deepinder_goyal_1626246695822_1718593897809.JPG",
  //     "publishedAt": "2024-06-17T03:12:36Z",
  //     "content": "Food delivery giant Zomato said that it is in discussion to acquire Paytm's movie ticketing and events business. The company issued a clarification in a communication to the exchanges after it was re… [+1870 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "TOI World Desk",
  //     "title": "Philippine ship, Chinese vessel collide in disputed South China Sea: Chinese coast guard - The Times of India",
  //     "description": "China News: A collision between a Philippine ship and a Chinese vessel occurred on Monday near the Spratly Islands in the disputed South China Sea, according to B.",
  //     "url": "https://timesofindia.indiatimes.com/world/china/philippine-ship-chinese-vessel-collide-in-disputed-south-china-sea-chinese-coast-guard/articleshow/111048015.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-111048469,width-1070,height-580,imgsize-75472,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2024-06-17T02:52:00Z",
  //     "content": null
  //   }
  // ]

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // }

  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string,
  // }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news Component");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,

    }

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }


  async componentDidMount() {
    // console.log("cmd")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  updateNews = async () => {
    this.state.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    this.state.setProgress(30);
    let parsedData = await data.json()
    this.state.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.state.setProgress(100);

  }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {

    return (
      <>

        <h3 className='my-5 pt-5'>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <Container>
            <Row>
              {this.state.articles.map((element) => {
                return (
                  <Col md="4" key={element.url}>
                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} publishedAt={element.publishedAt} newsUrl={element.url} author={element.author} source={element.source.name} />
                  </Col>
                );
              })}

            </Row>
          </Container>

        </InfiniteScroll>

      </>
    )
  }
}

export default News
