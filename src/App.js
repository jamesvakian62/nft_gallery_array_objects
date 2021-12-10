
import './App.css';
import Card from './component/Card'


const data = [
  { 
    // nft: "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
    nft:  "./images/1.png",
    title: "Joe NFT Star",
    description: "$ 1.1 million",
    price: "0.5 ETH",
    creator: "Joe Avan. Investor"
  },
  { 
   // nft: "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
   nft:  "./images/2.png",
   title: "James' NFT Star",
    description: "W 2.0 million",
    price: "0.4 ETH",
    creator: "James Tdo, Owner"
  },
  { 
 //   nft: "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
 nft: "./images/3.png",
 title: "Lance's NFT Star",
    description: "$ 5 million",
    price: "0.34 ETH",
    creator: "Lance Ado, Art Critic"
  },
];

function App() {
  
    
    const getData = data.map((i) => { 
      return (
        <Card
          nft={i.nft}
          title={i.title}
          description={i.description}
          price={i.price}
          creator={i.creator}
        />
      )
    })

    return(

      <div className="display">
        {getData}
      </div>
    )
 
  
 
}
  
export default App;


