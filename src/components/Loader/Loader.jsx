

import { RevolvingDot } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

 const Loader = () => {
    return (
      <LoaderStyle>
       <RevolvingDot
  height="100"
  width="100"
  radius="6"
  color="#4fa94d"
  secondaryColor=''
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
      </LoaderStyle>
    );
  };

export default Loader;
