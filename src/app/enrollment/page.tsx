'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EnrollmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: '',
    grade: '',
    region: '',
    period: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">报名咨询</h1>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            欢迎报名质子物理工作室全国中学生物理竞赛暑期复赛刷题班，请填写以下表单进行报名或咨询。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧课程信息 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-6">
                <h2 className="text-xl font-bold mb-2">课程信息</h2>
                <p className="text-blue-100">全国中学生物理竞赛暑期复赛刷题班</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">地点</h3>
                    <p className="text-gray-600">上海</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">时间</h3>
                    <p className="text-gray-600">7.13 - 7.22 (第一期)</p>
                    <p className="text-gray-600">8.03 - 8.12（第二期）</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">上课老师</h3>
                    <p className="text-gray-600">李教授（前加拿大Garriton大学物理系教授）</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">助教</h3>
                    <p className="text-gray-600">周予涵, 冯睿（金牌获得者）</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">上课费用</h3>
                    <p className="text-gray-600">6K</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">入营礼品</h3>
                    <p className="text-gray-600">最新款 CASIO 991CN CW 一台（可定制颜色）</p>
                    <p className="text-gray-600">文创定制衬衫一件</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
              <div className="bg-blue-800 text-white p-6">
                <h2 className="text-xl font-bold mb-2">联系方式</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">东部地区</h3>
                    <p className="text-gray-600">浙江, 江苏, 上海, 福建，广东, 湖南, 湖北, 安徽, 海南, 江西</p>
                    <p className="text-gray-600 font-medium">孟老师：15958500159</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">北部地区</h3>
                    <p className="text-gray-600">陕西, 山西, 天津, 山东, 山东, 河北，河南, 内蒙古</p>
                    <p className="text-gray-600 font-medium">赵老师：13675761866</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">西北、西南地区</h3>
                    <p className="text-gray-600">黑龙江, 辽宁, 吉林, 新疆, 西藏, 重庆, 四川, 青海, 甘肃，宁夏，广西, 云南, 贵州</p>
                    <p className="text-gray-600 font-medium">蒋老师：18858522109</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-500 text-sm">海外、港澳台暂不开放招生</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧报名表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        手机号码 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                        学校 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                        年级 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">请选择</option>
                        <option value="高一">高一</option>
                        <option value="高二">高二</option>
                        <option value="高三">高三</option>
                        <option value="初三">初三</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                        所在地区 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="region"
                        name="region"
                        required
                        value={formData.region}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">请选择</option>
                        <option value="东部">东部地区</option>
                        <option value="北部">北部地区</option>
                        <option value="西北">西北地区</option>
                        <option value="西南">西南地区</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
                        报名期次 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="period"
                        name="period"
                        required
                        value={formData.period}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">请选择</option>
                        <option value="第一期">第一期 (7.13 - 7.22)</option>
                        <option value="第二期">第二期 (8.03 - 8.12)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言或问题
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      提交报名
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-16 w-16 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">报名提交成功！</h2>
                  <p className="mt-2 text-gray-600">
                    感谢您的报名，我们的老师将会尽快与您联系确认详情。
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      返回首页
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-medium text-blue-800 mb-3">报名须知</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>报名成功后，我们的老师将会与您联系确认详情和缴费方式。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>请确保您提供的联系方式准确无误，以便我们能够及时与您取得联系。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>课程开始前，我们会发送详细的课程安排和住宿信息。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>如有任何疑问，请直接联系您所在地区的负责老师。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
