

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">商务联系</h1>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            如果您有任何商务合作需求或咨询，请通过以下方式与我们联系。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* 联系方式 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-6">
                <h2 className="text-xl font-bold mb-2">联系方式</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">东部地区</h3>
                    <p className="text-gray-600 mb-1">浙江, 江苏, 上海, 福建，广东, 湖南, 湖北, 安徽, 海南, 江西</p>
                    <p className="text-gray-800 font-medium">孟老师：15958500159</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">北部地区</h3>
                    <p className="text-gray-600 mb-1">陕西, 山西, 天津, 山东, 山东, 河北，河南, 内蒙古</p>
                    <p className="text-gray-800 font-medium">赵老师：13675761866</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">西北、西南地区</h3>
                    <p className="text-gray-600 mb-1">黑龙江, 辽宁, 吉林, 新疆, 西藏, 重庆, 四川, 青海, 甘肃，宁夏，广西, 云南, 贵州</p>
                    <p className="text-gray-800 font-medium">蒋老师：18858522109</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-500 text-sm">海外、港澳台暂不开放招生</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 商务合作表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">商务合作</h2>
              <form className="space-y-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司/机构 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      主题 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    合作内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    提交
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 合作类型 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">合作类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">学校合作</h3>
              <p className="text-gray-600">
                我们欢迎与各中学建立长期合作关系，为学校提供物理竞赛培训服务，包括定制化的培训课程、讲座和竞赛辅导等。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">教育机构合作</h3>
              <p className="text-gray-600">
                我们愿意与其他教育机构合作，共同开发课程资源，举办竞赛活动，为更多的学生提供优质的物理教育服务。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">企业赞助</h3>
              <p className="text-gray-600">
                我们欢迎企业赞助我们的竞赛培训活动，为优秀的学生提供奖学金和学习资源，共同促进科学教育的发展。
              </p>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">常见问题</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">如何与质子物理工作室建立合作关系？</h3>
              <p className="text-gray-600">
                您可以通过上方的联系方式或填写商务合作表单与我们取得联系，我们的工作人员会尽快回复您，并根据您的需求提供相应的合作方案。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">质子物理工作室是否提供定制化的培训服务？</h3>
              <p className="text-gray-600">
                是的，我们可以根据学校或机构的具体需求，提供定制化的物理竞赛培训服务，包括课程设置、教学内容和培训时间等方面的个性化安排。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">如何成为质子物理工作室的合作讲师？</h3>
              <p className="text-gray-600">
                如果您是物理教育领域的专业人士，有丰富的教学经验和深厚的专业知识，欢迎通过上方的联系方式与我们取得联系，我们期待与您的合作。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">质子物理工作室是否接受媒体采访？</h3>
              <p className="text-gray-600">
                我们欢迎媒体朋友的采访，如有采访需求，请通过上方的联系方式与我们取得联系，我们会安排相关人员接受采访。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
