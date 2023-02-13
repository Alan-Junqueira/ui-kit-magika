import { Link } from 'react-router-dom';
import { Polygon } from '../../components/Polygon';
import { NotFoundContainer, NotFoundContent } from './styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <div className="numbers">
          <span className="left-four">
            <Polygon variant="yellow" left={20} top={0} />
            <Polygon variant="yellow" left={-30} bottom={43} />
            <Polygon variant="blue" right={-30} top={40} />
            <Polygon variant="orange" right={15} bottom={-40} />4
          </span>
          <span className="center-zero">0</span>
          <span className="right-four">
            <Polygon variant="red" bottom={5} left={40} />
            <Polygon variant="yellow" top={40} left={-20} />
            <Polygon variant="blue" bottom={45} right={-45} />4
          </span>
        </div>
        <p>
          Halaman yang anda cari tidak di temukan , untuk kembali ke tombol di
          bawah
        </p>
        <div className="anchor">
          <Link to="/">Back to Homepage</Link>
        </div>
      </NotFoundContent>
    </NotFoundContainer>
  );
};
