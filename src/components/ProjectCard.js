import React from "react";
import "./ProjectCardStyles.css";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Social Media -</h3>
          <span className="bar"></span>
          <p className="btc">DYSM</p>
          <p>- React -</p>
          <p>- Router Dom -</p>
          <p>- Authorization -</p>
          <p>- sdänkdsö -</p>

          <a href="https://dysm-social.netlify.app" target="blank">
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="card">
          <h3>- Online Kaufen -</h3>
          <span className="bar"></span>
          <p className="btc">SHOPBERLIN</p>
          <p>- Firebase -</p>
          <p>- ProductPage -</p>
          <p>- Tailwind CSS -</p>
          <p>- Responsive Design -</p>
          <a href="https://dysm-social.netlify.app" target="blank">
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="card">
          <h3>- Product Werbung -</h3>
          <span className="bar"></span>
          <p className="btc">HERBALIFE_71</p>
          <p>- GraphQL -</p>
          <p>- Bootstrap -</p>
          <p>- Carousel -</p>
          <p>- Form Fields -</p>
          <a href="https://dysm-social.netlify.app" target="blank">
            <button className="btn">Go to Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
