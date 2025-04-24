
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  content?: string;
  imageUrl?: string;
}

export const mockNews: NewsItem[] = [
  { 
    id: 1, 
    title: "Bitcoin Hits All-Time High", 
    date: "2025-04-23", 
    category: "Bitcoin", 
    description: "Bitcoin reaches new heights as institutional investors flood into the market.",
    content: "Bitcoin has reached a new all-time high today, hitting $100,000 for the first time in its history. The leading cryptocurrency has seen tremendous growth over the past few months, largely driven by increased institutional investment and mainstream adoption.\n\nAnalysts attribute this surge to several factors, including growing institutional confidence in Bitcoin as a store of value, increased retail investor participation, and ongoing concerns about inflation in traditional economies.\n\n\"What we're seeing is the maturation of Bitcoin as an asset class,\" says Sarah Johnson, Chief Strategy Officer at CryptoVest. \"Large financial institutions that once dismissed Bitcoin are now allocating significant portions of their portfolios to it.\"\n\nThe milestone comes after several major corporations added Bitcoin to their balance sheets, citing it as a hedge against inflation and currency devaluation. Payment processors have also expanded their crypto offerings, making it easier than ever for consumers to buy, hold, and spend Bitcoin.\n\nMarket observers are divided on what comes next. Some predict a correction in the short term, while others believe this could be the beginning of an extended bull run that could push prices significantly higher.",
    imageUrl: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3300&q=80"
  },
  { 
    id: 2, 
    title: "Ethereum 2.0 Update Released", 
    date: "2025-04-22", 
    category: "Ethereum", 
    description: "Ethereum's shift to Proof of Stake is finally here, bringing scalability and sustainability.",
    content: "The long-awaited Ethereum 2.0 upgrade has finally been released, marking a historic shift for the second-largest cryptocurrency by market capitalization. This update transitions Ethereum from a Proof of Work to a Proof of Stake consensus mechanism, addressing long-standing concerns about energy consumption and network scalability.\n\nThe upgrade is expected to reduce Ethereum's energy usage by more than 99%, addressing one of the major criticisms of blockchain technology. Additionally, the new architecture allows for significantly higher transaction throughput, potentially handling thousands of transactions per second.\n\n\"This is the most significant upgrade in Ethereum's history,\" commented Vitalik Buterin, co-founder of Ethereum. \"It represents years of research and development coming to fruition, and opens up possibilities that simply weren't feasible before.\"\n\nWith the upgrade complete, developers are now focusing on implementing additional improvements, including sharding, which will further enhance the network's capacity by splitting it into multiple parallel chains.\n\nThe market has responded positively to the news, with ETH prices climbing following the successful implementation. Industry experts suggest that the reduced environmental impact and improved scalability could attract more institutional investment and enterprise adoption.",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
  },
  { 
    id: 3, 
    title: "DeFi Continues to Grow", 
    date: "2025-04-21", 
    category: "DeFi", 
    description: "Decentralized finance platforms are revolutionizing the way we think about traditional banking.",
    content: "The decentralized finance (DeFi) sector continues to experience remarkable growth, with total value locked (TVL) now exceeding $500 billion across various protocols. This milestone marks a significant achievement for the emerging financial ecosystem that aims to recreate traditional financial systems in a decentralized manner.\n\nDeFi platforms offer services ranging from lending and borrowing to insurance and derivatives trading, all without the need for traditional financial intermediaries like banks or brokerages. Instead, these services operate through smart contracts on blockchain networks, primarily Ethereum.\n\n\"What we're witnessing is nothing short of a financial revolution,\" explains Michael Rodriguez, founder of DeFi analytics platform MetricsMatter. \"DeFi is democratizing access to sophisticated financial instruments that were previously available only to privileged institutions.\"\n\nThe growth isn't limited to a single platform or service. Lending protocols, decentralized exchanges (DEXs), yield aggregators, and insurance providers are all seeing increased adoption. Cross-chain DeFi solutions are also gaining traction, allowing users to access DeFi services across multiple blockchain networks.\n\nHowever, regulators are taking notice of this rapidly expanding sector. Several countries have begun developing regulatory frameworks for DeFi, seeking to balance innovation with consumer protection and financial stability concerns.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
  },
  { 
    id: 4, 
    title: "NFT Market Rebounds with New Use Cases", 
    date: "2025-04-20", 
    category: "NFT", 
    description: "Non-fungible tokens find new practical applications beyond digital art, driving market recovery.",
    content: "After a period of cooling off, the market for non-fungible tokens (NFTs) is showing strong signs of recovery, driven by an expansion of use cases beyond digital art and collectibles. The sector is now seeing significant growth in areas such as gaming, real estate, identity verification, and event ticketing.\n\n\"What we're seeing is the maturation of the NFT market,\" says Amanda Chen, blockchain researcher at Digital Asset Research. \"The initial hype cycle focused primarily on speculative digital art, but we're now witnessing the technology being applied to solve real-world problems.\"\n\nIn the gaming industry, NFTs are being used to represent in-game assets that players truly own and can trade across different games and platforms. Real estate NFTs are gaining traction for fractional ownership of properties, making real estate investment more accessible to average investors.\n\nCorporate adoption is also accelerating, with major brands launching NFT-based loyalty programs that offer exclusive benefits to token holders. These programs allow companies to build deeper relationships with their most dedicated customers while providing verifiable scarcity and ownership.\n\nThe technology infrastructure supporting NFTs has also improved significantly, with more energy-efficient minting options and lower transaction costs helping to address previous criticisms of environmental impact and accessibility.",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
  },
  { 
    id: 5, 
    title: "Regulatory Clarity Emerges for Cryptocurrencies", 
    date: "2025-04-19", 
    category: "Regulation", 
    description: "Major economies finalize cryptocurrency frameworks, providing long-awaited clarity for the industry.",
    content: "In a coordinated effort, several major economies have finalized comprehensive regulatory frameworks for cryptocurrencies, providing much-needed clarity for businesses and investors in the digital asset space. The new regulations aim to protect consumers while fostering innovation and establishing cryptocurrencies as a legitimate asset class.\n\n\"This marks a turning point for the cryptocurrency industry,\" says Robert Kiyosaki, director of the International Digital Assets Coalition. \"Clear regulations remove a significant source of uncertainty that has held back institutional adoption and mainstream acceptance.\"\n\nKey aspects of the new frameworks include standardized licensing requirements for cryptocurrency exchanges, clear guidelines for token classifications, anti-money laundering provisions, and investor protection measures. Notably, the regulations recognize certain cryptocurrencies as digital commodities rather than securities, providing a path forward for many projects that had been operating in regulatory limbo.\n\nThe financial industry has responded positively to the development, with several major banks announcing plans to expand their cryptocurrency custody and trading services. Venture capital funding for blockchain startups has also surged in anticipation of reduced regulatory risks.\n\n\"We've been waiting for this clarity for years,\" comments Maria Gonzalez, CEO of blockchain payment provider PayChain. \"Now we can focus on building and scaling our services without the constant fear of regulatory action.\"",
    imageUrl: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
  },
  { 
    id: 6, 
    title: "Central Bank Digital Currencies Gain Momentum", 
    date: "2025-04-18", 
    category: "CBDC", 
    description: "Major central banks accelerate CBDC development as digital currency adoption grows worldwide.",
    content: "Central Bank Digital Currencies (CBDCs) are gaining significant momentum globally, with over 30 nations now in advanced stages of development or piloting programs. These digital versions of national currencies represent a major shift in monetary systems and could reshape how people interact with money.\n\nThe acceleration in CBDC development comes as countries seek to maintain monetary sovereignty amid growing cryptocurrency adoption and the digitization of financial services. China continues to lead the way with its digital yuan, which is now accepted by millions of merchants across the country and has been used for billions of transactions.\n\n\"CBDCs represent the future of money,\" states Dr. Eleanor Hughes, monetary policy expert at the Global Economic Forum. \"They combine the efficiency and programmability of cryptocurrencies with the stability and trust of central bank-issued currency.\"\n\nUnlike decentralized cryptocurrencies, CBDCs are issued and controlled by central banks, allowing for greater regulatory oversight and monetary policy implementation. However, they can offer similar benefits in terms of transaction speed, reduced costs, and financial inclusion.\n\nThe rise of CBDCs has prompted mixed reactions from the cryptocurrency community. Some view them as validation of blockchain technology and digital assets, while others express concern about increased financial surveillance and control. Industry experts suggest that both CBDCs and decentralized cryptocurrencies will coexist, serving different needs in the financial ecosystem.",
    imageUrl: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3397&q=80"
  },
  { 
    id: 7, 
    title: "Bitcoin Mining Embraces Renewable Energy", 
    date: "2025-04-17", 
    category: "Bitcoin", 
    description: "The majority of Bitcoin mining now powered by renewable energy, addressing environmental concerns.",
    content: "In a remarkable transformation, more than 75% of Bitcoin mining operations worldwide are now powered by renewable energy sources, according to a comprehensive study released by the Cryptocurrency Climate Research Group. This shift represents a dramatic change from just a few years ago when fossil fuels dominated the mining landscape.\n\n\"The Bitcoin mining industry has undergone a green revolution,\" explains Dr. Jonathan Taylor, lead researcher on the study. \"Economic incentives have aligned with environmental concerns, as miners seek out the cheapest energy sources, which are increasingly renewables.\"\n\nHydroelectric power continues to be the leading renewable source for mining operations, particularly in regions like Quebec, Norway, and parts of China. However, solar and wind energy have seen the fastest growth, especially in Texas and Australia, where miners can take advantage of abundant land and favorable renewable energy policies.\n\nMany mining companies have also implemented innovative solutions to further reduce their environmental impact. These include using excess heat from mining operations for district heating, agricultural applications, and industrial processes.\n\n\"The narrative that Bitcoin is environmentally destructive is becoming outdated,\" says Maria Fernandez, CEO of GreenMine, a renewable-powered mining operation. \"We're demonstrating that securing the Bitcoin network can be done sustainably and can even accelerate the transition to renewable energy by providing flexible demand.\"",
    imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
  },
  { 
    id: 8, 
    title: "Cardano Implements New Smart Contract Capability", 
    date: "2025-04-16", 
    category: "Cardano", 
    description: "Cardano's latest upgrade enables advanced smart contract features, boosting developer activity.",
    content: "Cardano has successfully implemented a major protocol upgrade that significantly enhances its smart contract capabilities. The update, code-named \"Kepler,\" introduces new features that allow developers to build more complex and efficient decentralized applications (dApps) on the platform.\n\n\"This upgrade represents a substantial advancement in Cardano's technical capabilities,\" says Charles Hoskinson, founder of Cardano. \"We've prioritized security and scalability while expanding what developers can achieve on the platform.\"\n\nKey improvements include a more expressive programming model, improved interoperability with other blockchains, and optimizations that reduce transaction costs and increase throughput. The upgrade also introduces native support for decentralized identities and zero-knowledge proofs, enabling privacy-preserving applications.\n\nSince the announcement of the upgrade, developer activity on Cardano has surged, with the number of active projects increasing by over 40%. Several prominent DeFi protocols have announced plans to deploy on Cardano, citing the improved technical capabilities and the platform's focus on security and formal verification.\n\n\"What sets Cardano apart is its methodical, research-driven approach,\" explains Dr. Sophia Martinez, blockchain researcher at Digital Systems Institute. \"While this has meant a slower pace of development compared to some competitors, it has resulted in a robust foundation that is now ready to support a wide range of applications.\"",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-5232cd0575e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
  }
];

export const categories = [
  "All",
  "Bitcoin",
  "Ethereum",
  "DeFi",
  "NFT",
  "Regulation",
  "CBDC",
  "Cardano"
];
