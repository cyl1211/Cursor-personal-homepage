import { useState } from 'react'
import { ExternalLink, Github, Code, Palette, Globe } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')

  const projects: Project[] = [
    {
      id: 1,
      title: '响应式电商平台',
      category: 'Web开发',
      description: '一个功能完整的现代化电商平台，支持商品浏览、购物车、支付等功能。',
      longDescription:
        '这是一个使用 React + TypeScript 构建的现代化电商平台。项目采用了微前端架构，实现了商品管理、用户系统、订单处理等核心功能。使用了 Redux 进行状态管理，集成了 Stripe 支付系统，并实现了完整的响应式设计。',
      technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: '品牌视觉识别系统',
      category: '设计',
      description: '为某知名品牌设计的完整视觉识别系统，包括 Logo、色彩方案、字体系统等。',
      longDescription:
        '这是一个全面的品牌视觉识别项目，涵盖了从 Logo 设计到应用系统的完整方案。设计风格现代简约，注重品牌一致性和用户体验。',
      technologies: ['Figma', 'Adobe Illustrator', '品牌设计'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: '任务管理应用',
      category: 'Web开发',
      description: '一个功能强大的任务管理工具，支持团队协作、实时同步等功能。',
      longDescription:
        '使用 Vue.js 和 Firebase 构建的实时任务管理应用。支持多用户协作、实时数据同步、文件上传等功能。',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: '移动端 UI 设计',
      category: '设计',
      description: '为移动应用设计的现代化 UI 界面，注重用户体验和视觉美感。',
      longDescription:
        '一套完整的移动端 UI 设计方案，包括登录、主页、详情页等多个界面。设计遵循 Material Design 规范。',
      technologies: ['Figma', 'UI/UX Design'],
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 5,
      title: '数据分析仪表板',
      category: 'Web开发',
      description: '一个功能丰富的数据可视化仪表板，支持多种图表类型和实时数据更新。',
      longDescription:
        '使用 React 和 D3.js 构建的数据可视化平台。支持多种图表类型，实时数据更新，以及数据导出功能。',
      technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: '个人作品集网站',
      category: 'Web开发',
      description: '一个展示个人作品和技能的响应式网站，使用现代前端技术构建。',
      longDescription:
        '使用 React + TypeScript + Tailwind CSS 构建的个人作品集网站。完全响应式设计，支持深色模式。',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: '/api/placeholder/600/400',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
  ]

  const categories = ['全部', 'Web开发', '设计']

  const filteredProjects =
    selectedCategory === '全部'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web开发':
        return <Code className="w-5 h-5" />
      case '设计':
        return <Palette className="w-5 h-5" />
      default:
        return <Globe className="w-5 h-5" />
    }
  }

  return (
    <div>
      {/* 页面标题 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">作品集</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            这里展示了我的一些精选项目，每个项目都代表了我对技术和设计的热情。
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`card group cursor-pointer overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* 项目图片 */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 mb-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl text-primary-600 opacity-50">
                      {getCategoryIcon(project.category)}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      精选
                    </div>
                  )}
                </div>

                {/* 项目信息 */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-gray-500">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">代码</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">预览</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio


