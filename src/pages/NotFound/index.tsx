import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundContent, NotFoundPolygon } from './styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <div className="numbers">
          <NotFoundPolygon variant="yellow" top={50} left={-40} />
          <NotFoundPolygon variant="yellow" bottom={100} left={-20} />
          <NotFoundPolygon variant="blue" top={70} left={230} />
          <NotFoundPolygon variant="orange" bottom={0} left={280} />
          <NotFoundPolygon variant="orange" top={40} right={220} />
          <NotFoundPolygon variant="red" bottom={40} right={220} />
          <NotFoundPolygon variant="blue" bottom={50} right={-70} />
          <span className="left-four">4</span>
          <span className="center-zero">0</span>
          <span className="right-four">4</span>
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
