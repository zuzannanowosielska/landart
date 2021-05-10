import React from 'react';
import { Col } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox-pro';

import styles from './page.module.css';

export const ImageComponent = ({ src, photos, label, video }) => {
  return (
    <Col md={6} xs={12} className={styles.element}>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div style={{ textAlign: 'center', height: '100%', padding: '20px 60px', justifyContent: 'center' }}>
            <a href={src}>
              <img src={src} alt={label} style={{ maxWidth: video ? '100%' : '80%', maxHeight: '100%', margin: 'auto' }}></img>
            </a>
            <p className={styles.description}>
              <b>{label}</b>
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
