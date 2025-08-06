import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl leading-tight">
              Hello I'm Yeshwanth
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A data science student who loves turn messy data into insights and build models using data-science techniques.
            </p>
            <Link
              to="/projects"
              className="sketch-btn inline-block wobble"
            >
              Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section className="py-16 fade-in">
        <div className="sketch-card max-w-4xl mx-auto">
          <h2 className="text-2xl mb-4">Research Experience</h2>
          <p className="text-lg leading-relaxed">
            In 2022 I published an IEEE paper proposing a Hybrid CatBoost-Correlation model that boosts 
            stock-trend prediction accuracy while reducing overfitting. 
            <a
              href="https://ieeexplore.ieee.org/document/10099547"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline ml-2 font-medium"
            >
              → Read on IEEE Xplore
            </a>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 fade-in">
        <div className="sketch-card max-w-4xl mx-auto">
          <h2 className="text-2xl mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Programming Languages</h3>
              <ul className="space-y-1 text-foreground/80">
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Data Science & ML</h3>
              <ul className="space-y-1 text-foreground/80">
                <li>Pandas, NumPy, Scikit-learn</li>
                <li>TensorFlow, PyTorch</li>
                <li>PySpark</li>
                <li>XGBoost, CatBoost, Random Forest</li>
                <li>Matplotlib, Plotly</li>
                <li>Statistical Analysis</li>
                <li>Apache Airflow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Cloud & Data Engineering</h3>
              <ul className="space-y-1 text-foreground/80">
                <li>AWS, Google Cloud</li>
                <li>Snowflake, dbt</li>
                <li>Oracle Databases, Hive</li>
                <li>Apache Spark, Hadoop</li>
                <li>Docker, Kubernetes</li>
                <li>Git, GitHub</li>
                <li>Tableau, Power BI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center fade-in">
        <div className="space-y-4">
          <p className="text-foreground/80">
            © 2025 Yeshthalapaneni — I'd love to connect with you
          </p>
          <Link
            to="/connect"
            className="sketch-btn inline-block wobble"
          >
            Let's connect
          </Link>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
