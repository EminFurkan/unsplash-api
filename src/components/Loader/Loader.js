import loading from '../../assets/loader.svg';
import './loader.scss'

export const Loader = () => {
  return (
    <div className="loader">
      <img width="100" src={loading} alt="loading" />
    </div>
  );
}