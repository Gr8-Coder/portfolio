export const projects = [
    {
        id: 'sphera',
        title: 'Sphera',
        description: 'An AI-powered news-monitoring tool designed for sales teams to stay ahead of the curve.',
        longDescription: 'Sphera automates the process of gathering sales intelligence by monitoring news sources in real-time. It uses FastAPI for a robust backend and SQLite for structured storage, allowing sales professionals to act on the latest market developments instantly.',
        tags: ['FastAPI', 'Python', 'SQLite', 'Automated Intelligence'],
        github: 'https://github.com/Gr8-Coder/Sphera',
        link: 'https://github.com/Gr8-Coder/Sphera',
        features: [
            'Real-time news monitoring via Google News RSS',
            'Automated keyword-based intelligence gathering',
            'Lightweight and fast FastAPI backend',
            'Structured data storage using SQLite'
        ],
        techStack: {
            backend: ['FastAPI', 'Python', 'BeautifulSoup4'],
            database: ['SQLite'],
            automation: ['RSS Feeds', 'Cron Jobs']
        }
    },
    {
        id: 'astra',
        title: 'Astra',
        description: 'A personal finance companion that leverages AI to parse SMS alerts and track spending automatically.',
        longDescription: 'Astra is an advanced personal finance ecosystem that transforms passive transaction data into actionable intelligence. Unlike traditional expense trackers, Astra utilizes local AI agents to monitor spending patterns, budget pressure, and emotional spending habits in real-time. It features a unique "Agent Training" loop where the system learns from user corrections to achieve 95%+ classification accuracy.',
        tags: ['React Native', 'Expo', 'OpenAI', 'Supabase'],
        github: 'https://github.com/Gr8-Coder/Astra',
        link: 'https://github.com/Gr8-Coder/Astra',
        features: [
            'Live AI Agents monitoring net flow, budget risks, and pattern quality.',
            'Automated SMS parsing using GPT-4o models for instant transaction logging.',
            'Dynamic Budget Guard with confidence-based alerts and rebalancing logic.',
            'Investment Analytics with top movers, live balance estimates, and multi-broker integration (e.g., Zerodha).',
            'Categorized spending insights with hierarchical tags (e.g., Streaming, Rent, Travel).',
            'Cross-platform mobile experience built with React Native and Expo.'
        ],
        techStack: {
            frontend: ['React Native', 'Expo', 'TypeScript', 'Lucide Icons'],
            backend: ['Supabase', 'Edge Functions', 'PostgreSQL'],
            ai: ['OpenAI GPT-4o', 'Astra-Local-Intelligence-v1', 'Fine-tuning Loop'],
            styling: ['NativeWind / Tailwind']
        }
    },
    {
        id: 'manthan',
        title: 'Manthan',
        description: 'An internal operating dashboard for tracking sales outreach and distributor performance metrics.',
        longDescription: 'Manthan provides a centralized dashboard for monitoring complex sales operations. It tracks outbound metrics, outreach performance, and distributor data, transforming raw data into actionable insights for leadership teams.',
        tags: ['Next.js', 'FastAPI', 'Pandas', 'Data Visualization'],
        github: 'https://github.com/Gr8-Coder/Manthan-',
        link: 'https://github.com/Gr8-Coder/Manthan-',
        features: [
            'Comprehensive outbound metrics tracking',
            'Distributor performance analysis dashboard',
            'Advanced data processing with Pandas',
            'Modern Next.js frontend with FastAPI backend'
        ],
        techStack: {
            frontend: ['Next.js', 'React', 'Lucide Icons'],
            backend: ['FastAPI', 'Python'],
            data: ['Pandas', 'NumPy'],
            database: ['SQLite']
        }
    },
    {
        id: 'dso-hunter',
        title: 'DSO Hunter',
        description: 'A specialized tool for calculating and tracking Days Sales Outstanding (DSO) through web scraping.',
        longDescription: 'DSO Hunter is a financial efficiency tool that scrapes data to calculate and monitor DSO trends. It helps businesses identify payment bottlenecks and improve cash flow management through a streamlined web interface.',
        tags: ['React', 'Express', 'Cheerio', 'Web Scraping'],
        github: 'https://github.com/Gr8-Coder/dso_hunter',
        link: 'https://github.com/Gr8-Coder/dso_hunter',
        features: [
            'Automated financial data extraction via web scraping',
            'DSO (Days Sales Outstanding) calculation engine',
            'Interactive trends and data visualization',
            'Express-based scraper backend'
        ],
        techStack: {
            frontend: ['React', 'Tailwind CSS', 'Vite'],
            backend: ['Express', 'Node.js'],
            scraping: ['Cheerio', 'Axios'],
            styling: ['Tailwind CSS']
        }
    }
];
