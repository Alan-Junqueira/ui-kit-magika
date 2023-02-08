import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundContent, NotFoundPolygon } from './styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <div className="numbers">
          <span className="left-four">
            <NotFoundPolygon variant="yellow" left={20} top={0} />
            <NotFoundPolygon variant="yellow" left={-30} bottom={43} />
            <NotFoundPolygon variant="blue" right={-30} top={40} />
            <NotFoundPolygon variant="orange" right={15} bottom={-40} />4
          </span>
          <span className="center-zero">0</span>
          <span className="right-four">
            <NotFoundPolygon variant="red" bottom={5} left={40} />
            <NotFoundPolygon variant="yellow" top={40} left={-20} />
            <NotFoundPolygon variant="blue" bottom={45} right={-45} />4
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
