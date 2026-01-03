import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'React Hooks 最佳实践指南',
      excerpt:
        '深入探讨 React Hooks 的使用技巧和最佳实践，帮助你写出更优雅、更高效的 React 代码。',
      content: '',
      date: '2024-01-15',
      readTime: '8 分钟',
      category: '技术',
      tags: ['React', 'Hooks', '前端开发'],
      featured: true,
    },
    {
      id: 2,
      title: 'TypeScript 类型系统深度解析',
      excerpt:
        '从基础到高级，全面解析 TypeScript 的类型系统，让你的代码更加类型安全。',
      content: '',
      date: '2024-01-10',
      readTime: '12 分钟',
      category: '技术',
      tags: ['TypeScript', '类型系统'],
      featured: true,
    },
    {
      id: 3,
      title: '现代前端构建工具对比：Vite vs Webpack',
      excerpt:
        '对比分析 Vite 和 Webpack 的优缺点，帮助你选择最适合项目的构建工具。',
      content: '',
      date: '2024-01-05',
      readTime: '10 分钟',
      category: '技术',
      tags: ['Vite', 'Webpack', '构建工具'],
      featured: false,
    },
    {
      id: 4,
      title: 'UI/UX 设计原则：如何创造更好的用户体验',
      excerpt:
        '分享我在 UI/UX 设计中的一些心得和原则，帮助你设计出更用户友好的界面。',
      content: '',
      date: '2023-12-28',
      readTime: '6 分钟',
      category: '设计',
      tags: ['UI/UX', '设计原则'],
      featured: false,
    },
    {
      id: 5,
      title: '2024 年前端开发趋势预测',
      excerpt:
        '基于当前技术发展，预测 2024 年前端开发的主要趋势和值得关注的技术。',
      content: '',
      date: '2023-12-20',
      readTime: '5 分钟',
      category: '行业',
      tags: ['前端', '趋势', '2024'],
      featured: false,
    },
    {
      id: 6,
      title: '从零开始学习 Tailwind CSS',
      excerpt:
        '一个完整的 Tailwind CSS 入门教程，帮助你快速掌握这个强大的 CSS 框架。',
      content: '',
      date: '2023-12-15',
      readTime: '15 分钟',
      category: '教程',
      tags: ['Tailwind CSS', 'CSS', '教程'],
      featured: false,
    },
  ]

  const categories = ['全部', '技术', '设计', '行业', '教程']
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredPosts =
    selectedCategory === '全部'
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div>
      {/* 页面标题 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">博客</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            分享我的技术见解、学习心得和行业思考
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
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 精选文章 */}
          {selectedCategory === '全部' && featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">精选文章</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="card hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      阅读全文
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 普通文章列表 */}
          <div>
            {selectedCategory !== '全部' && (
              <h2 className="text-2xl font-bold mb-8">
                {selectedCategory} 相关文章
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    阅读全文
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无相关文章</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog

