import './App.css';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./Redux/blockchain/blockchainAction";
import { fetchData } from "./Redux/Data/dataAction";
import * as s from "./styles/mintStyle";
import styled from "styled-components";
import copy1 from './Images/copy.jpg';
import Footer from './Footer';
import Header from './Header';
import Nftsample from './components/nftsample';

const truncate = (input, len) =>
input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
padding: 10px;
border-radius: 50px;
border: none;
background-color: orange;
padding: 10px;
font-weight: bold;
color: var(--secondary-text);
width: 140px;
cursor: pointer;
box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
-webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
-moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
:active {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
`;

export const StyledRoundButton = styled.button`
padding: 10px;
border-radius: 100%;
border: none;
background-color: orange;
padding: 10px;
font-weight: bold;
font-size: 15px;
color: var(--primary-text);
width: 30px;
height: 30px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
-webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
-moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
:active {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
`;

export const ResponsiveWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: stretched;
align-items: stretched;
width: 100%;
@media (min-width: 767px) {
  flex-direction: row;
}
`;

export const StyledLogo = styled.img`
width: 200px;
@media (min-width: 767px) {
  width: 300px;
}
transition: width 0.5s;
transition: height 0.5s;
`;

export const StyledImg = styled.img`
box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
border: 4px dashed var(--secondary);
background-color: var(--accent);
border-radius: 100%;
width: 200px;
@media (min-width: 900px) {
  width: 250px;
}
@media (min-width: 1000px) {
  width: 300px;
}
transition: width 0.5s;
`;

export const StyledLink = styled.a`
color: var(--secondary);
text-decoration: none;
`;

function App() {
const dispatch = useDispatch();
const blockchain = useSelector((state) => state.blockchain);
const data = useSelector((state) => state.data);
const [claimingNft, setClaimingNft] = useState(false);
const [feedback, setFeedback] = useState(`Click mint to mint your NFT.`);
const [mintAmount, setMintAmount] = useState(1);
const [CONFIG, SET_CONFIG] = useState({
  CONTRACT_ADDRESS: "",
  SCAN_LINK: "",
  NETWORK: {
    NAME: "",
    SYMBOL: "",
    ID: 0,
  },
  NFT_NAME: "",
  SYMBOL: "",
  MAX_SUPPLY: 1,
  WEI_COST: 0,
  DISPLAY_COST: 0,
  GAS_LIMIT: 0,
  MARKETPLACE: "",
  MARKETPLACE_LINK: "",
  SHOW_BACKGROUND: false,
});

const claimNFTs = () => {
  let cost = CONFIG.WEI_COST;
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);
  console.log("Cost: ", totalCostWei);
  console.log("Gas limit: ", totalGasLimit);
  setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
  setClaimingNft(true);
  const to = blockchain.account;
  blockchain.smartContract.methods
    .mint(to, mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: ((0.3 * 10 ** 18) * mintAmount)
    })
    .once("error", (err) => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    })
    .then((receipt) => {
      console.log(receipt);
      setFeedback(
        `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
      );
      setClaimingNft(false);
      dispatch(fetchData(blockchain.account));
    });
};

const decrementMintAmount = () => {
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  setMintAmount(newMintAmount);
};

const incrementMintAmount = () => {
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > 15) {
    newMintAmount = 15;
  }
  setMintAmount(newMintAmount);
};

const getData = () => {
  if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));
  }
};

const getConfig = async () => {
  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const config = await configResponse.json();
  SET_CONFIG(config);
};

useEffect(() => {
  getConfig();
}, []);

useEffect(() => {
  getData();
}, [blockchain.account]);


function copy() {
  navigator.clipboard.writeText(CONFIG.CONTRACT_ADDRESS)
  alert("Address Copied in the ClipBoard")
}
return (
  
  <div className="App-header">
    {/* <iframe width="100px" height="100px" ></iframe> */}
    <Header/>
   
  <s.Screen>
   
    <s.Container
      flex={1}
      ai={"center"}
      style={{ padding: 24, backgroundColor: "var(--primary)" }}
      image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
    >
      
      <s.SpacerSmall />
      
      <ResponsiveWrapper flex={1} style={{ padding: 12 }} test>
        {/* <s.Container flex={1} jc={"center"} ai={"center"}>
          <StyledImg alt={"example"} src={example2} />
        </s.Container> */}
        <s.SpacerLarge />
        <s.Container
          flex={2}
          jc={"center"}
          ai={"center"}
          style={{
            backgroundColor: "var(--accent)",
            padding: 24,
            borderRadius: 24,
            border: "4px dashed var(--secondary)",
            boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          }}
        >
          <s.TextTitle
            style={{
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              color: "var(--accent-text)",
            }}
          >
           
            
          </s.TextTitle>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >

          </s.TextDescription>
          <s.SpacerSmall />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
           
            </>
          ) : (
            <>
            
              <s.SpacerXSmall />
              <s.TextDescription
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
               Please Choose which NFT  you want to mint
              </s.TextDescription>
              <s.SpacerSmall />
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>
                 
                  <s.SpacerSmall />
                  
                  <div style={{ "display": "flex"}}>
                    <a  href='/arena'>
                  <StyledButton
                  >
                    ARENA
                  </StyledButton>
                  </a>
                  <s.SpacerSmall />
                  <s.SpacerSmall />
                  <a href="/characters">
                  <StyledButton
                    
                  >
                    CHARACTERS
                  </StyledButton>
                  </a>
                  </div>

                  
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <s.SpacerSmall />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {blockchain.errorMsg}
                      </s.TextDescription>
                    </>
                  ) : null}
                </s.Container>
              ) : (
                <>
                  
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledRoundButton
                      style={{ lineHeight: 0.4 }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </StyledRoundButton>
                    <s.SpacerMedium />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <StyledRoundButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </StyledRoundButton>
                  </s.Container>
                
                </>
              )}
            </>
          )}
          <s.SpacerMedium />
        </s.Container>
        <s.SpacerLarge />
   
      </ResponsiveWrapper>
      
      <s.SpacerMedium />
      
    </s.Container>
  </s.Screen>
  <Footer/>
  </div>
);
}

export default App;