import type { ReactNode } from "react";


// 定義 Props 的介面
interface LayoutProps {
  children: ReactNode; // ReactNode 包含了 JSX 元素、字串、數字等所有可渲染內容
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600 tracking-wider">MyReactApp (TS)</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#" className="hover:text-indigo-600 transition-colors">首頁</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">關於</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} React + TypeScript + Tailwind v4.
      </footer>
    </div>
  );
};

export default Layout;