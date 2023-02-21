import '../App.css'
import React, {  useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { web3connect, disconnect, Mint } from '../Global/utils/connect';
import { connect } from '../Global/feauters/blockchainSlice';
import Header from "../Header";
import Footer from "../Footer";
import Nftsample from "../components/nftsample";
import styled from "styled-components";
import * as s from "../styles/mintStyle"
import copy1 from "../Images/copy.jpg"


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

const Characters = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [claimingNft, setClaimingNft] = useState(false);
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
  const connectWeb3 = () => {
    if(blockchain.account) {
        disconnect().then((data) => dispatch(connect(data)))
    } else {
        web3connect().then((data) => dispatch(connect(data)))
    }
  }

 

  function copy() {
    navigator.clipboard.writeText(blockchain.characterContract);
    alert("Address Copied in the ClipBoard");
  }
  return (
    <div className="App-header">
      {/* <iframe width="100px" height="100px" ></iframe> */}
      <Header />
      <Nftsample />
      <s.Screen>
        <s.Container
          flex={1}
          ai={"center"}
          style={{ padding: 24, backgroundColor: "var(--primary)" }}
          image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
        >
          <s.SpacerSmall />

          <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
         
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
               Radical Chess Characters
              </s.TextTitle>
              <s.TextDescription
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                }}
              >
                <StyledLink target={"_blank"} href={`https://bscsan.com/address/${blockchain.characterContract}`}>
                  {truncate(blockchain.characterContract, 15)}
                </StyledLink>{" "}
                <button onClick={copy}>
                  <img
                    src={copy1}
                    width="20px"
                    alt="copy"
                    className="copyadd"
                  ></img>
                </button>
              </s.TextDescription>
              <s.SpacerSmall />
              {  (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    1 Character costs {blockchain.characterPrice}{" "}
                    BNB.
                  </s.TextTitle>
                  <s.SpacerXSmall />
                  <s.TextDescription
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    Excluding gas fees.
                  </s.TextDescription>
                  <s.SpacerSmall />
                  {blockchain.account === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        Connect to the {"Binance Smart Chain"} network
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          connectWeb3()
                        }}
                      >
                        CONNECT
                      </StyledButton>
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
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                      
                      </s.TextDescription>
                      <s.SpacerMedium />
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
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            Mint(1, mintAmount)
                          }}
                        >
                          {claimingNft ? "BUSY" : "MINT"}
                        </StyledButton>
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
          <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              Please make sure you are connected to the right network (
              Binance Smart chain Mainnet) and the correct address. Please
              note: Once you make the purchase, you cannot undo this action.
            </s.TextDescription>
            <s.SpacerSmall />
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              We have set the gas limit to 22850000 for the contract
              to successfully mint your NFT. We recommend that you don't lower
              the gas limit.
              <br />
              <br />
              <br />
            </s.TextDescription>
          </s.Container>
        </s.Container>
      </s.Screen>
      <Footer />
    </div>
  );
};


export default Characters;
