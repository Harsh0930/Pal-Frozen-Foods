import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { useBrand, brandNames } from '../context/BrandThemeContext.jsx';
import BrandLogo from '../components/common/BrandLogo.jsx';
import BrandToggle from '../components/products/BrandToggle.jsx';
import ProductTile from '../components/products/ProductTile.jsx';
import ProductDialog from '../components/products/ProductDialog.jsx';
import { products, productBrandInfo } from '../data/products.js';

const productNameFilters = {
  'pal-fresh': [
    { id: 'all', label: 'All products', matches: () => true },
    { id: 'corn', label: 'Corn', matches: (name) => name.includes('corn') },
    { id: 'peas', label: 'Peas', matches: (name) => name.includes('peas') },
    { id: 'carrot', label: 'Carrot', matches: (name) => name.includes('carrot') },
  ],
  frozzo: [
    { id: 'all', label: 'All products', matches: () => true },
    { id: 'potato', label: 'Aloo / potato / fries', matches: (name) => /aloo|potato|fries/.test(name) },
    { id: 'momo', label: 'Momo', matches: (name) => name.includes('momo') },
    { id: 'other', label: 'Other', matches: (name) => !/aloo|potato|fries|momo/.test(name) },
  ],
};

export default function ProductsPage() {
  const { brand, setBrand } = useBrand();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [nameFilter, setNameFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const requestedBrand = searchParams.get('brand');
  useEffect(() => {
    if (requestedBrand === 'pal-fresh' || requestedBrand === 'frozzo') {
      setBrand(requestedBrand);
      setQuery('');
      setNameFilter('all');
    }
  }, [requestedBrand, setBrand]);
  const filters = productNameFilters[brand];
  const activeFilter = filters.find((filter) => filter.id === nameFilter);
  const listing = products.filter((item) => item.brand === brand)
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .filter((item) => activeFilter.matches(item.name.toLowerCase()));
  const switchBrand = (value) => {
    setBrand(value);
    setQuery('');
    setNameFilter('all');
    setSearchParams({ brand: value }, { replace: true });
  };
  return <main className={`products-page products-${brand}`}>
    <section className="products-hero">
      <div className="products-hero-copy"><span className="eyebrow">A GOOD PLACE TO START</span><h1>Meet your<br /><em>new favourites.</em></h1><p>Good things for the everyday, the together, and everything in between.</p></div>
      <div className="products-hero-deco"><BrandLogo brand={brand} className="products-hero-logo" /><small>{brand === 'pal-fresh' ? 'NATURE, READY WHEN YOU ARE' : 'GOOD TIMES, STRAIGHT FROM THE FREEZER'}</small></div>
    </section>
    <div className="catalog">
      <div className="catalog-switch"><BrandToggle brand={brand} onChange={switchBrand} /><span>Two little worlds, one very good freezer.</span></div>
      <section className="catalog-intro">
        <span className="eyebrow">{productBrandInfo[brand].title}</span>
        <p>{productBrandInfo[brand].description}</p>
      </section>
      <div className="catalog-toolbar">
        <label className="search-field"><SearchRounded aria-hidden="true" /><input aria-label="Search products" placeholder="Find something good..." value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>⌘ K</kbd></label>
      </div>
      <div className="catalog-name-filters" role="group" aria-label="Filter products by name">
        <span>Filter by name</span>
        {filters.map((filter) => <button
          key={filter.id}
          type="button"
          className={nameFilter === filter.id ? 'filter-active' : ''}
          aria-pressed={nameFilter === filter.id}
          onClick={() => setNameFilter(filter.id)}
        >{filter.label}</button>)}
      </div>
      <div className="catalog-result"><span>{listing.length} good things to choose from</span><span>{brandNames[brand]} collection</span></div>
      {listing.length > 0 ? <div className="product-grid">{listing.map((item) => <ProductTile product={item} key={item.id} onOpen={setSelected} />)}</div> : <div className="empty-results"><span>⌕</span><h2>No matches just yet.</h2><p>Try another search to find your next favourite.</p><button className="text-link" onClick={() => { setQuery(''); setNameFilter('all'); }}>Clear filters ↗</button></div>}
      <div className="catalog-see-more">
        <a className="see-more-products" href={productBrandInfo[brand].sourceUrl} target="_blank" rel="noreferrer">
          See more products <ArrowOutwardRounded aria-hidden="true" />
        </a>
      </div>
    </div>
    <section className="catalog-note"><AcUnitRounded aria-hidden="true" /><p>Looking for product or packaging details?<br /><b>Contact our team for current specifications.</b></p><Link to="/contact">Get in touch <i><ArrowOutwardRounded aria-hidden="true" /></i></Link></section>
    <ProductDialog product={selected} onClose={() => setSelected(null)} />
  </main>;
}
