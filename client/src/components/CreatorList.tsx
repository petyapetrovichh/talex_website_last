import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const creators = [
  {
    name: "How Will Changes Everything",
    author: "Future Thinker",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    category: "Tech",
    earnings: "$12.5k",
    bgColor: "#1A1A1A" // Dark grey
  },
  {
    name: "What Should a 'Provider' Be?",
    author: "Medical Journal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    category: "Health",
    earnings: "$8.2k",
    bgColor: "#1E293B" // Slate 800
  },
  {
    name: "Non-Fungible Token Series",
    author: "Crypto Daily",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Crypto",
    earnings: "$45.1k",
    bgColor: "#0F172A" // Slate 900
  },
  {
    name: "Minimalist Thoughts",
    author: "Zen Master",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    category: "Lifestyle",
    earnings: "$5.6k",
    bgColor: "#3F3F46" // Zinc 700
  },
  {
    name: "New AI Generation Tools",
    author: "Tech Insider",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    category: "AI",
    earnings: "$22.3k",
    bgColor: "#18181B" // Zinc 900
  }
];

export default function CreatorList() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F0FDF4]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ideas already live on TaleX</h2>
          <p className="text-gray-600">Here are just a few of many people you can support and grow together</p>
          <Button variant="outline" className="mt-6 rounded-full border-black bg-black text-white hover:bg-[#82E600] hover:text-black hover:border-[#82E600] transition-colors">
            Discover ever more ideas
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {creators.map((creator, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-white group" style={{height: '471px', backgroundColor: creator.bgColor}}>
              <div className="relative pt-[100%] overflow-hidden">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{height: '223px'}}></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                        <div className="text-xs font-bold text-[#82E600] mb-1">{creator.category}</div>
                        <div className="text-xs font-bold text-[#82E600] mb-1">{creator.earnings}</div>
                    </div>
                </div>
              </div>
              <CardContent className="p-4 relative">
                <div className="absolute -top-8 left-4 w-12 h-12 rounded-full border-2 overflow-hidden" style={{borderColor: creator.bgColor}}>
                    <img src={creator.image} alt={creator.author} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-sm mt-4 line-clamp-2 min-h-[2.5rem]">{creator.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{creator.author}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs h-8 rounded-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Second Row - Duplicate for visual effect as per design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
           {creators.map((creator, index) => (
            <Card key={`row2-${index}`} className="overflow-hidden border-none shadow-lg text-white" style={{backgroundColor: creator.bgColor}}>
              <div className="relative pt-[100%] overflow-hidden">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm line-clamp-2">{creator.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{creator.author}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-white/10 text-white text-xs h-8 rounded-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
