import React from 'react';
import { Link } from 'react-router-dom';
import { Polygon } from '../../components/Polygon';
import { NotFoundContainer, NotFoundContent } from './styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <div className="numbers">
          <Polygon variant="yellow" top={50} left={-40} />
          <Polygon variant="yellow" bottom={100} left={-20} />
          <Polygon variant="blue" top={70} left={230} />
          <Polygon variant="orange" bottom={0} left={280} />
          <Polygon variant="orange" top={40} right={220} />
          <Polygon variant="red" bottom={40} right={220} />
          <Polygon variant="blue" bottom={50} right={-70} />
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
