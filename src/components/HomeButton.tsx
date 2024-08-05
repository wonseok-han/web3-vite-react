import { useNavigate } from 'react-router-dom';

type HomeButtonProps = {
  href?: string;
};

const HomeButton = ({ href }: HomeButtonProps) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        className="button__container fit-width"
        onClick={() => navigate(href || '/')}
      >
        Home
      </button>
    </div>
  );
};

export default HomeButton;
