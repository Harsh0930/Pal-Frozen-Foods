import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import AgricultureOutlined from '@mui/icons-material/AgricultureOutlined';
import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs.js';
import { imageUrl } from '../utils/imageUrl.js';
import ScrollStoryEmbed from '../components/home/ScrollStoryEmbed.jsx';

const facts = [
  ['2013', 'Started', 'A venture of SM Pal Group'],
  ['Haldwani', 'Home base', 'Our own freezing plant in Uttarakhand'],
  ['2 labels', 'Pal Fresh + Frozzo', 'Vegetables and ready-to-cook snacks'],
  ['30+', 'Products', 'From shop packs to kitchen and bulk orders'],
  ['Across India', 'Depot network', 'Lucknow, Bengaluru, Dehradun, Kochi and other metro cities'],
  ['Global', 'Overseas supply', 'Handled through Pal Fresh Global Trading LLC'],
];

const journey = [
  ['01', 'Grow', 'Our farming partners raise vegetables to quality standards agreed before planting.', <AgricultureOutlined aria-hidden="true" />],
  ['02', 'Harvest', 'Crops are picked when ready and sent to our plant without long waits.', <VerifiedOutlined aria-hidden="true" />],
  ['03', 'Freeze', 'At our Haldwani plant, vegetables are cleaned, cut and IQF-frozen so pieces stay loose.', <AcUnitRounded aria-hidden="true" />],
  ['04', 'Deliver', 'Packs travel through our depots to shops, kitchens and distribution partners.', <LocalShippingOutlined aria-hidden="true" />],
];

const reasons = [
  ['Less waste', 'Take out only what you need and keep the rest frozen.'],
  ['Less prep', 'Vegetables arrive cleaned and cut, so cooking starts at the pan.'],
  ['Steady supply', 'Planning with our farming partners helps smooth out seasonal gaps.'],
  ['Even quality', 'Uniform pieces cook the same way, time after time.'],
  ['Simple ingredients', 'Our vegetables are frozen without added preservatives or synthetic colours.'],
  ['Pack sizes that fit', 'Choose shop packs, larger kitchen packs or bulk supply.'],
];

