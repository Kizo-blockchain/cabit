import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Saas/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Saas/BannerSection';
import FeatureSection from '../containers/Charity/FeatureSection';
import BranchSection from '../containers/Charity/BranchSection';
import WorkSection from '../containers/Charity/WorkSection';
import MilestoneBlock from '../containers/Charity/MilestoneBlock';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import DonateSection from '../containers/Charity/DonateSection';
import MapSection from '../containers/Charity/MapSection';
import FundraiserSection from '../containers/Charity/FundraiserSection';
import BlogSection from '../containers/Charity/BlogSection';
import BlogSection2 from '../containers/Charity/BlogSection2';
import ClientBlock from '../containers/Charity/ClientBlock';
import Footer from '../containers/Charity/Footer';

import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import {
  CharityWrapper
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Cabident cabinet dentaire val d'oise" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
        {/* Start charity wrapper section */}
       
         <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
        
            <BannerSection />
            <FeatureSection />
            <BlogSection />
            <BlogSection2 />
            <HumanityBlock />
            <PromotionBlock />
          
          <Footer />
      </ContentWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};

/*

       <BranchSection />
            <WorkSection />
            <MilestoneBlock />

*/
