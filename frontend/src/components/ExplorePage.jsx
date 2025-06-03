import { useParams, useLocation } from 'react-router-dom';

const ExplorePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <h1>Explore {product?.name || `ID ${id}`}</h1>
     
    </div>
  );
};

export default ExplorePage;
