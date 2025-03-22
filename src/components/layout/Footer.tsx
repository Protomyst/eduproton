import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">质子物理工作室</h3>
            <p className="text-gray-300 mb-4">梦开始的地方</p>
            <p className="text-gray-300">eduproton.me</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-300">
              <li>东部地区：孟老师 15958500159</li>
              <li>北部地区：赵老师 13675761866</li>
              <li>西北、西南：蒋老师 18858522109</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="text-gray-300 hover:text-white">
                  报名咨询
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  资料获取
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  商务联系
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© {new Date().getFullYear()} 质子物理工作室. 保留所有权利.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              隐私政策
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
