import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/src/components/UI/Container';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  PostArea,
} from './blogSection.style';

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        posts {
          id
          thumbUrl {
            publicURL
          }
          title
          excerpt
          btnUrl
          btnText
        }
      }
    }
  `);

  return (
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Nos assistantes dentaires" />
          </TitleArea>
        </SectionHeader>
        <PostArea>
          {data.charityJson.posts.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl.publicURL}
              title={item.title}
              excerpt=""
              link={
                <a className="learn__more-btn" href={item.btnUrl}>
                  <span className="hyphen"></span>
                  <span className="btn_text">{item.btnText}</span>
                </a>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;
