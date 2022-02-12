import type { NextPage } from 'next';

function Skills() {
  return (
    <div className="container mx-auto border">
      <div className="grid grid-rows-2 grid-cols-4 grid-flow-col">
        <div className="row-span-1 col-span-3 border">
          <h1>[skill] 왼쪽 상단 레이아아웃</h1>
        </div>
        <div className="row-span-1 col-span-3 border">
          <h1>[skill] 왼쪽 하단 레이아아웃</h1>
        </div>
        <div className="row-span-2 col-span-1 border">
          <h1>[skill] 오른쪽 레이아아웃</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
