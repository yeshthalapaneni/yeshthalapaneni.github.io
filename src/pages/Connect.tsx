import { useState } from 'react';
import Layout from '../components/Layout';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Note: Replace with your actual Formspree endpoint
    const response = await fetch('https://formspree.io/f/your-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Failed to send message. Please try again or email me directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl mb-6">
              Let's work together!
            </h1>
            <p className="text-xl text-foreground/80">
              I'm always interested in new opportunities and collaborations. 
              Drop me a message and let's discuss how we can work together.
            </p>
          </div>

          <div className="sketch-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(Optional) Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="sketch-btn wobble text-lg px-8 py-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl mb-8">
              Or connect with me directly
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://linkedin.com/in/yeshthalapaneni"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn wobble"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yeshthalapaneni"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn wobble"
              >
                GitHub
              </a>
              <a
                href="mailto:yeshthalapaneni@gmail.com"
                className="sketch-btn wobble"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;