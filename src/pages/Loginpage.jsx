import { useLocation, useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';
  return (
    <div>
      <h1>LOLIG PAGE</h1>
      {fromPage}
    </div>
  );
};

export default Loginpage;
