import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is demo website about React</p>
      <ul>
        <li>
          <Link to="contacts">Our contacts</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default About;
