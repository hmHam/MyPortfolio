import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools, FaCertificate, FaAward, FaVial, FaBug, FaCode, FaCheckSquare } from 'react-icons/fa';
import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  name: "hmHam",
  title: "システムエンジニア",
  heroDescription: "公共事業システム向けにパフォーマンステストや\nデータベースチューニングをしています。\n趣味でモダンなWebアプリ開発もしています。",
  
  socials: {
    github: "https://github.com/hmHam",
    linkedin: "",
    twitter: "",
    email: ""
  },
  
  about: {
    title: "私について",
    description: `
　フロントエンドからバックエンドまで一貫した技術スタックを駆使するフルスタックエンジニアとして、ユーザー視点を大切にしたデザインと拡張性を備えたアーキテクチャの両立に取り組んでいます。
\n　3年以上の実務経験の中で培った技術力と問題解決能力を活かし、複雑な課題に対しても革新的なアプローチで最適な解決策を提案・実装してきました。React、Angularなどのモダンフロントエンド技術と、Spring Framework、Djangoといったバックエンドフレームワークを組み合わせ、パフォーマンスと品質を兼ね備えたWebアプリケーションを数多く手がけています。
\n　技術の進化に常にアンテナを張り、新しい知識やスキルの習得に積極的に取り組む姿勢を大切にしています。クリーンなコード設計とベストプラクティスの実践にこだわり、保守性と拡張性の高いシステム開発を心がけています。
\n　チーム開発においては、明確なコミュニケーションを基盤に、メンバーの強みを活かした協働を重視。プロジェクトの成功に向けて、技術面だけでなく、プロセス改善やナレッジ共有にも積極的に貢献しています。
\n　次のキャリアステップでは、これまでの経験と技術力を新たな環境で発揮し、ビジネス価値の創出とチームの成長に貢献したいと考えています。
    `,
    image: "profile.jpg",
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
      technologies: ["Next.js", "Spring Framework", "Django", "Java", "Python"]
    },
    {
      category: "データベース",
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      technologies: ["Oracle Database", "PostgreSQL", "SQLServer"]
    },
    {
      category: "テスト",
      icon: <FaVial className="text-4xl text-navy-600" />,
      technologies: ["JUnit", "Selenium", "Jtest", "JMeter", "Gatling"]
    },
    {
      category: "クラウド & DevOps",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      technologies: ["AWS", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      category: "開発ツール",
      icon: <FaTools className="text-4xl text-gray-700" />,
      technologies: ["Git", "VS Code", "Eclipse", "Android Studio"]
    },
  ],
  
  projects: [
    {
      title: "負荷テスト",
      description: "1万人以上が利用する公共システムへのJMeterによる負荷テストを担当",
      technologies: ["JMeter", "Android Studio", "OpenSSL"],
      image: "/jmeter.png",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    },
    {
      title: "SpringFramework／Angularによる社内向けサンプルアプリの構築",
      description: "生産性向上に向け、社内の開発サンプル構築を担当",
      technologies: ["Angular", "Spring Framework", "PostgreSQL", "Git"],
      image: "/spring_framework.png",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    },
    {
      title: "大学向け物品調達システムの構築",
      description: "長期インターンシップにて、Angular／Djangoでの物品調達システムの構築を担当",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker", "Git"],
      image: "/angular.png",
      link: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    }
  ],
  
  experiences: [
    {
      company: "大阪大学生活協同組合（長期インターンシップ）",
      position: "フルスタック開発者",
      period: "2017年6月 - 2021年3月",
      description: "プログラマとしてシステムエンジニアのもとで大学向けシステム構築を担当。フルスタックでの開発経験を積みました。"
    },
    {
      company: "大阪大学工学研究科 博士前期課程",
      position: "研究室所属",
      period: "2021年4月 - 2023年3月",
      description: "反実仮想機械学習／公平性など、機械学習の基礎研究に取り組みました。"
    },
    {
      company: "",
      position: "パフォーマンスエンジニア",
      period: "2023年4月 - 現在",
      description: "公共事業システム向けにパフォーマンステストやデータベースチューニングを担当。"
    }
  ],
  certifications: [
    {
      name: "ORACLE MASTER Silver DBA 2019",
      issuer: "Oracle",
      date: "2025年1月",
      description: "Oracle Databaseの基本的な知識と管理スキルを証明する資格",
      credentialId: "OCS-24680",
      url: "https://www.oracle.com/jp/education/certification/m",
      icon: <FaCertificate className="text-2xl text-yellow-600" />
    },
    {
      name: "データベーススペシャリスト",
      issuer: "IPA（情報処理推進機構）",
      date: "2024年10月",
      description: "データベース設計・構築・運用に関する高度なスキルを証明する国家資格",
      credentialId: "DB-12345",
      icon: <FaDatabase className="text-2xl text-blue-500" />
    },
    {
      name: "応用情報技術者",
      issuer: "IPA（情報処理推進機構）",
      date: "2024年4月",
      description: "ITエンジニアとして応用的知識・技能を有することを証明する国家資格",
      credentialId: "AP-67890",
      icon: <FaAward className="text-2xl text-green-500" />
    },
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2021年5月",
    //   description: "AWSクラウドインフラストラクチャの設計と実装に関する知識を証明する資格",
    //   credentialId: "AWS-13579",
    //   url: "https://aws.amazon.com/certification/",
    //   icon: <FaCloud className="text-2xl text-orange-500" />
    // }
  ],
  
  contact: {
    headline: "お問い合わせ",
    description: "プロジェクトの相談やご質問などがありましたら、お気軽にご連絡ください。",
    email: "mail@example.com",
    phone: "090-1234-5678"
  }
};

export default portfolioData;