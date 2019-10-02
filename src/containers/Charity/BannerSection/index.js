import React, { Fragment } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Image from 'gatsby-image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        bannerSlides {
          id
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);


  /*

 <HighlightedText className="highlighted_text">
            <strong>NEWS</strong> 1 year. 100 Forever Families.
            <Icon icon={chevronRight} />
          </HighlightedText>

  */

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
         
          <Heading
            content=""
          />
          <Heading
            as="h1"
            content="Cabinet Dentaire pour enfants"
          />
          <Text
            content="Notre cabinet de dentiste pédiatrique prend en charge les soins dentaires courants  exclusivement pour les enfants dès leurs premières dents jusqu’à leur adolescence : dépistage des caries, enseignement du brossage, suivi et soins dans des conditions adaptées 
          "
          />
          <Link className="learn__more-btn" to="/charity">
            <span className="hyphen" />
            <span className="btn_text">Prendre rendez-vous</span>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {data.charityJson.bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image
                    fluid={
                      (slide.thumb_url !== null) | undefined
                        ? slide.thumb_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`Charity slide image ${slide.id}`}
                    className="slide_image"
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
