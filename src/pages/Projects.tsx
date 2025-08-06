import Layout from '../components/Layout';

const Projects = () => {
  const projects = [
    {
      title: "AI Waitress – Voice-Powered Restaurant Order Assistant",
      linkedinUrl: "https://www.linkedin.com/in/yeshthalapaneni/details/projects/ai-waitress",
      description: "Built & deployed a multi-threaded FastAPI service that answers restaurant phone calls, converts speech to text (Silero VAD), routes the transcript through a prompt-tuned LLaMA 3.1 model, speaks the reply via Kokoro TTS and updates the live POS. Result: <15 s average call handling and smoother order flow."
    },
    {
      title: "Anti-Money-Laundering Detection System (AMLDS)",
      linkedinUrl: "https://www.linkedin.com/in/yeshthalapaneni/details/projects/amlds",
      description: "Processed 31 M synthetic banking transactions, engineered velocity & geo-movement features and trained Random Forest/XGBoost models to flag suspicious activity. Achieved high precision while slashing false positives, supporting compliance teams."
    },
    {
      title: "Sales Prediction with Machine Learning",
      linkedinUrl: "https://www.linkedin.com/in/yeshthalapaneni/details/projects/sales-prediction-ml",
      description: "Forecasted daily retail sales by cleaning noisy data, generating time-series features and comparing Linear Reg., Random Forest and XGBoost regressors. Top model cut MAE by 20 %. Visualisations show actual vs. predicted trends for planners."
    },
    {
      title: "Contract Opportunities Data Analysis (2020 – 2023)",
      linkedinUrl: "https://www.linkedin.com/in/yeshthalapaneni/details/projects/contract-opps",
      description: "Cleaned and explored USA federal contract JSON feeds, uncovering agency-specific posting spikes and seasonal trends. Delivered clear matplotlib/seaborn visuals to guide bidders on timing and demand."
    },
    {
      title: "Yelp Dataset Analysis & Business Insights",
      linkedinUrl: "https://www.linkedin.com/in/yeshthalapaneni/details/projects/yelp-analysis",
      description: "Mined Yelp's public dataset for sentiment and popularity drivers. Used TextBlob to score reviews, then plotted category trends and city-level sentiment, giving restaurateurs data-backed strategy cues."
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl mb-6">
            Projects
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A collection of data science and AI projects that demonstrate my experience 
            in machine learning, big data processing, and real-world problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="sketch-card fade-in">
              <h3 className="text-2xl mb-4">
                {project.title}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn wobble text-sm"
                >
                  Read on LinkedIn →
                </a>
                <span className="text-sm text-muted-foreground">
                  LinkedIn Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note about other projects */}
        <div className="text-center mt-16 fade-in">
          <div className="sketch-card max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80">
              More projects coming soon! Check back later or connect with me to discuss 
              other work I've been involved in.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;