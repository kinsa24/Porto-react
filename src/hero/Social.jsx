import "./social.css";

export const Social = () => {
  return (
    <div className="social-container">
      {/* <a
        href="https://www.linkedin.com/in/muhammad-muhajirin-chinsa-143b73344/"
        target="_blank"
        rel="noreferrer"
        className="social-link"
        title="LinkedIn"
        aria-label="Visit LinkedIn profile"
      >
        <i className="ri-linkedin-box-fill"></i>
      </a>

      <a
        href="https://github.com/kinsa24"
        target="_blank"
        rel="noreferrer"
        className="social-link"
        title="GitHub"
        aria-label="Visit GitHub profile"
      >
        <i className="ri-github-fill"></i>
      </a>

      <a
        href="https://www.instagram.com/kinsaaaa_/"
        target="_blank"
        rel="noreferrer"
        className="social-link"
        title="Instagram"
        aria-label="Visit Instagram profile"
      >
        <i className="ri-instagram-fill"></i>
      </a>

      <a
        href="mailto:muhkinsa081924@gmail.com"
        className="social-link"
        title="Send Email"
        aria-label="Send email"
      >
        <i className="ri-mail-line"></i>
      </a> */}

      <a
  href="/cv" 
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
  title="View CV"
  aria-label="View CV"
>
<i className="ri-file-text-line"></i>
</a>

<a
  href="https://sertifikatpage.netlify.app/"
  target="_blank"
  rel="noreferrer"
  className="social-link"
  title="Certificates"
  aria-label="View certificates"
>
  <i className="ri-award-fill"></i>
</a>

    </div>
  );
};
