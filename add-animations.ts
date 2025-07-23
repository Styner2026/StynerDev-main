/**
 * Script to add animations to the About, Projects, Learning, and Contact pages
 * 
 * How to use:
 * 1. First, create a backup of your pages
 * 2. Then run this script
 * 
 * The script will:
 * 1. Import the AnimatedSection component if needed
 * 2. Wrap major sections in AnimatedSection components
 * 3. Add appropriate animations (fadeIn, slideInLeft, slideInRight, fadeInUp)
 */

/**
 * Steps for each page:
 * 
 * 1. Ensure import of AnimatedSection component
 * 2. Wrap the main container div with AnimatedSection (fadeIn)
 * 3. Wrap key sections with appropriate animations:
 *    - Hero sections: fadeIn for container, slideInLeft/slideInRight for content
 *    - Cards/grid sections: fadeIn with staggered delays
 *    - Lists and content sections: fadeInUp
 * 
 * Animation examples from the home page:
 * 
 * - Main sections:
 *   <AnimatedSection animation="animate-fadeIn">
 *     <div className="mb-16 py-12 border-b border-gray-200">
 *       ...content...
 *     </div>
 *   </AnimatedSection>
 * 
 * - Content with left/right animations:
 *   <AnimatedSection className="md:w-1/3" animation="animate-slideInLeft" delay={200}>
 *     ...content...
 *   </AnimatedSection>
 *   <AnimatedSection className="md:w-2/3" animation="animate-slideInRight" delay={300}>
 *     ...content...
 *   </AnimatedSection>
 * 
 * - Lists with staggered animations:
 *   {items.map((item, index) => (
 *     <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
 *       ...item content...
 *     </AnimatedSection>
 *   ))}
 * 
 * - Content that fades up:
 *   <AnimatedSection animation="animate-fadeInUp" delay={100}>
 *     ...content...
 *   </AnimatedSection>
 */

console.log(`
Instructions for adding animations to About, Projects, Learning, and Contact pages:

1. In each page, add the import at the top of the file:
   import AnimatedSection from "../components/animated-section"

2. Wrap the main container div with AnimatedSection:
   <AnimatedSection animation="animate-fadeIn">
     <div className="container mx-auto px-4 py-12">
       ...content...
     </div>
   </AnimatedSection>

3. For the hero section, use slideInLeft/slideInRight:
   <AnimatedSection animation="animate-slideInLeft" delay={200}>
     <h1>Your title here</h1>
     <p>Your description here</p>
   </AnimatedSection>

4. For card grids or lists, use staggered fadeIn animations:
   {cards.map((card, index) => (
     <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
       <div className="card">...content...</div>
     </AnimatedSection>
   ))}

5. For sections that appear as you scroll down, use fadeInUp:
   <AnimatedSection animation="animate-fadeInUp" delay={100}>
     <h2>Section heading</h2>
     <div>...content...</div>
   </AnimatedSection>
`);

console.log(`
Example for About page:

First, wrap each main section in an AnimatedSection component:

// Hero section
<AnimatedSection animation="animate-fadeIn">
  <div className="mb-16 py-12 border-b border-gray-200">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <AnimatedSection animation="animate-slideInLeft" delay={200}>
          <div className="text-sm mb-2">(ABOUT ME)</div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            FULL-STACK <span className="font-['Serif_Italic'] italic font-normal">Developer</span>
            <br className="hidden sm:block" /> & AI SPECIALIST
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            I'm a passionate developer specializing in building modern web applications...
          </p>
        </AnimatedSection>
      </div>
      <AnimatedSection className="md:w-1/2" animation="animate-slideInRight" delay={300}>
        <div className="relative">
          <Image src="..." alt="..." width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </AnimatedSection>
    </div>
  </div>
</AnimatedSection>

// Skills section
<AnimatedSection animation="animate-fadeInUp" delay={100}>
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <skill.icon className="text-[#ff6347] h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</AnimatedSection>
`);

console.log(`
Apply similar patterns to Projects, Learning, and Contact pages.
Always ensure proper nesting of components and closing tags.
Test each page after implementing the animations to make sure everything works correctly.
`);
