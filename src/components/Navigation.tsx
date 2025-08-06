import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSkills = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#skills';
    } else {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm p-2 rounded-lg' : ''
    }`}>
      <div className="flex gap-3 flex-wrap justify-end">
        <Link
          to="/"
          className="nav-link text-sm wobble"
        >
          Home
        </Link>
        <button
          onClick={scrollToSkills}
          className="nav-link text-sm wobble"
        >
          Skills
        </button>
        <Link
          to="/projects"
          className="nav-link text-sm wobble"
        >
          Projects
        </Link>
        <a
          href="https://linkedin.com/in/yeshthalapaneni"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-sm wobble"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yeshthalapaneni"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-sm wobble"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1e9L5ki6kJKoOZlmyHHhKNZ9xuO0BzlCF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-sm wobble"
        >
          Résumé
        </a>
        <Link
          to="/connect"
          className="nav-link text-sm wobble"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;