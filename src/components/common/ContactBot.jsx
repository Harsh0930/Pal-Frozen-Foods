import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ForumRounded from '@mui/icons-material/ForumRounded';

const topics = [
  { id: 'availability', label: 'Where can I buy your products?' },
  { id: 'bulk', label: 'I’m interested in bulk orders' },
  { id: 'team', label: 'How can I reach your team?' },
];

function Reply({ topic }) {
  if (topic === 'availability') {
    return <>Our products are available through stores supplied by our depots. <Link to="/contact?tab=faq">Ask us about availability</Link> near you.</>;
  }
  if (topic === 'bulk') {
    return <>We’d be happy to discuss your requirements. <Link to="/contact?tab=distributor">Tell us about your business</Link> and our team can help.</>;
  }
  return <>You can email us at <a href="mailto:marketing@smpalgroup.com">marketing@smpalgroup.com</a> or call <a href="tel:+919045599277">+91 9045599277</a>.</>;
}

export default function ContactBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const chooseTopic = (topic) => {
    setMessages((current) => [...current, { ...topic, key: current.length, topic: topic.id }]);
  };

  return <div className="contact-bot">
    <section
      id="contact-bot-panel"
      className="contact-bot-panel"
      aria-label="Pal Frozen Foods contact assistant"
      hidden={!open}
    >
      <header className="contact-bot-header">
        <span className="contact-bot-avatar" aria-hidden="true"><ForumRounded /></span>
        <div><strong>Pal Assist</strong><small>Here to help</small></div>
        <button className="contact-bot-close" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
          <CloseRounded aria-hidden="true" />
        </button>
      </header>
      <div className="contact-bot-conversation" aria-live="polite">
        <p className="contact-bot-message">Hi! What can I help you with today?</p>
        {messages.map((message) => <React.Fragment key={message.key}>
          <p className="contact-bot-message contact-bot-user-message">{message.label}</p>
          <p className="contact-bot-message"><Reply topic={message.topic} /></p>
        </React.Fragment>)}
      </div>
      <div className="contact-bot-topics" aria-label="Choose a topic">
        {topics.map((topic) => <button key={topic.id} type="button" onClick={() => chooseTopic(topic)}>{topic.label}</button>)}
      </div>
    </section>
    <button
      className="contact-bot-toggle"
      type="button"
      aria-label={open ? 'Close contact assistant' : 'Open contact assistant'}
      aria-expanded={open}
      aria-controls="contact-bot-panel"
      onClick={() => setOpen((isOpen) => !isOpen)}
    >
      {open ? <CloseRounded aria-hidden="true" /> : <ForumRounded aria-hidden="true" />}
    </button>
  </div>;
}
