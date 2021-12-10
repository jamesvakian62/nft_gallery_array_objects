import React from 'react'




 export default function Card1({ nft, title, description, price, creator })  {
     return(
         
            <div className = "Card">
        
            <div className = "NFT_container">
                <img id="NFT"  src={nft} alt="NFT"></img>
            </div>
    
            <div className = "content">
                <h3>Etherium Market</h3>
                <p id="content"   >{title}</p>
    
                <div className ="description">
                    
                    <div className ="stat">
                        <img src="./images/icon-ethereum.svg" alt="ethereum_icon"></img>
                        <p id="stat"   >{price}</p>
                    </div>

                    <div >
                        <p className ="stat"  >{description}</p>
                    </div>

                    <div className = "stat">
                        <img src ="./images/icon-clock.svg" alt="clock"></img>
                        <p>3 day</p>
                    </div>
    
                </div>
            </div>
    
            <div className = "footer">
                <img src="./images/image-avatar.png" alt="avatar"></img>
                <p   >{creator}</p>
            </div>
        </div>

       
             
            
        
     );
 }


