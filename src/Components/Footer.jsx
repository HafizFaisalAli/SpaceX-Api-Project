import BurakoLogo from '../assets/Media/BurakoSolutions.png';

const Footer = () => {
  return (
    <>
      <footer className=" py-3 text-center footer-shadow">
        <a
          href="https://www.burakosolutions.com/"
          className="d-flex flex-col justify-content-center align-items-center text-decoration-none text-hover"
          target="blank"
        >
          <strong className="font-normal text-lg text-slate-400 hover:text-white">
            Powered by Burako Solutions
          </strong>
          <img src={BurakoLogo} alt="Burako Solutions" width={40} height={40} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
