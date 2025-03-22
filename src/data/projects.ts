const PROJECTS: {
    name: string
    description: string
    techStack: string
    previewImage: string
    repoUrl: string
  }[] = [
    {
      name: 'AI Agent Dashboard',
      description: 'Automated Query Generation and Information Extraction',
      techStack: 'Streamlit, LangChain, Groq API, SerpAPI, Pandas, Google Sheets API',
      previewImage: '/dashboard.png',
      repoUrl: 'https://github.com/TanyaSingh103/AI-Agent-Dashboard',
    }, 
    {
      name: 'WellNest',
      description: 'Personal Well-Being Application',
      techStack: 'Flutter (Dart), Firebase',
      previewImage: '/wellnest.jpg',
      repoUrl: 'https://github.com/TanyaSingh103/WellNest',
    },
    {
      name: 'PlagiarismCheck',
      description: 'Machine learning-based code plagiarism detection tool',
      techStack: 'Scikit-learn, Imbalanced-learn, Numpy, Pandas',
      previewImage: '/plagcheck.png',
      repoUrl: 'https://github.com/TanyaSingh103/PlagiarismCheck',
    },
    {
      name: 'ProFolio',
      description: 'Drag and Drop Portfolio Builder for Artistic Professionals',
      techStack: 'React, Nhost, GraphQL, html2canvas, jsPDF',
      previewImage: '/profolio.png',
      repoUrl: 'https://github.com/Navya-Verma11/Profolio',
    }
  ]
  
  export default PROJECTS