'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-800">质子物理工作室</span>
            </Link>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              主页
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              关于
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              商务联系
            </Link>
            <Link href="/enrollment" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              报名咨询
            </Link>
            <Link href="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              资料获取
            </Link>
            <Link href="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800">
              注册
            </Link>
            <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium text-blue-700 hover:text-blue-800 border border-blue-700 hover:border-blue-800">
              登录
            </Link>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">打开主菜单</span>
              {/* 菜单图标 */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 关闭图标 */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
            主页
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
            关于
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
            商务联系
          </Link>
          <Link href="/enrollment" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
            报名咨询
          </Link>
          <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
            资料获取
          </Link>
          <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-800">
            注册
          </Link>
          <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-blue-800 border border-blue-700 hover:border-blue-800">
            登录
          </Link>
        </div>
      </div>
    </nav>
  );
}
