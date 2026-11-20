import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Dialog, DialogContent, IconButton, TextField } from '@mui/material';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { faqs } from '../data/faqs.js';
import { positions } from '../data/careers.js';
export default function ContactPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const tabNames = ['General inquiry', 'FAQs', 'Distributor', 'Careers'];
  const tabValues = ['general', 'faq', 'distributor', 'careers'];
  const requested = new URLSearchParams(location.search).get('tab');
  const activeTab = Math.max(0, tabValues.indexOf(requested));
  const setTab = (index) => navigate(`/contact?tab=${tabValues[index]}`, { replace: true });
  const [faqSearch, setFaqSearch] = useState('');
  const [faqCategory, setFaqCategory] = useState('All topics');
  const [notice, setNotice] = useState('');
  const [job, setJob] = useState(null);
  const [department, setDepartment] = useState('All departments');
  const sendForm = (event, success) => {
    event.preventDefault();
    setNotice(success);
    event.currentTarget.reset();
    window.setTimeout(() => setNotice(''), 5000);
  };
  const filteredFaqs = faqs.filter((faq) => (faqCategory === 'All topics' || faq.category === faqCategory) && `${faq.question} ${faq.answer}`.toLowerCase().includes(faqSearch.toLowerCase()));
  const filteredPositions = positions.filter((position) => department === 'All departments' || department === position.department);
  return <main className="contact-page">
    <section className="contact-hero"><span className="eyebrow">WE’RE ALL EARS</span><h1>Let’s talk about<br /><em>the good stuff.</em></h1><p>A question, an idea, or a new adventure? We’re glad you’re here.</p></section>
    <div className="contact-tabs" role="tablist" aria-label="Contact topics">{tabNames.map((name, index) => <button key={name} role="tab" aria-selected={activeTab === index} className={activeTab === index ? 'tab-active' : ''} onClick={() => setTab(index)}>{name}<span>0{index + 1}</span></button>)}</div>
    <div className="contact-content" role="tabpanel">
      {activeTab === 0 && <div className="contact-general">
        <div className="contact-intro"><span className="eyebrow">SAY HELLO</span><h2>We’d love to<br /><em>hear from you.</em></h2><p>Fill in a few details and our team will be in touch as soon as possible.</p>
          <div className="contact-detail"><span><EmailOutlined aria-hidden="true" /></span><div><small>EMAIL US</small><a href="mailto:hello@palfrozenfoods.com">hello@palfrozenfoods.com</a></div></div>
          <div className="contact-detail"><span><LocationOnOutlined aria-hidden="true" /></span><div><small>OUR HOME BASE</small><p>India · Reach out for office and plant details</p></div></div>
          <div className="contact-detail"><span><AccessTimeOutlined aria-hidden="true" /></span><div><small>WHEN WE’RE AROUND</small><p>Monday–Saturday, 9:30 am–6:00 pm IST</p></div></div>
        </div>
        <form className="form-card" onSubmit={(event) => sendForm(event, 'Thanks for reaching out. We’ll be in touch soon.')}>
          <div className="form-card-head"><span className="eyebrow">GENERAL ENQUIRY</span><span>01 / 04</span></div>
          <div className="form-grid"><TextField label="Your name" name="name" required fullWidth /><TextField label="Email address" name="email" type="email" required fullWidth /><TextField label="Phone number" name="phone" type="tel" fullWidth /><TextField label="Subject" name="subject" required fullWidth /></div>
          <TextField label="Tell us a little more" name="message" required multiline minRows={4} fullWidth />
          <button className="button-primary form-submit" type="submit">Send your message <span>↗</span></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
          <small className="form-privacy">By sending this, you agree to our <Link to="/privacy-policy">privacy policy</Link>.</small>
        </form>
      </div>}
      {activeTab === 1 && <section className="faq-section">
        <div className="tab-intro"><span className="eyebrow">THE LITTLE THINGS, ANSWERED</span><h2>Good questions.<br /><em>Good answers.</em></h2><p>Can’t find what you’re looking for? <a href="mailto:hello@palfrozenfoods.com">Just ask us ↗</a></p></div>
        <div className="faq-controls"><label className="search-field"><SearchRounded aria-hidden="true" /><input aria-label="Search FAQs" placeholder="What are you wondering?" value={faqSearch} onChange={(event) => setFaqSearch(event.target.value)} /></label><div className="faq-categories">{['All topics', ...new Set(faqs.map((faq) => faq.category))].map((item) => <button key={item} className={faqCategory === item ? 'filter-active' : ''} onClick={() => setFaqCategory(item)}>{item}</button>)}</div></div>
        <div className="faq-list">{filteredFaqs.map((faq) => <Accordion key={faq.question} disableGutters elevation={0}><AccordionSummary expandIcon={<span className="accordion-icon">+</span>}><span className="faq-category">{faq.category}</span><strong>{faq.question}</strong></AccordionSummary><AccordionDetails>{faq.answer}</AccordionDetails></Accordion>)}
          {filteredFaqs.length === 0 && <p className="no-faqs">No questions match that search. Try another term.</p>}</div>
      </section>}
      {activeTab === 2 && <section className="distributor-section">
        <div className="tab-intro"><span className="eyebrow">LET’S GROW, TOGETHER</span><h2>Good things<br /><em>travel well.</em></h2><p>Bring Pal Fresh and Frozzo to your customers, with a team that’s right there with you.</p><div className="partner-benefits"><span>Strong dual-brand demand</span><span>Cold-chain marketing support</span><span>A partnership built to grow</span></div></div>
        <form className="form-card" onSubmit={(event) => sendForm(event, 'Thanks for your interest. Our partnerships team will get in touch.')}>
          <div className="form-card-head"><span className="eyebrow">TELL US ABOUT YOUR BUSINESS</span><span>03 / 04</span></div>
          <div className="form-grid"><TextField label="Applicant / firm name" name="firm" required fullWidth /><TextField label="City & state" name="location" required fullWidth />
            <label className="select-field">Business type<select name="business" required defaultValue=""><option value="" disabled>Select one</option><option>Super Stockist</option><option>Distributor</option><option>HoReCa Supplier</option><option>Retailer</option></select></label>
            <TextField label="Cold storage capacity (sq. ft. / tons)" name="capacity" fullWidth /><TextField label="Distribution fleet" name="fleet" fullWidth /><TextField label="Email address" name="email" type="email" required fullWidth /></div>
          <TextField label="Anything else we should know?" name="message" multiline minRows={3} fullWidth />
          <button className="button-primary form-submit" type="submit">Start a conversation <span>↗</span></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </section>}
      {activeTab === 3 && <section className="careers-section">
        <div className="careers-intro"><span className="eyebrow">A PLACE TO DO GOOD WORK</span><h2>Bring your whole<br /><em>good self.</em></h2><p>Good food is a team effort. If you like making things better, we might just get along.</p></div>
        <div className="perks-row"><div><b>Food innovation</b><small>Make everyday food more joyful.</small></div><div><b>Cold-chain logistics</b><small>Move good things with care.</small></div><div><b>Sales & marketing</b><small>Help good brands find their people.</small></div></div>
        <div className="jobs-header"><div><span className="eyebrow">OPEN DOORS</span><h3>Find your next thing.</h3></div><select aria-label="Filter by department" value={department} onChange={(event) => setDepartment(event.target.value)}><option>All departments</option>{[...new Set(positions.map((position) => position.department))].map((item) => <option key={item}>{item}</option>)}</select></div>
        <div className="job-list">{filteredPositions.map((position) => <article className="job-row" key={position.title}><div><span>{position.department} · {position.location}</span><h4>{position.title}</h4></div><button onClick={() => setJob(position)}>Apply now <b>↗</b></button></article>)}</div>
      </section>}
    </div>
    <Dialog open={Boolean(job)} onClose={() => setJob(null)} maxWidth="sm" fullWidth PaperProps={{ className: 'job-dialog' }}><DialogContent>
      <IconButton className="dialog-close" aria-label="Close application" onClick={() => setJob(null)}>×</IconButton>
      {job && <form className="application-form" onSubmit={(event) => { sendForm(event, 'Thanks for applying. Our team will be in touch if there’s a good fit.'); setJob(null); }}>
        <span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Apply for <em>{job.title}</em></h2><p>{job.department} · {job.location}</p>
        <TextField label="Your name" name="name" required fullWidth /><TextField label="Email address" name="email" type="email" required fullWidth /><TextField label="Years of experience" name="experience" type="number" inputProps={{ min: 0 }} fullWidth />
        <label className="upload-field">Resume <input name="resume" type="file" accept=".pdf,.doc,.docx" /><small>PDF or Word document</small></label>
        <button className="button-primary form-submit" type="submit">Send your application ↗</button>
      </form>}
    </DialogContent></Dialog>
  </main>;
}
