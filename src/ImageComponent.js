import React from 'react';
import { Col } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox-pro';

export const ImageComponent = ({ src, photos, label, alt, video }) => {
  return (
    <Col
      xs={6}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        border: '2px solid',
        padding: '0 20px'
      }}
    >
      <SimpleReactLightbox>
        <SRLWrapper>
          <div style={{ textAlign: 'center', height: '100%', padding: 20 }}>
            <a href={src}>
              <img src={src} alt={label} style={{ maxWidth: video ? '100%' : '60%', maxHight: '100%', margin: 'auto' }}></img>
            </a>
            <p style={{ margin: '20px 20px 0px 20px', padding: 10, border: '3px solid #000' }}>
              <b>Description: </b>
              {label}
            </p>
          </div>

          <div style={{ display: 'none' }}>
            {photos.map(item => {
              console.log(item.hasOwnProperty('video') && item);
              return item.hasOwnProperty('video') ? (
                <>
                  <img src={item.thumbnail} alt={item.caption} />
                  <video
                    srl_video_thumbnail={item.thumbnail}
                    srl_video_caption="An epic video"
                    srl_video_controls="true"
                    srl_video_autoplay="true"
                    srl_video_muted="true"
                    controls
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <img key={item.caption} src={item.src} alt={item.caption} />
              );
            })}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Col>
  );
};
