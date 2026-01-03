import { Link } from 'react-router-dom'
import { ArrowRight, Code, Palette, PenTool, TrendingUp } from 'lucide-react'

const Home = () => {
  const recentUpdates = [
    {
      id: 1,
      title: '最新项目：响应式电商平台',
      type: '项目',
      date: '2024-01-15',
      link: '/portfolio',
    },
    {
      id: 2,
      title: '技术分享：React Hooks 最佳实践',
      type: '博客',
      date: '2024-01-10',
      link: '/blog',
    },
    {
      id: 3,
      title: '设计作品：品牌视觉识别系统',
      type: '项目',
      date: '2024-01-05',
      link: '/portfolio',
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '前端开发',
      description: 'React、Vue、TypeScript 等现代前端技术栈',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX 设计',
      description: '用户界面设计与用户体验优化',
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: '品牌设计',
      description: '品牌视觉识别与创意设计',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '技术咨询',
      description: '技术方案设计与架构优化',
    },
  ]

  return (
    <div>
      {/* Hero 区域 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              你好，我是{' '}
              <span className="text-primary-600">[你的名字]</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              [用一句有力的话概括你的核心价值]
            </p>
            <p className="text-lg text-gray-500 mb-8">
              我是一名 [你的职业]，专注于 [你的专业领域]。
              通过创新和专业技能，我致力于 [你的使命/目标]。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-primary">
                查看作品集
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                联系我
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 服务/技能概览 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            我能为你做什么
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">最新动态</h2>
            <Link
              to="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update) => (
              <Link
                key={update.id}
                to={update.link}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                    {update.type}
                  </span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {update.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备开始一个项目？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            让我们一起创造一些令人惊叹的东西
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            立即联系
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home


