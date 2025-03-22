
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">质子物理工作室</h1>
            <p className="text-2xl md:text-3xl font-light italic mb-8">梦开始的地方</p>
            <p className="text-lg md:text-xl mb-8">专注于中学生物理竞赛培训，助力学子实现物理梦想</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/enrollment" className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                立即报名
              </Link>
              <Link href="/about" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">关于我们</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              质子物理工作室是一家专注于中学生物理竞赛培训的教育机构，由一群热爱物理、热爱教育的专业人士创立。我们致力于为对物理学科有浓厚兴趣的中学生提供高质量的竞赛培训和学术指导，帮助他们在全国中学生物理竞赛中取得优异成绩，为未来的学术道路奠定坚实基础。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              我们的教学团队由经验丰富的物理教授和金牌获得者组成，他们不仅具备深厚的理论知识，还拥有丰富的实践经验和教学技巧。我们的课程设置科学合理，注重理论与实践相结合，通过系统的讲解、严格的训练和个性化的指导，帮助学生全面提升物理思维能力和解题能力。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              在质子物理工作室，我们不仅传授知识，更注重培养学生的科学精神和创新思维。我们相信，物理不仅是一门学科，更是一种思考方式，一种探索世界的方法。我们希望通过我们的努力，让更多的学生爱上物理，在物理的世界里找到属于自己的精彩。
            </p>
          </div>
        </div>
      </section>

      {/* 课程特色 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">课程特色</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业师资</h3>
              <p className="text-gray-600">
                由前加拿大Garriton大学物理系教授李教授领衔，配合金牌获得者助教团队，确保教学质量。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">科学课程</h3>
              <p className="text-gray-600">
                每日上午考试，下午讲评，晚上实验考试/自修/答疑/分享，全方位提升竞赛能力。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">卓越成绩</h3>
              <p className="text-gray-600">
                历年培养10名集训队成员，104枚金牌，136枚银牌，267名学生进入清北。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 课程信息 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">课程信息</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">全国中学生物理竞赛暑期复赛刷题班</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-700 mr-2">📍</span>
                    <div>
                      <span className="font-semibold">地点：</span>上海
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-700 mr-2">🗓️</span>
                    <div>
                      <span className="font-semibold">时间：</span>7.13 - 7.22 (第一期), 8.03 - 8.12（第二期）
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-700 mr-2">👨‍🏫</span>
                    <div>
                      <span className="font-semibold">上课老师：</span>李教授（前加拿大Garriton大学物理系教授）
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-700 mr-2">👨‍🎓</span>
                    <div>
                      <span className="font-semibold">助教：</span>周予涵, 冯睿（金牌获得者）
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-700 mr-2">💰</span>
                    <div>
                      <span className="font-semibold">上课费用：</span>6K
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">日程安排：</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-700 mr-2">⏰</span>
                    <span>8:30 - 11:30 考试</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-700 mr-2">⏰</span>
                    <span>11:30 - 2:00 午餐+休息</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-700 mr-2">⏰</span>
                    <span>2:00 - 5:00 试卷讲评</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-700 mr-2">⏰</span>
                    <span>5:00 - 6:30 晚餐</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-700 mr-2">⏰</span>
                    <span>6:30 - 9:30 实验考试/自修/助教答疑/分享</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-blue-800 font-medium mb-4">入营获得最新款 CASIO 991CN CW 一台，可定制颜色，以及文创定制衬衫一件。</p>
              <Link href="/enrollment" className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                立即报名
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 历年成绩 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">历年成绩</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="overflow-hidden shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">奖项</th>
                  <th className="py-3 px-4 text-left">数量</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">集训队</td>
                  <td className="py-3 px-4">10个</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">金牌</td>
                  <td className="py-3 px-4">104</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">银牌</td>
                  <td className="py-3 px-4">136</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">清北</td>
                  <td className="py-3 px-4">267</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">联系我们</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">东部地区</h3>
              <p className="mb-2">浙江, 江苏, 上海, 福建，广东, 湖南, 湖北, 安徽, 海南, 江西</p>
              <p className="font-medium">孟老师：15958500159</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">北部地区</h3>
              <p className="mb-2">陕西, 山西, 天津, 山东, 山东, 河北，河南, 内蒙古</p>
              <p className="font-medium">赵老师：13675761866</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">西北、西南地区</h3>
              <p className="mb-2">黑龙江, 辽宁, 吉林, 新疆, 西藏, 重庆, 四川, 青海, 甘肃，宁夏，广西, 云南, 贵州</p>
              <p className="font-medium">蒋老师：18858522109</p>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p>海外、港澳台暂不开放招生</p>
          </div>
        </div>
      </section>
    </div>
  );
}
