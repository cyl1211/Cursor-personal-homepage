import { Download, Award, Briefcase, GraduationCap } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Docker', level: 65 },
  ]

  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: '高级前端工程师',
      company: '某某科技公司',
      period: '2021 - 至今',
      description: '负责核心产品的前端架构设计与开发，带领团队完成多个重要项目。',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: '前端开发工程师',
      company: '某某互联网公司',
      period: '2019 - 2021',
      description: '参与多个大型项目的开发，积累了丰富的 React 和 Vue 开发经验。',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: '计算机科学学士',
      company: '某某大学',
      period: '2015 - 2019',
      description: '主修计算机科学，专注于软件工程和前端开发方向。',
    },
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: '优秀员工',
      year: '2023',
      description: '年度优秀员工奖',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '技术贡献奖',
      year: '2022',
      description: '在开源项目中的突出贡献',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '最佳项目奖',
      year: '2021',
      description: '年度最佳项目团队',
    },
  ]

  return (
    <div>
      {/* 关于我介绍 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                关于我
              </h1>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  我是一名充满热情的前端开发工程师，拥有 [X] 年的开发经验。
                  我热爱创造美观且功能强大的用户界面，致力于将复杂的技术转化为
                  简单易用的产品。
                </p>
                <p>
                  在我的职业生涯中，我专注于 React、TypeScript 等现代前端技术栈，
                  同时也对 UI/UX 设计有着浓厚的兴趣。我相信好的设计不仅仅是美观，
                  更重要的是能够解决用户的实际问题。
                </p>
                <p>
                  除了工作，我喜欢阅读技术博客、参与开源项目，以及分享我的学习心得。
                  我相信持续学习是保持竞争力的关键。
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary inline-flex items-center"
                >
                  <Download className="mr-2 w-5 h-5" />
                  下载简历
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">照片</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-semibold">[你的名字]</p>
                  <p className="text-sm text-primary-100">前端开发工程师</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            专业技能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            工作经历
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white">
                  {exp.icon}
                </div>
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成就与荣誉 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            成就与荣誉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {achievement.year}
                </p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


