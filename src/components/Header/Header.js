import { useState } from 'react';
import './header.scss';
import lizard from '../../assets/lizard.svg';
import eye from '../../assets/eye.svg';
import inner from '../../assets/eye-inner.svg';

export const Header = ({collections, setQuery}) => {
  const [data, setData] = useState();

  return (
    <nav>
      <span className="logo">
        <img className="lizard" src={lizard} alt="logo" />
        <img className="eye" src={eye} alt="eye" />
        <img className="inner" src={inner} alt="inner" />
      </span>
      <div className="nav-controllers">
        <input
          type="text"
          placeholder="Query"
          onChange={(e) => setData({...data, query: e.target.value})}
          onKeyUp={(e) => e.key === 'Enter' && setQuery(data)}
        />
        <select
          defaultValue="Collections"
          onChange={(e) => setData({...data, collectionId: e.target.value})}
          onKeyUp={(e) => e.key === 'Enter' && setQuery(data)}>
          <option disabled>Collections</option>
          {
            collections.map(collection =>
              <option
                key={collection.id}
                value={collection.id}>
                {collection.title}
              </option>
            )
          }
        </select>
        <span className="box"></span>
      </div>
      <button
        className="btn"
        onClick={() => setQuery(data)}
      >
        SEARCH
      </button>
    </nav>
  );
}