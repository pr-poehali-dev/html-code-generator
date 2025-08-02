const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Gift: See You In September",
      subtitle: "Lala Lopes",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      size: "h-48"
    },
    {
      id: 2,
      title: "Introducing Online Pattern Blends, the sales process founders behind them, a...",
      subtitle: "Lala Lopes",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      size: "h-32"
    },
    {
      id: 3,
      title: "Setting Your Shopify Store",
      subtitle: "Lala Lopes",
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      size: "h-40"
    },
    {
      id: 4,
      title: "A Describe My Art Resource for Art Sales",
      subtitle: "Lala Lopes",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      size: "h-36"
    },
    {
      id: 5,
      title: "Why Right Now is a Great Time to Sell Your Brand",
      subtitle: "Lala Lopes",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      size: "h-44"
    },
    {
      id: 6,
      title: "Setting Your Shopify Store Price (Week 4)",
      subtitle: "Lala Lopes", 
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      size: "h-40"
    },
    {
      id: 7,
      title: "Pattern 2020 Update",
      subtitle: "Lala Lopes",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      size: "h-32"
    },
    {
      id: 8,
      title: "Introducing Field",
      subtitle: "Lala Lopes",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      size: "h-36"
    },
    {
      id: 9,
      title: "Introducing Pattern",
      subtitle: "Lala Lopes",
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      size: "h-48"
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F5F5'}}>
      {/* Header */}
      <header className="bg-white border-b border-gray-300 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-lg font-medium text-black">Pinterest</div>
            <div className="text-lg font-medium text-black">Today</div>
            <div className="text-lg font-medium text-black">Create</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs">🔍</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs">🔔</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs">💬</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          For founders building, growing and scaling your business
        </h1>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl">
          Access the best business insights from successful Pattern builders, the sales process founders behind them, a...
        </p>
        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
          1200 × 572
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="break-inside-avoid mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 relative">
                <div className={`relative ${course.size}`}>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Colored circle avatars */}
                  <div className="absolute bottom-3 right-3">
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{
                      backgroundColor: course.id % 8 === 1 ? '#FF6B6B' : 
                                     course.id % 8 === 2 ? '#4ECDC4' :
                                     course.id % 8 === 3 ? '#45B7D1' :
                                     course.id % 8 === 4 ? '#96CEB4' :
                                     course.id % 8 === 5 ? '#FECA57' :
                                     course.id % 8 === 6 ? '#FF9FF3' :
                                     course.id % 8 === 7 ? '#54A0FF' : '#5F27CD'
                    }}>
                      <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                        {course.id % 8 === 1 ? 'S' : 
                         course.id % 8 === 2 ? 'M' :
                         course.id % 8 === 3 ? 'K' :
                         course.id % 8 === 4 ? 'L' :
                         course.id % 8 === 5 ? 'C' :
                         course.id % 8 === 6 ? 'B' :
                         course.id % 8 === 7 ? 'G' : 'P'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-black text-sm leading-tight mb-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600">{course.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                We're focused on building, a better future.
              </h2>
              <p className="text-gray-300 text-sm">
                If you'd like to partner with us, we're friends talk.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Legal Policy</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Application</li>
                  <li>Netzwerk</li>
                  <li>Rechtliches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Quick Links</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Aufgaben</li>
                  <li>Management</li>
                  <li>Join Forces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Services</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Jobs</li>
                  <li>Landing</li>
                  <li>Call to Action</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-xs text-gray-400">
            <p>© 2024 Pattern Foundry</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;