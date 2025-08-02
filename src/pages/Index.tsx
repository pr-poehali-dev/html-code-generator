import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Gift: See You In September",
      author: "Lala Lopes",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      avatarColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Introducing Online Pattern Blends, the sales process...",
      author: "Sarah Miller",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      avatarColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "Setting Your Shopify Store Price (Week 4)",
      author: "Mike Johnson",
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      avatarColor: "bg-green-500"
    },
    {
      id: 4,
      title: "A 'Describe My Art' Resource for Art Sales",
      author: "Emma Davis",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      avatarColor: "bg-red-500"
    },
    {
      id: 5,
      title: "Why Right Now is a Great Time to Sell Your Brand",
      author: "James Wilson",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      avatarColor: "bg-yellow-500"
    },
    {
      id: 6,
      title: "Setting Your Shopify Store Price (Week 4)",
      author: "Lisa Chen",
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      avatarColor: "bg-pink-500"
    },
    {
      id: 7,
      title: "Pattern 2020 Update",
      author: "Tom Brown",
      image: "/img/aaeb1472-160f-4870-b761-fad050caf060.jpg",
      avatarColor: "bg-indigo-500"
    },
    {
      id: 8,
      title: "Introducing Field",
      author: "Kate Smith",
      image: "/img/5caa9c92-3ac9-4598-bb2a-5f6df963757b.jpg",
      avatarColor: "bg-orange-500"
    },
    {
      id: 9,
      title: "Introducing Pattern",
      author: "Alex Turner",
      image: "/img/c1f02b4f-0208-4179-a905-4abbdd7b7cb3.jpg",
      avatarColor: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-semibold">For founders</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black">For You</a>
              <a href="#" className="text-gray-600 hover:text-black">Following</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          For founders building, growing and scaling your business
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Access the best business insights from successful Pattern builders, the sales process founders have built them, and more.
        </p>
        <div className="text-blue-600 font-medium">1200 x 572</div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {courses.map((course) => (
            <Card key={course.id} className="break-inside-avoid mb-4 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-auto rounded-t-lg object-cover"
                  />
                  <div className="absolute bottom-3 right-3">
                    <Avatar className={`w-10 h-10 border-3 border-white ${course.avatarColor}`}>
                      <AvatarFallback className="text-white font-semibold">
                        {course.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500">{course.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                We're focused on building a better future.
              </h2>
              <p className="text-gray-300 mb-6">
                If you'd like to partner with us, we're friends talk.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Company</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-white">Help Center</a></li>
                    <li><a href="#" className="hover:text-white">Community</a></li>
                    <li><a href="#" className="hover:text-white">Documentation</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Pattern Foundry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;