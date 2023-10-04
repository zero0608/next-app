'use client';

import MultiLevelSidebar from './siderBar';

const MainLayout = ({ children }) => (
  <div className="flex min-h-[140px] w-full overflow-x-scroll rounded-lg lg:overflow-visible">
    <MultiLevelSidebar />
    <div className="content-wrapper">{children}</div>
  </div>
);

export default MainLayout;