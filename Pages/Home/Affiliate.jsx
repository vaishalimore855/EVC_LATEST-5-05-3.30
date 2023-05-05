import React from 'react'

import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/affiliate-left-blur.svg";
import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/affiliate-right-blur.svg";

//dev: ASSETS
import affiliateImage from '../../assets/img/regular/affiliate.png'; 
// import affiliateImage2 from '../../assets/img/regular/affiliate-text.png'; 
import affiliateImage2 from '../../assets/img/regular/affiliate-Image.png'; 
import LazyLoadImage from '../../Components/Global/LazyImage';
import SectionTitle from '../../Components/Single/SectionTitle';

const Affiliate = () => {
  return (
    <div className="section-gap position-relative">
        <div className="z-n1 position-absolute top-100 start-0 translate-middle-y"> <HeroVectorLeft /> </div>
        <div className="z-n1 position-absolute top-100 end-0 translate-middle-y"> <HeroVectorRight /> </div>

        <div className="container">
          <SectionTitle main="EVC Affiliate" className="text-center" />
          <div className="d-flex d-lg-none justify-content-center">
            <LazyLoadImage src={affiliateImage}  />
          </div>
          <div className="d-none d-lg-flex justify-content-center"style={{height:"580px",width:"90%",margin:"-45px 50px -100px 50px"}}>
            <LazyLoadImage src={affiliateImage2}style={{borderRadius:"10px 10px"}} />
          </div>
          
        </div>
    </div>
  )
}

export default Affiliate;