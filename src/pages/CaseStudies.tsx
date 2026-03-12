import React from 'react';
import { motion } from 'framer-motion';
import { MapPin,FileText } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  tags: string[];
  location?: string;
  year?: string;
}

const CaseStudies: React.FC = () => {
  // Array of projects with their images and text data
  const projects: Project[] = [
    {
      id: '1',
      title: 'KIWI "Back to School" Campaign',
      client: 'KIWI',
      category: 'Retail Activation',
      image: './assets/images/cases/case1.PNG',
      description: 'Transformed a creative 3D vehicle concept into a fully functional in-store display.',
      fullDescription: `Korporate Apothecary transformed a creative 3D vehicle concept into a fully functional in-store display. Designed to stand out in retail environments, the custom-built unit captures the essence of KIWI's brand through bold visuals, high-quality finishes, and product-focused shelving.

Our team managed the entire process — from 3D concept design and structural fabrication to branding and installation — and the campaign was executed nationwide, ensuring consistent brand visibility across key retail locations.

The result is a vibrant, interactive display that not only drives visibility but also connects directly with shoppers through a fun, relatable "back to school" theme. This activation perfectly showcases our ability to turn creative ideas into impactful retail experiences that bring brands to life.`,
      tags: ['In-Store Display', '3D Design', 'Nationwide Campaign'],
      location: 'National',
      year: '2024'
    },
    {
      id: '2',
      title: 'Ster-Kinekor Movie Screening',
      client: 'Ster-Kinekor',
      category: 'Event Activation',
      image: './assets/images/cases/case2.PNG',
      description: 'Brought movie screening to life across six provinces in Ster-Kinekor cinemas.',
      fullDescription: `Korporate Apothecary brought movie screening to life across six provinces — hosted in Ster-Kinekor cinemas at Gateway, Baywest, Cape Town, Bloemfontein, Johannesburg, and Pretoria. From event design and décor to catering and full technical management, our team delivered a consistent, premium experience in every location.

Guests were welcomed on a glamorous red carpet, enjoyed cocktail seating, signature drinks, and canapés, and moved through the venue guided by custom movie posters and photo-ready queue panels that amplified the excitement of the big screen.

From province to province, we turn every event into a cinematic experience worth remembering.`,
      tags: ['Event Management', 'Catering', 'Multi-Province'],
      location: '6 Provinces',
      year: '2024'
    },
    {
      id: '3',
      title: 'Glade Seduction Kits',
      client: 'Glade',
      category: 'Packaging Design',
      image: './assets/images/cases/case3.PNG',
      description: 'Created premium product packaging concept capturing elegance, freshness, and sensory appeal.',
      fullDescription: `Korporate Apothecary was entrusted with creating a premium product packaging concept that captures elegance, freshness, and sensory appeal. This project involved designing and producing a custom presentation pack for an exclusive fragrance range — combining bold color, texture, and structural design to enhance shelf presence and consumer experience.

From concept visualization to final production, our team ensured every element reflected quality, sophistication, and brand consistency — resulting in a standout packaging execution that communicates luxury and attention to detail.`,
      tags: ['Packaging Design', 'Premium', 'Fragrance'],
      location: 'National',
      year: '2024'
    },
    {
      id: '4',
      title: 'Make Africa Bloom Tradeshow',
      client: 'Make Africa Bloom',
      category: 'Tradeshow Activation',
      image: './assets/images/cases/case4.PNG',
      description: 'Executed a full in-store activation to bring the brand to life and engage directly with shoppers.',
      fullDescription: `For this project, Korporate Apothecary executed a full in-store activation designed to bring the brand to life and engage directly with shoppers. Our team handled concept development, setup, and on-site coordination, creating an interactive space that blended visual appeal with consumer engagement.

From the eye-catching branded backdrop to the product display stands and promotional staffing, every element was planned to maximize visibility and drive participation. This activation highlights our expertise in transforming retail environments into vibrant, experience-driven touchpoints that connect brands with their audience.`,
      tags: ['Tradeshow', 'In-Store', 'Interactive'],
      location: 'Multiple Venues',
      year: '2023'
    },
    {
      id: '5',
      title: 'Corporate Gifting Solution',
      client: 'Confidential Client',
      category: 'Corporate Gifting',
      image: './assets/images/cases/case5.PNG',
      description: 'Created a refined and thoughtful corporate gifting solution celebrating appreciation and connection.',
      fullDescription: `This project focused on creating a refined and thoughtful corporate gifting solution that celebrates appreciation and connection. Korporate Apothecary curated, designed, and packaged this elegant gift set — featuring high-quality branded items presented in a clean, modern layout.

From product selection and packaging design to the finishing details of presentation, our team ensured every element aligned with the brand's identity and message. The result: a gifting experience that feels personal, polished, and purpose-driven, embodying the Korporate touch of elegance and meaning.`,
      tags: ['Gift Sets', 'Premium Packaging', 'Branding'],
      location: 'Corporate',
      year: '2023'
    },
    {
      id: '6',
      title: 'Branded Lounge Setup',
      client: 'Various Clients',
      category: 'Event Styling',
      image: './assets/images/cases/case6.PNG',
      description: 'Managed full hospitality and catering experience from setup and styling to service coordination.',
      fullDescription: `For this recent activation, our team managed a full hospitality and catering experience — from setup and styling to service coordination. Every detail was designed to create a warm, professional, and memorable atmosphere, ensuring guests enjoyed both the presentation and the experience.

This project highlights our ability to deliver end-to-end event execution, blending creativity, efficiency, and attention to detail — all tailored to meet the client's brand standards.`,
      tags: ['Hospitality', 'Catering', 'Event Styling'],
      location: 'Various',
      year: '2023'
    },
    {
      id: '7',
      title: 'KIWI Step Up Activation',
      client: 'KIWI',
      category: 'Product Display',
      image: './assets/images/cases/case7.PNG',
      description: 'Curated a premium product display highlighting KIWI\'s trusted shoe care range.',
      fullDescription: `As part of the KIWI Step Up Activation, Korporate Apothecary curated a premium product display highlighting KIWI's trusted shoe care range. The setup featured their signature polishes and instant shine products — presented with a focus on quality, heritage, and everyday practicality.

Displayed within the activation lounge area, this elegant product arrangement reinforced the KIWI brand's message: "Shines, Protects & Waterproofs." Every element — from placement to lighting — was designed to enhance product visibility and deliver an elevated brand experience to consumers.

This activation demonstrates our expertise in creating impactful brand moments that merge design, strategy, and execution seamlessly.`,
      tags: ['Product Display', 'Retail', 'Brand Experience'],
      location: 'Retail Locations',
      year: '2024'
    },
    {
      id: '8',
      title: 'KIWI Step Up Activation (Display)',
      client: 'KIWI',
      category: 'Retail Display',
      image: './assets/images/cases/case8.PNG',
      description: 'Premium product arrangement reinforcing brand message of shine, protection, and waterproofing.',
      fullDescription: `As part of the KIWI Step Up Activation, Korporate Apothecary curated a premium product display highlighting KIWI's trusted shoe care range. The setup featured their signature polishes and instant shine products — presented with a focus on quality, heritage, and everyday practicality.

Displayed within the activation lounge area, this elegant product arrangement reinforced the KIWI brand's message: "Shines, Protects & Waterproofs." Every element — from placement to lighting — was designed to enhance product visibility and deliver an elevated brand experience to consumers.

This activation demonstrates our expertise in creating impactful brand moments that merge design, strategy, and execution seamlessly.`,
      tags: ['Product Display', 'Retail', 'Brand Experience'],
      location: 'Retail Locations',
      year: '2024'
    },
    {
      id: '9',
      title: 'Brand Experience Activation',
      client: 'Various',
      category: 'Brand Activation',
      image: './assets/images/cases/case9.PNG',
      description: 'Creating impactful brand moments that merge design, strategy, and execution.',
      fullDescription: `Creating impactful brand moments that merge design, strategy, and execution seamlessly. Our team delivers end-to-end brand experiences that resonate with audiences and drive engagement.

From concept to completion, we ensure every detail aligns with brand standards and creates memorable experiences for consumers.`,
      tags: ['Brand Activation', 'Strategy', 'Design'],
      location: 'Various',
      year: '2024'
    }
  ];

  return (
    <div className="pt-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Our Approach Section */}
     
       <section className="relative bg-gradient-to-r from-[#0F455D] to-[#105569] text-white overflow-hidden">
  <div className="absolute inset-0 bg-black/20" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
     <div className="flex flex-col items-center justify-center text-center">
		  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 mx-auto">
			<FileText className="w-10 h-10 text-white" />
		  </div>
		  
		  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
			Case Studies
		  </h1>
		  
		  <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
			Explore our portfolio of successful brand activations and creative solutions
		  </p>
		</div>
    </motion.div>
  </div>
</section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          >
            <h4 className="text-2xl md:text-2xl font-bold text-black mb-8">
              <span className="text-[#0F455D]">‘APOTHECARY’</span>
            </h4>
            
            <p className="text-lg text-bold text-gray-700 leading-relaxed">
              A term we use to describe creative alchemist of brand solutions — blending strategy and innovation to craft
              tailored remedies that grow and transform businesses.
            </p>
           
          </motion.div>

          {/* Project Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Work in <span className="text-[#0F455D]">Action</span>
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Showcasing our successful projects and client partnerships across various industries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0F455D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-[#0F455D] font-bold">{project.client}</span>
                      {project.year && (
                        <span className="text-sm text-gray-500">{project.year}</span>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0F455D] transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {project.fullDescription}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.location && (
                      <div className="flex items-center text-sm text-gray-500 border-t pt-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-[#0F455D] to-[#105569] rounded-2xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                  <div className="text-gray-300">Successful Projects</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">9</div>
                  <div className="text-gray-300">Provinces Covered</div>
                </div>
              </div>
            </div>
          </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create innovative solutions for your business
            </p>
            <button className="bg-gradient-to-r from-[#0F455D] to-[#00CFC1] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
              Talk to us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;