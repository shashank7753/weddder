// import React from "react";
// import { Route } from 'react-router-dom';
// import CollectionPage from '../collection/collection.component';
// import CollectionOverview from '../../components/collection-overview/collection-overview.component';

// const AboutPage= ({ match }) => {
//      return (
//        <div className="about-page">
//         <h2>About Us</h2>
//          <p>Welcome to our website! We are dedicated to providing...</p>
//          <Route exact path={`${match.path}`} component={CollectionOverview} />
//          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//        </div>
//      );
// }

// export default AboutPage;
import React from "react";
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const AboutPage = ({ match }) => {
  return (
    <div className="about-page">
      <h2>About Photophenix</h2>
      <p>Welcome to Photophenix, your premier destination for exquisite photography experiences. We pride ourselves on being more than just a website - we are your gateway to capturing life's most cherished moments in stunning detail. Specializing in destination photoshoots for a myriad of occasions including weddings, corporate events, tourism ventures, and beyond, we bring forth a seamless fusion of artistry and professionalism.</p>
      <p>Our HTML-based platform serves as a digital canvas, meticulously designed to showcase the unparalleled beauty and diversity of our photography services. With a commitment to excellence ingrained in every pixel, we aim to transcend mere imagery, crafting timeless narratives that resonate with authenticity and passion.</p>
      <p>Whether you're exchanging vows against a breathtaking sunset backdrop, orchestrating a corporate retreat amidst nature's grandeur, or seeking to immortalize the essence of a tourist hotspot, Photophenix stands ready to turn your vision into reality.</p>
      <p><strong>Why choose Photophenix?</strong></p>
      <ul>
        <li><strong>Tailored Experiences:</strong> We understand that every event is unique. Our team works closely with clients to curate personalized photoshoot experiences that reflect individual preferences and aspirations.</li>
        <li><strong>Exceptional Quality:</strong> From composition to editing, we adhere to the highest standards of craftsmanship. Each photograph is a testament to our unwavering dedication to excellence.</li>
        <li><strong>Global Reach:</strong> With a network of skilled photographers spanning the globe, we bring a global perspective to your local or international events, ensuring that no moment goes unnoticed.</li>
        <li><strong>Seamless Booking:</strong> Our user-friendly interface simplifies the booking process, allowing you to reserve your photoshoot with ease and convenience.</li>
      </ul>
      <p>Join us at Photophenix and embark on a journey where every click encapsulates the magic of the moment. Let us transform your dreams into tangible memories, one frame at a time.</p>
      {/* Assuming CollectionOverview and CollectionPage components are used for other purposes */}
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default AboutPage;
