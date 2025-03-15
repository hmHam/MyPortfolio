import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools, FaCertificate, FaAward } from 'react-icons/fa';
import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  name: "hmHam",
  title: "システムエンジニア",
  heroDescription: "公共事業システム向けにパフォーマンステストやデータベースチューニングをしています。趣味でモダンなWebアプリ開発もしています。",
  
  socials: {
    github: "https://github.com/hmHam",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://x.com/Cv2TVG32Qf20346",
    email: "hoge@example.com"
  },
  
  about: {
    title: "私について",
    description: `
      フロントエンドとバックエンドの両方の経験を持つシステムエンジニアです。
      ユーザー中心の設計とスケーラブルなアーキテクチャに焦点を当てて、複雑な問題を解決するための革新的なソリューションを開発しています。
      
      3年以上の実務経験を持ち、React、Angular、Spring Framework、Djangoなどの最新技術を活用して、
      高品質なWebアプリケーションを開発してきました。
      
      常に新しい技術や方法論を学ぶことに熱心で、クリーンなコードとベストプラクティスを重視しています。
      チームでの協力を大切にし、明確なコミュニケーションを心がけています。
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
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      technologies: ["Oracle Database", "PostgreSQL", "SQLServer"]
    },
    {
      category: "テスト",
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
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
      company: "",
      position: "パフォーマンスエンジニア",
      period: "2023年4月 - 現在",
      description: "公共事業システム向けにパフォーマンステストやデータベースチューニングを担当。"
    },
    {
      company: "大阪大学工学研究科 博士前期課程",
      position: "研究室所属",
      period: "2021年4月 - 2023年3月",
      description: "（）／公平性など、機械学習の基礎研究に取り組みました。"
    },
    {
      company: "大阪大学生活協同組合（長期インターンシップ）",
      position: "フルスタック開発者",
      period: "2017年6月 - 2021年3月",
      description: "プログラマとしてシステムエンジニアのもとで大学向けシステム構築を担当。フルスタックでの開発経験を積みました。"
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