import { useEffect } from 'react';
import { useLocation } from 'react-router';

const PageTitle = ({ title }) => {
  const location = useLocation();
  useEffect(() => {
    try {
      document.title = title;
    } catch (error) {
      console.error('Error in title component:', error);
    }
  }, [location, title]);
  return null;
};

export default PageTitle;
