import { ObjectT } from '../ObjectT';
import { Timeout } from '../Timeout';
import { FunctionComponent } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

export const App: FunctionComponent = () => {
  return (
    <>
      <nav>
        <Link to={`object`}>Object</Link>
        <Link to={`timeout`}>Timeout</Link>
      </nav>
      <main>
        <Routes>
          <Route path='object' element={<ObjectT />} />
          <Route path='timeout' element={<Timeout />} />
          <Route path='*' element={<Navigate to={`object`} />} />
        </Routes>
      </main>
    </>
  );
};
