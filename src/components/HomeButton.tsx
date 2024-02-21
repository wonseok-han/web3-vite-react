import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        className="button__default fit-width"
        onClick={() => navigate('/')}
      >
        Home
      </button>
    </div>
  );
};

export default HomeButton;
