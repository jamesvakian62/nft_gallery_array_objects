import React from 'react'




 export default function Card({ nft, title, description, price, creator })  {
     return(
         
            <div className = "Card">
        
            <div className = "NFT_container">
                <img id="NFT" key={nft} src={nft} alt="NFT"></img>
            </div>
    
            <div className = "content">
                <h3>Etherium Market</h3>
                <p id="content" key={title} src={title} >{title}</p>
    
                <div className ="description">
                    
                    <div className ="stat">
                        <img src="./images/icon-ethereum.svg" alt="ethereum_icon"></img>
                        <p id="stat" key={price} src={price} >{price}</p>
                    </div>

                    <div >
                        <p className ="stat" key={description} src={description} >{description}</p>
                    </div>

                    <div className = "stat">
                        <img src ="./images/icon-clock.svg" alt="clock"></img>
                        <p>3 day</p>
                    </div>
    
                </div>
            </div>
    
            <div className = "footer">
                <img src="./images/image-avatar.png" alt="avatar"></img>
                <p  key={creator} src={creator} >{creator}</p>
            </div>
        </div>

       
             
            
        
     );
 }


