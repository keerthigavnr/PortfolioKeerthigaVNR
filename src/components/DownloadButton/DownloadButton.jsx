import React from 'react';
import styles from './DownloadButton.module.css';

export const DownloadButton = ({ resumeUrl }) => {
  return (
    <a 
      href={resumeUrl}
      download="Keerthiga_Resume.pdf"
      className={styles.downloadButton}
      target="_blank"
      rel="noopener noreferrer"
      title="Download Resume"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </a>
  );
};

export default DownloadButton; 