import React from 'react'
import {useState} from 'react'

const BlockchainWeb3 = () => {
  const [updown12, setUpdown12] = useState(false);
  return (
    <li onClick={()=>{setUpdown12(!updown12)}}> 
  <div className='tile'>Blockchain & Web3 Development</div>
  <div className={`textes ${updown12 ? "" : 'texte'}`}>
    <h2>What is Blockchain & Web3 Development?</h2>
    <p>
      Blockchain is a decentralized digital ledger technology that records transactions securely and transparently. Web3 represents the next evolution of the internet, built on blockchain, enabling decentralized applications (dApps), smart contracts, and user-owned data systems.
    </p>

    <div>
      <h2>Core Concepts of Blockchain:</h2>
      <h4>● Blocks, Chains, Hashing</h4>
      <h4>● Consensus Mechanisms: Proof of Work (PoW), Proof of Stake (PoS)</h4>
      <h4>● Public vs Private Blockchains</h4>
      <h4>● Decentralization and Immutability</h4>
      <h4>● Wallets, Nodes, and Transactions</h4>
    </div>

    <div>
      <h2>Web3 Technologies:</h2>
      <h4>● Smart Contracts – Self-executing agreements on blockchain</h4>
      <h4>● dApps – Decentralized Applications</h4>
      <h4>● NFTs (Non-Fungible Tokens)</h4>
      <h4>● DAOs (Decentralized Autonomous Organizations)</h4>
      <h4>● IPFS (InterPlanetary File System)</h4>
    </div>

    <div>
      <h2>Popular Blockchain Platforms:</h2>
      <h4>● Ethereum – Most widely used for smart contracts & dApps</h4>
      <h4>● Solana – High-speed blockchain</h4>
      <h4>● Polygon – Layer 2 solution for Ethereum</h4>
      <h4>● Binance Smart Chain</h4>
      <h4>● Avalanche, Tezos, Algorand</h4>
    </div>

    <div>
      <h2>Tools & Libraries:</h2>
      <h4>● Solidity – Programming language for Ethereum smart contracts</h4>
      <h4>● Hardhat / Truffle – Ethereum development environments</h4>
      <h4>● Web3.js / Ethers.js – Connect dApps with Ethereum</h4>
      <h4>● Metamask – Wallet extension for interacting with dApps</h4>
      <h4>● Ganache – Personal local Ethereum blockchain</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Ensure smart contract security (test & audit)</h4>
      <h4>● Keep gas fees and scalability in mind</h4>
      <h4>● Use open-source libraries cautiously</h4>
      <h4>● Provide a seamless wallet connection (e.g., Metamask)</h4>
      <h4>● Test on testnets before mainnet deployment</h4>
    </div>

    <div>
      <h2>Use Cases of Blockchain/Web3:</h2>
      <h4>● Decentralized Finance (DeFi)</h4>
      <h4>● Supply Chain Tracking</h4>
      <h4>● NFT Marketplaces</h4>
      <h4>● Decentralized Identity & Voting Systems</h4>
      <h4>● Cross-border Payments</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Blockchain Developer</h4>
      <h4>● Smart Contract Engineer</h4>
      <h4>● dApp Developer</h4>
      <h4>● Web3 Frontend Developer</h4>
      <h4>● Blockchain Architect / Security Auditor</h4>
    </div>
  </div>
</li>
  )
}

export default BlockchainWeb3
