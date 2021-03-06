import React, { Component } from 'react';

import News from './News';

class Main extends Component {
//   articles= [
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Alexandra E. Petri, Troy Closson, Mike Ives",
//     "title": "Winter Storm Live Updates: Eastern Massachusetts Will Be Hard-Hit, Expert Says - The New York Times",
//     "description": "Boston awoke to fierce winds and whipping snow as eastern Massachusetts braced for a day of blizzard conditions, hurricane-force winds and potentially record-breaking snowfall.",
//     "url": "https://www.nytimes.com/live/2022/01/29/us/snow-winter-storm",
//     "urlToImage": "https://static01.nyt.com/images/2022/01/29/multimedia/29snowstorm-briefing-totals/29snowstorm-briefing-totals-facebookJumbo.jpg",
//     "publishedAt": "2022-01-29T14:37:04Z",
//     "content": "As dawn neared on Saturday, a powerful winter storm was beginning to pummel eastern Massachusetts after bringing snow and brisk winds to the New York City metropolitan area and parts of New England.T… [+3653 chars]"
//     },
//     {
//     "source": {
//     "id": "reuters",
//     "name": "Reuters"
//     },
//     "author": null,
//     "title": "EXCLUSIVE Russia moves blood supplies near Ukraine, adding to U.S. concern, officials say - Reuters",
//     "description": "Russia's military buildup near Ukraine has expanded to include supplies of blood along with other medical materials that would allow it to treat casualties, in yet another key indicator of Moscow's military readiness, three U.S. officials tell Reuters.",
//     "url": "https://www.reuters.com/world/europe/exclusive-russia-moves-blood-supplies-near-ukraine-adding-us-concern-officials-2022-01-28/",
//     "urlToImage": "https://www.reuters.com/resizer/Rq_ZiSm4Wd_SKQzTupNrUfF_slA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XI46LVH6W5NKBGEYP76CNCURUA.jpg",
//     "publishedAt": "2022-01-29T14:27:00Z",
//     "content": "WASHINGTON, Jan 28 (Reuters) - Russia's military buildup near Ukraine has expanded to include supplies of blood along with other medical materials that would allow it to treat casualties, in yet anot… [+4044 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Ben Sisario",
//     "title": "Joni Mitchell Plans to Follow Neil Young Off Spotify, Citing ‘Lies’ - The New York Times",
//     "description": "“Irresponsible people are spreading lies that are costing people their lives,” she wrote after the site was accused of spreading vaccine misinformation.",
//     "url": "https://www.nytimes.com/2022/01/28/arts/music/joni-mitchell-neil-young-spotify.html",
//     "urlToImage": "https://static01.nyt.com/images/2022/01/28/multimedia/28arts-briefing-jonimitchell1/28arts-briefing-jonimitchell1-facebookJumbo-v2.jpg",
//     "publishedAt": "2022-01-29T13:52:00Z",
//     "content": "Joni Mitchell said Friday that she would remove her music from Spotify, joining Neil Young in his protest against the streaming service over its role in giving a platform to Covid-19 vaccine misinfor… [+1052 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Space.com"
//     },
//     "author": "Mike Wall",
//     "title": "SpaceX to launch Earth-observation satellite for Italy today (yes, you can watch it live) - Space.com",
//     "description": "Liftoff is still scheduled for 6:11 p.m. EST (2311 GMT) on today (Jan. 29) after two weather delays.",
//     "url": "https://www.space.com/spacex-launch-italian-csg-2-satellite-january-2022",
//     "urlToImage": "https://cdn.mos.cms.futurecdn.net/LSo9Sd9d4P5j7ZEKtHnkS3-1200-80.jpg",
//     "publishedAt": "2022-01-29T12:49:19Z",
//     "content": "SpaceX is now expected to launch an Italian Earth-observation satellite no earlier than today (Jan. 29), two days later than planned due to bad weather, and you'll be able to watch it live here when … [+3917 chars]"
//     },
//     {
//     "source": {
//     "id": "ars-technica",
//     "name": "Ars Technica"
//     },
//     "author": "Scharon Harding",
//     "title": "Keychron Q2 mechanical keyboard review: Enthusiast luxury at a decent price - Ars Technica",
//     "description": "An elevated typing experience for a digestible price.",
//     "url": "https://arstechnica.com/gadgets/2022/01/keychron-q2-mechanical-keyboard-review-enthusiast-luxury-at-a-decent-price/",
//     "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/01/20220128_113230-760x380.jpg",
//     "publishedAt": "2022-01-29T12:30:12Z",
//     "content": "Enlarge/ The Keychron Q2. \r\n14 with 13 posters participating\r\nNot everyone appreciates the luxury of a mechanical keyboard. Many are happy with the flat keys that come with their laptop; they don't n… [+4107 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "fox8.com"
//     },
//     "author": "Jerica Rogers",
//     "title": "Mega Millions’ jackpot hit; Ohio winner takes another big prize - WJW FOX 8 News Cleveland",
//     "description": "The Ohio winner didn’t hit the Mega Millions’ jackpot, but a ticket sold in Ohio hit all five numbers with the Megaplier.",
//     "url": "https://fox8.com/news/mega-millions-jackpot-hit-ohio-winner-takes-another-big-prize/",
//     "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2022/01/mega-millions-.jpg?w=1280",
//     "publishedAt": "2022-01-29T12:14:12Z",
//     "content": "(WKBN) – One person in Ohio is waking up a millionaire.\r\nThe winner didn’t hit the Mega Millions’ jackpot, but a ticket sold in Ohio hit all five numbers with the Megaplier. \r\nThe winning numbers are… [+204 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "ESPN"
//     },
//     "author": "D'Arcy Maine",
//     "title": "Ash Barty ends the drought, Naomi Osaka returns and more big moments from the 2022 Australian Open - ESPN",
//     "description": "Capping off with Ash Barty's incredible win in front of the home crowd, the 2022 Australian Open was a wild ride. We take a look at the best moments -- and what it all means for the future.",
//     "url": "https://www.espn.com/tennis/story/_/id/33171449/ash-barty-ends-drought-naomi-osaka-returns-more-big-moments-2022-australian-open",
//     "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0129%2Fr967315_1296x729_16%2D9.jpg",
//     "publishedAt": "2022-01-29T12:11:39Z",
//     "content": "Ashleigh Barty was 11 or 12 the first time she attended a final at the Australian Open. As a young player there as part of a training camp, she was amazed by how professional it was and how all of th… [+13369 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Mike Ives, Christopher Mele",
//     "title": "Thousands of Flights Canceled as Storm Barrels Up East Coast - The New York Times",
//     "description": "People were bracing for freezing temperatures, heavy snowfall and treacherous conditions.",
//     "url": "https://www.nytimes.com/live/2022/01/28/us/snow-winter-storm",
//     "urlToImage": "https://static01.nyt.com/images/2022/02/28/world/28snowstorm-briefing-lede-03/28snowstorm-briefing-lede-03-facebookJumbo.jpg",
//     "publishedAt": "2022-01-29T10:34:00Z",
//     "content": "A powerful winter storm was sweeping through the East Coast early Saturday, hours after it prompted the governors of New York and New Jersey to issue emergency declarations and forced the cancellatio… [+3039 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Ian Austen, Vjosa Isai",
//     "title": "In Canada, ‘Freedom Convoy’ Protesting Vaccine Mandates Nears Capital - The New York Times",
//     "description": "The “Freedom Convoy” began as a response to Covid vaccine requirements for some truckers, but its political aims have since broadened.",
//     "url": "https://www.nytimes.com/2022/01/29/world/canada-trucker-protest.html",
//     "urlToImage": "https://static01.nyt.com/images/2022/01/29/world/29canada-protest-02/29canada-protest-02-facebookJumbo.jpg",
//     "publishedAt": "2022-01-29T10:00:17Z",
//     "content": "You probably noticed some empty shelves at your grocery store, Erin OToole, the leader of the Conservative Party, said in an online video posted on Thursday. Thats because Justin Trudeau put in a pla… [+1163 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Tara Siegel Bernard, Emily Flitter, Anupreeta Das",
//     "title": "Buy GameStop, Fight Injustice. Just Don’t Sell. - The New York Times",
//     "description": "One year in the trenches of the meme stock revolution.",
//     "url": "https://www.nytimes.com/2022/01/29/business/gamestop-stock.html",
//     "urlToImage": "https://static01.nyt.com/images/2022/01/28/business/00memestop-03/00memestop-03-facebookJumbo.jpg",
//     "publishedAt": "2022-01-29T10:00:14Z",
//     "content": "He provided a very clear thesis, Mr. Gogna said, explaining that Mr. Gills work was an accessible contrast to other information charts, all these dizzying things out there. It can be overwhelming, he… [+2615 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Times"
//     },
//     "author": "Michael Schwirtz",
//     "title": "As Russian Troops Mass in Belarus, a Ukraine Border Is Largely Undefended - The New York Times",
//     "description": "From the border, it’s a fast 140 miles down a newly paved highway to Kyiv, the Ukrainian capital, but only a few troops stand guard.",
//     "url": "https://www.nytimes.com/2022/01/29/world/europe/russia-troops-belarus-border-ukraine.html",
//     "urlToImage": "https://static01.nyt.com/images/2022/01/27/world/27Ukraine-Belarus4/27Ukraine-Belarus4-facebookJumbo.jpg",
//     "publishedAt": "2022-01-29T10:00:04Z",
//     "content": "The Novi Yarylovychi border crossing is a fast, 140-mile drive straight from the Belarus border south to Kyiv on a highway that is mostly freshly paved thanks to efforts by President Volodymyr Zelens… [+1606 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "TMZ"
//     },
//     "author": "TMZ Staff",
//     "title": "Kim Kardashian and Pete Davidson Work Well Under Stress, Conquer Escape Room - TMZ",
//     "description": "Kim Kardashian and Pete Davidson prove they can work well under pressure.",
//     "url": "https://www.tmz.com/2022/01/29/kim-kardashian-pete-davidson-kanye-west-escape-room/",
//     "urlToImage": "https://imagez.tmz.com/image/09/16by9/2022/01/28/092bb20a6650414f8804339f5b1490a1_xl.jpg",
//     "publishedAt": "2022-01-29T09:00:00Z",
//     "content": "Kim Kardashian and Pete Davidson are proving they can work well together under high-pressure, high-stress environments -- no not Kanye's attacks -- acing the escape room!!!\r\nAs we reported ... Kim, P… [+1114 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "New York Post"
//     },
//     "author": "Steve Serby",
//     "title": "Brian Daboll is Daniel Jones' last chance to be Giants' franchise QB - New York Post ",
//     "description": "The Giants’ hiring of Brian Daboll as their new head coach means it truly is Put Up or Shut Up for Daniel Jones. Last Chance Saloon to be The Mann.",
//     "url": "https://nypost.com/2022/01/29/brian-daboll-must-help-daniel-jones-become-giants-franchise-qb/",
//     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/newspress-collage-21014562-1643426583270.png?w=1024",
//     "publishedAt": "2022-01-29T07:52:00Z",
//     "content": "The Giants’ hiring of Brian Daboll as their new head coach means it truly is Put Up or Shut Up for Daniel Jones. Last Chance Saloon to be The Mann. \r\nEverybody knows that Daboll worked magic with Jos… [+5052 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Daily Mail"
//     },
//     "author": "Sam Joseph Semon",
//     "title": "Cher belts out updated version of The Golden Girls theme song for Betty White tribute special - Daily Mail",
//     "description": "Cher released a clip of her singing an updated version of The Golden Girls theme song to her Twitter account on Friday afternoon.",
//     "url": "https://www.dailymail.co.uk/tvshowbiz/article-10454407/Cher-belts-updated-version-Golden-Girls-theme-song-Betty-White-tribute-special.html",
//     "urlToImage": "https://i.dailymail.co.uk/1s/2022/01/29/06/53511075-0-image-a-97_1643437205997.jpg",
//     "publishedAt": "2022-01-29T06:47:51Z",
//     "content": "Cher released a clip of her singing an updated version of The Golden Girls theme song to her Twitter account on Friday afternoon.\r\nIn the video, the 75-year-old hitmaker belted out the popular televi… [+3574 chars]"
//     },
//     {
//     "source": {
//     "id": "usa-today",
//     "name": "USA Today"
//     },
//     "author": "Danny Segura",
//     "title": "Khabib Nurmagomedov says he offered Jake Paul an Eagle FC contract: 'We're waiting on his answer' - MMA Junkie",
//     "description": "Khabib Nurmagomedov is interested in bringing Jake Paul to Eagle FC.",
//     "url": "https://mmajunkie.usatoday.com/2022/01/mma-news-khabib-nurmagomedov-says-offered-jake-paul-eagle-fc-contract",
//     "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/01/khabib-nurmagomedov-jake-paul.jpg?w=1000&h=576&crop=1",
//     "publishedAt": "2022-01-29T06:12:00Z",
//     "content": "MIAMI It appears Khabib Nurmagomedov has taken Jake Paul’s MMA tease seriously.\r\nThe former UFC lightweight champion and co-owner of MMA promotion Eagle FC says he’s sent out a contract to the YouTub… [+1403 chars]"
//     },
//     {
//     "source": {
//     "id": "the-washington-post",
//     "name": "The Washington Post"
//     },
//     "author": "Amy Cheng",
//     "title": "US warns of Russian capabilities as Ukraine cautions against Western panic - The Washington Post",
//     "description": "Ukraine's President faulted Western leaders for delaying more damaging sanctions on Moscow, even as he accused them of inciting “panic” with suggestions that an invasion was imminent.",
//     "url": "https://www.washingtonpost.com/world/2022/01/29/ukraine-russia-putin-nato-zelensky/",
//     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/33DHUVEAAQI6ZDGIW2LFMS5HSY.jpg&w=1440",
//     "publishedAt": "2022-01-29T06:10:26Z",
//     "content": "Washington remains committed to helping Ukraine defend itself through security assistance material, Austin added. Whatever [Putin] decides, the United States will stand with our allies and partners. … [+5012 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "BBC News"
//     },
//     "author": "https://www.facebook.com/bbcnews",
//     "title": "US East Coast hunkers down for 'bombogenesis' snowstorm - BBC News",
//     "description": "Packing hurricane-force winds, the storm has triggered the region's first blizzard warnings since 2018.",
//     "url": "https://www.bbc.com/news/world-us-canada-60177979",
//     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/60B2/production/_123045742_gettyimages-1238044808.jpg",
//     "publishedAt": "2022-01-29T05:45:49Z",
//     "content": "Image source, Getty Images\r\nThe US East Coast is bracing for a major blizzard to hit the region for the first time in four years. \r\nThe storm is forecast to stretch from the Carolinas to Maine, packi… [+2120 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Thenationaldesk.com"
//     },
//     "author": "The National Desk",
//     "title": "NTSB investigating Pittsburgh bridge collapse that injured 10 - WKRC TV Cincinnati",
//     "description": "WASHINGTON (TND) &mdash; The national conversation about infrastructure took center stage in Pittsburgh Friday after a bridge collapsed overnight, just hours before President Joe Biden&rsquo;s arrival. The National Transportation Safety Board has a team on-si…",
//     "url": "https://thenationaldesk.com/news/americas-news-now/ntsb-investigating-pittsburgh-bridge-collapse-that-injured-10",
//     "urlToImage": "https://local12.com/resources/media/825774b1-ff24-4cf7-b584-258e94a698fe-large16x9_AP22028638876830.jpg?1643431980173",
//     "publishedAt": "2022-01-29T04:59:11Z",
//     "content": null
//     },
//     {
//     "source": {
//     "id": "cnn",
//     "name": "CNN"
//     },
//     "author": "Steve Almasy, Rosa Flores and Rosalina Nieves, CNN",
//     "title": "Houston police shooting suspect has long criminal history, faces attempted murder charges - CNN",
//     "description": "The man who the Houston Police Department says shot three officers Thursday has a lengthy criminal record and now faces three counts of attempted capital murder of a police officer.",
//     "url": "https://www.cnn.com/2022/01/28/us/houston-police-officers-shot-suspect-charges/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220127141155-01-houston-officers-shot-super-tease.jpg",
//     "publishedAt": "2022-01-29T04:37:00Z",
//     "content": null
//     },
//     {
//     "source": {
//     "id": "the-hill",
//     "name": "The Hill"
//     },
//     "author": "Caroline Vakil",
//     "title": "Former chairman of Wisconsin GOP party signals he will comply with Jan. 6 committee subpoena | TheHill - The Hill",
//     "description": "A former chairman of Wisconsin state’s Republican Party signaled ...",
//     "url": "https://thehill.com/policy/national-security/591915-former-chairman-of-wisconsin-gop-party-signals-he-will-comply-with",
//     "urlToImage": "https://thehill.com/sites/default/files/jan6_select_committee_120121gn2_lead.jpg",
//     "publishedAt": "2022-01-29T02:11:43Z",
//     "content": "A former chairman of Wisconsin states Republican Party signaled that he will be complying with a subpoena he received from the House select committee investigating the events around the Jan. 6, 2021,… [+3278 chars]"
//     }
//     ]
constructor(){
    super();
    console.log("im constructor from news ")
    this.state={
     articles: []  //this.articles
    }
    }
     async componentDidMount(){
      console.log("componentDidMount");
       let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=57e26ba83735479b83c81afd60951485";
       let data= await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
     }
    
  render() {
    console.log("render")
    return (
      <div className="container-my-3">
        <h2> Daily news</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-sm" key={element.url} >
          <News title={element.title} description={element.description}imageUrl={element.urlToImage} url={element.url}/>
        </div>
        })}
       
       </div> 
      </div>
    );
  }
}

export default Main
