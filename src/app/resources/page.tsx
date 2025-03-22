import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">资料获取</h1>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            质子物理工作室为学员提供丰富的学习资料，帮助您更好地备战物理竞赛。
          </p>
        </div>

        {/* 资料分类 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-6">
              <h2 className="text-xl font-bold">竞赛真题</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                包含历年全国中学生物理竞赛初赛、复赛真题及详细解析，帮助学生熟悉竞赛题型和难度。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2020-2024年全国初赛真题</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2020-2024年全国复赛真题</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>历年省级赛区真题精选</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                登录后下载
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-6">
              <h2 className="text-xl font-bold">教学讲义</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                由资深教师团队精心编写的教学讲义，涵盖物理竞赛各个知识点，深入浅出，易于理解。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>力学专题讲义</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>电磁学专题讲义</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>热学与近代物理讲义</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                登录后下载
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-6">
              <h2 className="text-xl font-bold">实验指导</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                物理竞赛实验题解析与技巧指导，帮助学生掌握实验操作方法和数据处理技巧。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>实验基本技能指南</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>历年实验题解析</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>数据处理方法详解</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                登录后下载
              </button>
            </div>
          </div>
        </div>

        {/* 资料预览 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">资料预览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">力学专题讲义（节选）</h3>
              <div className="prose prose-sm max-w-none">
                <p>
                  <strong>牛顿第二定律的应用</strong>
                </p>
                <p>
                  在解决力学问题时，牛顿第二定律是最基本也是最重要的工具。对于质点系统，我们需要：
                </p>
                <ol>
                  <li>确定研究对象</li>
                  <li>分析受力情况</li>
                  <li>建立坐标系</li>
                  <li>列写方程</li>
                  <li>求解方程</li>
                </ol>
                <p>
                  下面我们通过一个例题来说明牛顿第二定律的应用方法...
                </p>
              </div>
              <div className="mt-4 text-blue-700 font-medium">
                <Link href="/register">注册查看完整内容</Link>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2023年全国复赛真题解析（节选）</h3>
              <div className="prose prose-sm max-w-none">
                <p>
                  <strong>问题1：带电粒子在电磁场中的运动</strong>
                </p>
                <p>
                  一个带电粒子在匀强电场和匀强磁场的共同作用下运动。已知电场强度为E，方向沿z轴正方向；磁场强度为B，方向沿x轴正方向。
                </p>
                <p>
                  (1) 若粒子初速度为v₀，方向沿y轴正方向，求粒子的运动轨迹方程。
                </p>
                <p>
                  (2) 若粒子初速度为v₀，方向与y轴正方向成θ角，求粒子的运动轨迹方程。
                </p>
                <p>
                  解析：对于第一问，我们可以从牛顿第二定律出发...
                </p>
              </div>
              <div className="mt-4 text-blue-700 font-medium">
                <Link href="/register">注册查看完整内容</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 学员专享资料 */}
        <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">学员专享资料</h2>
          <p className="text-gray-700 mb-6">
            报名参加我们的课程，可以获得以下专享资料：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-700 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-medium">内部题库：</span>
                包含数千道精选题目，按难度和知识点分类，配有详细解析。
              </p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-700 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-medium">专题讲解视频：</span>
                由金牌教师团队录制的专题讲解视频，深入浅出，易于理解。
              </p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-700 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-medium">一对一辅导资料：</span>
                根据学生个人情况定制的学习计划和辅导材料。
              </p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-blue-700 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-medium">模拟考试题：</span>
                由教师团队精心编写的模拟考试题，难度与竞赛真题相当。
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/enrollment" className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium text-lg transition-colors">
              立即报名
            </Link>
          </div>
        </div>

        {/* 注册提示 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">获取更多学习资料</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              注册成为质子物理工作室会员，即可免费获取部分学习资料。报名参加我们的课程，可获取全部学习资源和专属服务。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register" className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                立即注册
              </Link>
              <Link href="/login" className="inline-block border border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                会员登录
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
