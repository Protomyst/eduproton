import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">关于我们</h1>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-8"></div>
        </div>

        {/* 机构介绍 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">质子物理工作室</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              质子物理工作室是一家专注于中学生物理竞赛培训的教育机构，由一群热爱物理、热爱教育的专业人士创立。我们致力于为对物理学科有浓厚兴趣的中学生提供高质量的竞赛培训和学术指导，帮助他们在全国中学生物理竞赛中取得优异成绩，为未来的学术道路奠定坚实基础。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              我们的教学团队由经验丰富的物理教授和金牌获得者组成，他们不仅具备深厚的理论知识，还拥有丰富的实践经验和教学技巧。我们的课程设置科学合理，注重理论与实践相结合，通过系统的讲解、严格的训练和个性化的指导，帮助学生全面提升物理思维能力和解题能力。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              在质子物理工作室，我们不仅传授知识，更注重培养学生的科学精神和创新思维。我们相信，物理不仅是一门学科，更是一种思考方式，一种探索世界的方法。我们希望通过我们的努力，让更多的学生爱上物理，在物理的世界里找到属于自己的精彩。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              &ldquo;质子物理工作室，梦开始的地方&rdquo;不仅是我们的口号，更是我们的使命。我们希望成为每一位物理爱好者追梦路上的起点，为他们提供最专业的指导和最温暖的支持，帮助他们实现自己的物理梦想。
            </p>
          </div>
        </div>

        {/* 教师团队 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">教师团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">李教授</h3>
              <p className="text-gray-700 mb-4">前加拿大Garriton大学物理系教授</p>
              <p className="text-gray-600">
                曾任加拿大Garriton大学物理系教授，回国后从教中学物理竞赛至今，经验丰富，已培养出多位集训队成员。李教授治学严谨，教学生动，深受学生喜爱。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">周予涵</h3>
              <p className="text-gray-700 mb-4">金牌获得者 | 助教</p>
              <p className="text-gray-600">
                全国中学生物理竞赛金牌获得者，曾入选国家集训队。现就读于清华大学物理系，有丰富的竞赛经验和教学经验，擅长解题思路分析和实验技巧指导。
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">冯睿</h3>
              <p className="text-gray-700 mb-4">金牌获得者 | 助教</p>
              <p className="text-gray-600">
                全国中学生物理竞赛金牌获得者，现就读于北京大学物理系。思维敏捷，善于总结解题方法和技巧，对物理竞赛题型有深入研究，能够帮助学生快速提高解题能力。
              </p>
            </div>
          </div>
        </div>

        {/* 历年成绩 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">历年成绩</h2>
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
          <p className="text-gray-600 mt-4">
            多年来，我们培养了众多优秀的物理竞赛选手，他们在各级竞赛中取得了优异的成绩，并成功进入了理想的大学。我们的教学成果不仅体现在奖牌数量上，更体现在学生们对物理的热爱和深入理解上。
          </p>
        </div>

        {/* 教学理念 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">教学理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">理论与实践相结合</h3>
              <p className="text-gray-600">
                我们注重理论知识的讲解，同时强调实验能力的培养。通过理论学习和实验操作的结合，帮助学生全面理解物理概念和原理，提高解决实际问题的能力。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">个性化教学</h3>
              <p className="text-gray-600">
                我们尊重每个学生的个体差异，根据学生的特点和需求，提供个性化的教学指导和学习建议，帮助每个学生找到适合自己的学习方法和发展路径。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">培养科学精神</h3>
              <p className="text-gray-600">
                我们不仅关注学生的竞赛成绩，更注重培养学生的科学精神和创新思维。我们鼓励学生保持好奇心，勇于质疑，善于思考，培养他们的科学素养和创新能力。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">全面发展</h3>
              <p className="text-gray-600">
                我们相信，优秀的物理人才不仅需要扎实的专业知识，还需要良好的综合素质。我们注重培养学生的团队合作精神、沟通能力和领导力，促进学生的全面发展。
              </p>
            </div>
          </div>
        </div>

        {/* 报名按钮 */}
        <div className="text-center mt-12">
          <Link href="/enrollment" className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium text-lg transition-colors">
            立即报名
          </Link>
        </div>
      </div>
    </div>
  );
}
