import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineCode } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources13_ = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Blockchain & Web3 Development Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Development Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://remix.ethereum.org/" target="_blank">Remix IDE</a>, <a href="https://trufflesuite.com/" target="_blank">Truffle Suite</a></div>
              <div className='rea'>● <a href="https://hardhat.org/" target="_blank">Hardhat</a>, <a href="https://ganache.dev/" target="_blank">Ganache</a></div>
              <div className='rea'>● <a href="https://metamask.io/" target="_blank">MetaMask</a>, <a href="https://walletconnect.com/" target="_blank">WalletConnect</a></div>
              <div className='rea'>● <a href="https://infura.io/" target="_blank">Infura</a>, <a href="https://alchemy.com/" target="_blank">Alchemy</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Official Docs</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.soliditylang.org/" target="_blank">Solidity Docs</a>, <a href="https://ethereum.org/en/developers/docs/" target="_blank">Ethereum Docs</a></div>
              <div className='rea'>● <a href="https://docs.chain.link/" target="_blank">Chainlink Docs</a>, <a href="https://docs.alchemy.com/" target="_blank">Alchemy Docs</a></div>
              <div className='rea'>● <a href="https://polygon.technology/developer/" target="_blank">Polygon Dev Docs</a>, <a href="https://docs.ipfs.io/" target="_blank">IPFS Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.buildspace.so/" target="_blank">Buildspace</a>, <a href="https://learnweb3.io/" target="_blank">LearnWeb3</a></div>
              <div className='rea'>● <a href="https://www.alchemy.com/web3-university" target="_blank">Alchemy University</a>, <a href="https://cryptozombies.io/" target="_blank">CryptoZombies</a></div>
              <div className='rea'>● <a href="https://chainshot.com/" target="_blank">ChainShot</a>, <a href="https://www.useweb3.xyz/" target="_blank">useWeb3</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Networks & Ecosystems</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://ethereum.org/" target="_blank">Ethereum</a>, <a href="https://polygon.technology/" target="_blank">Polygon</a></div>
              <div className='rea'>● <a href="https://solana.com/developers" target="_blank">Solana</a>, <a href="https://near.org/developers/" target="_blank">NEAR</a></div>
              <div className='rea'>● <a href="https://docs.arbitrum.io/" target="_blank">Arbitrum</a>, <a href="https://optimism.io/" target="_blank">Optimism</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineCode size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Smart Contract Libraries</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.openzeppelin.com/" target="_blank">OpenZeppelin</a></div>
              <div className='rea'>● <a href="https://github.com/dapphub/ds-token" target="_blank">DappHub DS-Token</a></div>
              <div className='rea'>● <a href="https://solmate.rs/" target="_blank">Solmate</a>, <a href="https://www.rareskills.io/" target="_blank">RareSkills Labs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=solidity+tutorial+for+beginners" target="_blank">Solidity Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=blockchain+development+course" target="_blank">Blockchain Dev Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=web3+dapp+tutorial" target="_blank">Web3 DApp Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=nft+smart+contract+solidity" target="_blank">NFT Smart Contract Tutorials</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources13_;
