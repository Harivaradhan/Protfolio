import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Knowledge base about Hari Varadhan
  const knowledgeBase = {
    greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    name: ['name', 'who are you', 'what is your name', 'tell me about yourself'],
    skills: ['skills', 'technologies', 'what can you do', 'expertise', 'languages'],
    experience: ['experience', 'years', 'how long', 'background'],
    projects: ['projects', 'work', 'portfolio', 'what have you built'],
    contact: ['contact', 'email', 'phone', 'reach', 'get in touch', 'linkedin'],
    location: ['location', 'where', 'city', 'country', 'based'],
    education: ['education', 'degree', 'university', 'college', 'qualification'],
    default: ['default']
  };

  const responses = {
    name: "I'm Hari Varadhan, a Java Full Stack Developer passionate about creating beautiful and functional digital experiences!",
    skills: "I'm skilled in Java, React, JavaScript, HTML5, CSS3, Node.js, Express, MongoDB, PostgreSQL, and various modern web technologies. I love working on both frontend and backend development!",
    experience: "I have experience in full-stack development with expertise in Java and modern web technologies. I've completed multiple projects and continue to learn and grow in the tech field.",
    projects: "I've worked on various projects including e-commerce platforms, task management apps, weather dashboards, and social media analytics tools. Check out my Projects section to see more!",
    contact: "You can reach me through the Contact section on this website, or connect with me on LinkedIn, GitHub, or Twitter. Feel free to send me a message!",
    location: "I'm based in my city and open to opportunities worldwide!",
    education: "I'm a Java Full Stack Developer with a strong foundation in software development and web technologies.",
    greeting: "Hello! 👋 I'm here to help you learn more about Hari Varadhan. Feel free to ask me anything about his skills, experience, projects, or how to get in touch!",
    default: "I'm not sure about that, but I can tell you about Hari's skills, experience, projects, or how to contact him. What would you like to know?"
  };

  useEffect(() => {
    // Show initial animation
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto greet when chatbot opens for the first time
    if (isOpen && !hasGreeted) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 Welcome to Hari Varadhan's portfolio! I'm here to help you learn more about him. Ask me anything about his skills, experience, projects, or how to get in touch!");
        setHasGreeted(true);
      }, 500);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    // Scroll to bottom when new message is added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'bot', timestamp: new Date() }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user', timestamp: new Date() }]);
  };

  const getResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase().trim();

    // Check for greetings
    if (knowledgeBase.greetings.some(greeting => lowerInput.includes(greeting))) {
      return responses.greeting;
    }

    // Check for name queries
    if (knowledgeBase.name.some(keyword => lowerInput.includes(keyword))) {
      return responses.name;
    }

    // Check for skills queries
    if (knowledgeBase.skills.some(keyword => lowerInput.includes(keyword))) {
      return responses.skills;
    }

    // Check for experience queries
    if (knowledgeBase.experience.some(keyword => lowerInput.includes(keyword))) {
      return responses.experience;
    }

    // Check for projects queries
    if (knowledgeBase.projects.some(keyword => lowerInput.includes(keyword))) {
      return responses.projects;
    }

    // Check for contact queries
    if (knowledgeBase.contact.some(keyword => lowerInput.includes(keyword))) {
      return responses.contact;
    }

    // Check for location queries
    if (knowledgeBase.location.some(keyword => lowerInput.includes(keyword))) {
      return responses.location;
    }

    // Check for education queries
    if (knowledgeBase.education.some(keyword => lowerInput.includes(keyword))) {
      return responses.education;
    }

    return responses.default;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      setTimeout(() => {
        const response = getResponse(inputValue);
        addBotMessage(response);
      }, 500);
      setInputValue('');
      inputRef.current?.focus();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  return (
    <>
      {/* Initial Animation */}
      {showInitialAnimation && (
        <div className="chatbot-initial-animation">
          <div className="animation-bubble">
            <span>👋</span>
            <p>Hi there! I'm here to help!</p>
          </div>
        </div>
      )}

      {/* Chatbot Button */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        {isOpen ? (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">🤖</div>
                <div>
                  <h3>Portfolio Assistant</h3>
                  <p>Ask me about Hari!</p>
                </div>
              </div>
              <button className="chatbot-close" onClick={toggleChatbot}>
                ✕
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-input-form" onSubmit={handleSend}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Hari..."
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-send-btn">
                ➤
              </button>
            </form>
          </div>
        ) : (
          <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
            <span className="chatbot-icon">💬</span>
            <span className="chatbot-pulse"></span>
          </button>
        )}
      </div>
    </>
  );
};

export default Chatbot;




