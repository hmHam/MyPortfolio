import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools, FaMobileAlt } from 'react-icons/fa';
import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  name: "hmHam",
  title: "システムエンジニア",
  heroDescription: "公共事業システム向けにパフォーマンステストやデータベースチューニングをしています。趣味でモダンなWebアプリ開発もしています。",
  
  socials: {
    github: "https://github.com/hmHam",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mail@example.com"
  },
  
  about: {
    title: "私について",
    description: `
      フロントエンドとバックエンドの両方の経験を持つソフトウェアエンジニアです。
      ユーザー中心の設計とスケーラブルなアーキテクチャに焦点を当てて、複雑な問題を解決するための革新的なソリューションを開発しています。
      
      3年以上の実務経験を持ち、React、Angular、Spring Framework、Djangoなどの最新技術を活用して、
      高品質なWebアプリケーションを開発してきました。
      
      常に新しい技術や方法論を学ぶことに熱心で、クリーンなコードとベストプラクティスを重視しています。
      チームでの協力を大切にし、明確なコミュニケーションを心がけています。
    `,
    image: "/profile.jpg",
  },
  
  skills: [
    {
      category: "フロントエンド",
      icon: <FaReact className="text-4xl text-blue-500" />,
      technologies: ["React", "Angular", "JavaScript", "TypeScript", "Bootstrap5", "Tailwind CSS"]
    },
    {
      category: "バックエンド",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      technologies: ["Next.js", "Spring Framework", "Django"]
    },
    {
      category: "データベース",
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      technologies: ["Oracle Database", "PostgreSQL", "MySQL", "Redis", "Prisma", "Sequelize"]
    },
    {
      category: "クラウド & DevOps",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      technologies: ["AWS", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      category: "開発ツール",
      icon: <FaTools className="text-4xl text-gray-700" />,
      technologies: ["Git", "Webpack", "JMeter", "Jest", "VS Code", "Postman"]
    },
    {
      category: "資格",
      icon: <FaTools className="text-4xl text-gray-700" />,
      technologies: ["Oracle Master Silver", "データベーススペシャリスト", "応用情報技術者"]
    }
  ],
  
  projects: [
    {
      title: "サンプル１",
      description: "Description1",
      technologies: ["React", "Node.js"],
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    },
    {
      title: "サンプル２",
      description: "Description２",
      technologies: [],
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    },
    {
      title: "サンプル３",
      description: "Description３",
      technologies: [],
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    }
    // {
    //   title: "Eコマースプラットフォーム",
    //   description: "React、Node.js、MongoDB を使用した完全なフルスタックのEコマースソリューション。ユーザー認証、支払い処理、製品管理機能を備えています。",
    //   technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
    //   image: "/projects/ecommerce.jpg",
    //   link: "https://github.com/yourusername/ecommerce-platform",
    //   featured: true
    // },
    // {
    //   title: "タスク管理アプリ",
    //   description: "リアルタイム更新機能を備えた協調型タスク管理アプリケーション。React Hooks と Firebase を使用しています。",
    //   technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    //   image: "/projects/task-app.jpg",
    //   link: "https://github.com/yourusername/task-manager",
    //   featured: true
    // },
    // {
    //   title: "財務ダッシュボード",
    //   description: "財務データと分析情報を視覚化するためのインタラクティブなダッシュボード。",
    //   technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    //   image: "/projects/finance-dashboard.jpg",
    //   link: "https://github.com/yourusername/finance-dashboard",
    //   featured: false
    // },
    // {
    //   title: "ブログプラットフォーム",
    //   description: "カスタムCMSとマークダウンサポートを備えたブログプラットフォーム。",
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    //   image: "/projects/blog-platform.jpg",
    //   link: "https://github.com/yourusername/blog-platform",
    //   featured: false
    // },
    // {
    //   title: "気象アプリ",
    //   description: "位置情報サービスを利用したリアルタイム気象アプリケーション。",
    //   technologies: ["React", "OpenWeather API", "Geolocation API"],
    //   image: "/projects/weather-app.jpg",
    //   link: "https://github.com/yourusername/weather-app",
    //   featured: false
    // },
    // {
    //   title: "コミュニティフォーラム",
    //   description: "ユーザー認証とリアルタイムチャット機能を備えたディスカッションプラットフォーム。",
    //   technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    //   image: "/projects/community-forum.jpg",
    //   link: "https://github.com/yourusername/community-forum",
    //   featured: false
    // }
  ],
  
  experiences: [
    {
      company: "テックソリューション株式会社",
      position: "シニアフロントエンド開発者",
      period: "2023年4月 - 現在",
      description: "フロントエンド開発チームをリードし、レスポンシブWebアプリケーションの構築を担当。コード整理とパフォーマンス最適化のベストプラクティスを導入しました。"
    },
    {
      company: "ウェブイノベーション社",
      position: "フルスタック開発者",
      period: "2020年6月 - 2023年3月",
      description: "React、Node.js、MongoDB を使用してフルスタックアプリケーションを開発。UX/UIデザイナーと協力してユーザーフレンドリーなインターフェースを実装しました。"
    },
    {
      company: "デジタルクリエイション",
      position: "ジュニアWeb開発者",
      period: "2018年8月 - 2020年5月",
      description: "レスポンシブWebサイトとWebアプリケーションの構築を支援。HTML、CSS、JavaScript、およびさまざまなフロントエンドフレームワークの経験を積みました。"
    }
  ],
  
  contact: {
    headline: "お問い合わせ",
    description: "プロジェクトの相談やご質問などがありましたら、お気軽にご連絡ください。",
    email: "mail@example.com",
    phone: "090-1234-5678"
  }
};

export default portfolioData;