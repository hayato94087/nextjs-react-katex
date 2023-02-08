import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Home = () => {
  return (
    <>
      <InlineMath>\int_0^\infty x^2 dx</InlineMath>
    </>
  );
};

export default Home;