export default function Home() {
  return <main className="home-page">
    <section className="hero home-hero">
      <div className="hero-copy">
        <span className="eyebrow"><i /> FROM UTTARAKHAND, FOR EVERY KITCHEN</span>
        <h1>Pal Frozen Foods: farm-grown frozen vegetables and snacks from Uttarakhand</h1>
        <p>Pal Frozen Foods is a frozen food company based in Haldwani, Uttarakhand, and a venture of SM Pal Group. We grow, freeze and supply vegetables and ready-to-cook snacks for homes, hotels, caterers and bulk buyers across India and overseas, under our own labels Pal Fresh and Frozzo.</p>
        <p>Busy kitchens need food that’s ready when they are. Take a look at the full range, or talk to our team if you’re buying in volume.</p>
        <div className="hero-actions">
          <Button component={Link} to="/products" className="button-primary" variant="contained">Explore the full range <span>↗</span></Button>
          <Link className="underlined-link" to="/contact?tab=distributor">Buying in volume? <span>→</span></Link>
        </div>
        <div className="hero-footnote">Farm-grown. Carefully frozen. Ready when you are.</div>
      </div>
      <div className="hero-visual">
        <Link aria-label="Explore Pal Fresh frozen vegetables" className="hero-split fresh-split" to="/products?brand=pal-fresh">
          <img src={imageUrl('photo-1540420773420-3366772f4999', 1300)} alt="A vibrant bowl of vegetables" />
          <div className="hero-shade" />
          <span className="universe-index">PAL FRESH · VEGETABLES</span>
          <div className="universe-label"><span>FARM TO FREEZER</span><h2>Everyday<br />goodness.</h2><i>Explore the range <ArrowOutwardRounded aria-hidden="true" /></i></div>
        </Link>
        <Link aria-label="Explore Frozzo frozen snacks" className="hero-split frozzo-split" to="/products?brand=frozzo">
          <img src={imageUrl('photo-1630384060421-cb20d0e0649d', 1300)} alt="Golden crispy fries served to share" />
          <div className="hero-shade" />
          <span className="universe-index">FROZZO · SNACKS</span>
          <div className="universe-label"><span>READY TO COOK</span><h2>Good times,<br />on the go.</h2><i>Meet the range <ArrowOutwardRounded aria-hidden="true" /></i></div>
        </Link>
      </div>
    </section>

    <section className="home-facts section-pad" aria-labelledby="home-facts-heading">
      <div className="home-section-intro">
        <span className="eyebrow">A QUICK INTRODUCTION</span>
        <h2 id="home-facts-heading">Pal Frozen Foods<br />at a <em>glance.</em></h2>
      </div>
      <div className="home-facts-grid">
        {facts.map(([value, label, detail]) => <article className="home-fact reveal" key={label}>
          <strong>{value}</strong><h3>{label}</h3><p>{detail}</p>
        </article>)}
      </div>
    </section>

    <ScrollStoryEmbed />

    <section className="home-journey section-pad" aria-labelledby="home-journey-heading">
      <div className="home-journey-heading">
        <span className="eyebrow">FROM THE FIELD TO YOUR FREEZER</span>
        <h2 id="home-journey-heading">How do vegetables get from the field to your freezer?</h2>
        <p>It starts on the farm, not in the factory. We work with farming partners under contract, so we know what’s growing, when it will be ready and how it’s been looked after. That planning helps us freeze crops at their peak and keep supply steady through the year.</p>
      </div>
      <div className="home-journey-grid">
        {journey.map(([number, title, body, icon]) => <article className="home-journey-step reveal" key={number}>
          <span className="home-journey-number">{number}</span><span className="home-journey-icon">{icon}</span>
          <h3>{title}</h3><p>{body}</p>
        </article>)}
      </div>
    </section>

    <section className="home-brands section-pad" aria-labelledby="our-range">
      <div className="home-brands-heading">
        <div><span className="eyebrow">TWO BRANDS, ONE SIMPLE IDEA</span><h2 id="our-range">Meet Pal Fresh<br />and <em>Frozzo.</em></h2></div>
        <p>Good food that’s easy to cook. Pick the range that suits your kitchen.</p>
      </div>
      <div className="brand-cards home-brand-cards">
        <article className="brand-card brand-card-fresh home-brand-card reveal">
          <img src={imageUrl('photo-1518843875459-f738682238a6', 1000)} alt="Freshly harvested peas and vegetables" loading="lazy" />
          <div className="brand-card-content">
            <span>FROZEN VEGETABLES</span><h3>Pal Fresh</h3>
            <p>For a sabzi, pulao or soup without the chopping. Open the bag, cook what you need and put the rest back.</p>
            <ul><li>Green peas, sweet corn and baby corn</li><li>Mixed vegetables and cut beans</li><li>Cauliflower, broccoli, okra and spinach</li><li>Soya chaap and French fries</li></ul>
            <Link to="/products?brand=pal-fresh">See the Pal Fresh range <ArrowOutwardRounded aria-hidden="true" /></Link>
          </div>
          <span className="brand-card-index">01 / PAL FRESH</span>
        </article>
        <article className="brand-card brand-card-frozzo home-brand-card reveal">
          <img src={imageUrl('photo-1573080496219-bb080dd4f877', 1000)} alt="A platter of golden potato snacks" loading="lazy" />
          <div className="brand-card-content">
            <span>FROZEN SNACKS · EST. 2021</span><h3>Frozzo</h3>
            <p>Ready-to-cook and ready-to-eat bites bring Indian flavours and vegetables to quick cravings and party platters.</p>
            <ul><li>Veg, soya and paneer momos</li><li>Spring rolls and veg patties</li><li>Crispy aloo tikki and hash browns</li><li>Samosas and veg Manchurian</li></ul>
            <Link to="/products?brand=frozzo">Meet the Frozzo range <ArrowOutwardRounded aria-hidden="true" /></Link>
          </div>
          <span className="brand-card-index">02 / FROZZO</span>
        </article>
      </div>
    </section>

    <section className="home-reasons section-pad" aria-labelledby="home-reasons-heading">
      <div className="home-section-intro">
        <span className="eyebrow">GOOD FOOD, MADE PRACTICAL</span>
        <h2 id="home-reasons-heading">Why choose<br />Pal Frozen <em>Foods?</em></h2>
        <p>Thoughtful sourcing and freezing can make everyday cooking simpler.</p>
      </div>
      <div className="home-reasons-grid">
        {reasons.map(([title, detail], index) => <article className="home-reason reveal" key={title}>
          <span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p>
        </article>)}
      </div>
    </section>

    <section className="home-buyers section-pad" aria-labelledby="home-buyers-heading">
      <div className="home-section-intro">
        <span className="eyebrow">MADE FOR MORE THAN ONE KIND OF KITCHEN</span>
        <h2 id="home-buyers-heading">Who do<br />we <em>supply?</em></h2>
        <p>From a quick meal at home to a kitchen serving hundreds, we have a range for different needs.</p>
      </div>
      <div className="home-buyer-list">
        <article className="home-buyer reveal"><span>01</span><div><h3>Households and retail shelves</h3><p>Pal Fresh and Frozzo are made for everyday cooking and are sold through stores. If you’re a shopper, ask your local retailer. If you run a store, we’d love to hear from you.</p></div><Link to="/contact">Get in touch <ArrowOutwardRounded aria-hidden="true" /></Link></article>
        <article className="home-buyer reveal"><span>02</span><div><h3>Hotels, restaurants and caterers</h3><p>Institutional packs are larger and built for kitchens that cook at scale. Consistent size, texture and taste make menus easier to plan.</p></div><Link to="/contact?tab=distributor">Discuss supply <ArrowOutwardRounded aria-hidden="true" /></Link></article>
        <article className="home-buyer reveal"><span>03</span><div><h3>Distributors, wholesalers and overseas buyers</h3><p>Bulk orders move through our depots, and international enquiries are handled through Pal Fresh Global Trading LLC. We also showcased our range at Gulfood 2025 in Dubai.</p></div><Link to="/contact?tab=distributor">Start a conversation <ArrowOutwardRounded aria-hidden="true" /></Link></article>
      </div>
    </section>

    <section className="home-group section-pad" aria-labelledby="home-group-heading">
      <div className="home-group-image"><img src={imageUrl('photo-1500382017468-9049fed747ef', 1300)} alt="Green farmland in Uttarakhand" loading="lazy" /></div>
      <div className="home-group-copy">
        <span className="eyebrow">ROOTED IN UTTARAKHAND</span><h2 id="home-group-heading">Part of <em>SM Pal Group.</em></h2>
        <p>Pal Frozen Foods grew out of SM Pal Group, a Haldwani-based business group working in Uttarakhand since 1982. Food is one chapter of that story. The group also works in stone, real estate, car dealerships, healthcare and education.</p>
        <p>For a buyer, that history means you’re dealing with a supplier that plans for the long run.</p>
        <Link className="underlined-link" to="/about">More about our story <span>→</span></Link>
      </div>
    </section>

    <section className="home-faqs section-pad" id="faqs" aria-labelledby="home-faq-heading">
      <div className="home-faq-heading">
        <span className="eyebrow">A FEW THINGS YOU MAY BE WONDERING</span><h2 id="home-faq-heading">Frequently asked<br /><em>questions.</em></h2>
        <Link className="underlined-link" to="/contact?tab=faq">Browse all FAQs <span>→</span></Link>
      </div>
      <div className="home-faq-list">
        {faqs.map((faq, index) => <Accordion key={faq.question} disableGutters elevation={0}>
          <AccordionSummary expandIcon={<ArrowDownwardRounded aria-hidden="true" />} aria-controls={`home-faq-answer-${index}`} id={`home-faq-question-${index}`}>
            <span className="home-faq-question">{faq.question}</span>
          </AccordionSummary>
          <AccordionDetails id={`home-faq-answer-${index}`}>{faq.answer}</AccordionDetails>
        </Accordion>)}
      </div>
    </section>

    <section className="home-contact section-pad" aria-labelledby="contact">
      <div className="home-contact-copy">
        <span className="eyebrow">LET’S TALK SUPPLY</span><h2 id="contact">Talk to Pal<br />Frozen Foods.</h2>
        <p>Want to stock our range, supply your kitchen or become a distribution partner? Tell us what you need, how much and where, and our team will get back to you.</p>
        <Button component={Link} to="/contact" className="button-light">Send an enquiry <span>↗</span></Button>
      </div>
      <div className="home-contact-address"><span className="home-contact-pin"><LocalShippingOutlined aria-hidden="true" /></span><span className="eyebrow">OUR HOME BASE</span><address>Pal Frozen Foods<br />Palam City, Devalchaur, Rampur Road<br />Haldwani - <a href="https://www.wikidata.org/wiki/Q1499" target="_blank" rel="noreferrer">Uttarakhand</a> 263139</address></div>
    </section>
  </main>;
}
