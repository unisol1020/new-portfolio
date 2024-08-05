import { PropsWithChildren } from "react";

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-1">
      <div className="container relative pt-8 max-w-screen-xl px-4">
        {children}
      </div>
    </main>
  );
};

export default ContentLayout;