# Animation Implementation Guide

This guide provides step-by-step instructions for adding scroll animations to the About, Projects, Learning, and Contact pages, similar to those on the homepage.

## 1. Importing the Component

First, add the import to each page if it's not already present:

```tsx
import AnimatedSection from "../../components/animated-section"
```

## 2. About Page

Apply animations to key sections of the About page:

### Hero Section

```tsx
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
        
        <AnimatedSection animation="animate-fadeIn" delay={400}>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Skills list items */}
          </div>
        </AnimatedSection>
      </div>
      
      <AnimatedSection className="md:w-1/2" animation="animate-slideInRight" delay={300}>
        <div className="relative">
          {/* Profile image */}
        </div>
      </AnimatedSection>
    </div>
  </div>
</AnimatedSection>
```

### Skills/Experience Sections

```tsx
<AnimatedSection animation="animate-fadeInUp" delay={100}>
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Skill content */}
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</AnimatedSection>
```

## 3. Projects Page

### Hero Section

```tsx
<AnimatedSection animation="animate-fadeIn">
  <div className="mb-16 py-12 border-b border-gray-200">
    {/* Hero content */}
  </div>
</AnimatedSection>
```

### Projects Grid

```tsx
<AnimatedSection animation="animate-fadeInUp">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {projects.map((project, index) => (
      <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {/* Project content */}
        </div>
      </AnimatedSection>
    ))}
  </div>
</AnimatedSection>
```

## 4. Learning Page

### Hero Section

```tsx
<AnimatedSection animation="animate-fadeIn">
  <div className="mb-16 py-12 border-b border-gray-200">
    {/* Hero content */}
  </div>
</AnimatedSection>
```

### Content Sections

```tsx
<AnimatedSection animation="animate-fadeInUp" delay={100}>
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-8">Videos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Video content */}
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</AnimatedSection>
```

## 5. Contact Page

### Hero Section

```tsx
<AnimatedSection animation="animate-fadeIn">
  <div className="mb-16 py-12 border-b border-gray-200">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <AnimatedSection className="md:w-1/2" animation="animate-slideInLeft" delay={200}>
        {/* Hero content left side */}
      </AnimatedSection>
      <AnimatedSection className="md:w-1/2" animation="animate-slideInRight" delay={300}>
        {/* Hero content right side */}
      </AnimatedSection>
    </div>
  </div>
</AnimatedSection>
```

### Contact Form

```tsx
<AnimatedSection animation="animate-fadeInUp" delay={100}>
  <div className="bg-white rounded-lg p-8 shadow-md mb-16">
    {/* Contact form content */}
  </div>
</AnimatedSection>
```

## Important Tips

1. **Proper Nesting**: Ensure all AnimatedSection components have proper closing tags
2. **Staggered Delays**: Use incrementing delays (100ms, 200ms, etc.) for sequential animations
3. **Different Animation Types**:
   - `animate-fadeIn`: Simple fade-in effect
   - `animate-slideInLeft`/`animate-slideInRight`: Content sliding in from sides
   - `animate-fadeInUp`: Content fading in while moving up
   - `animate-zoomIn`: Content starting slightly smaller and zooming in

4. **Performance**: Don't over-animate; focus on key UI elements
5. **Testing**: Check each page after adding animations to ensure smooth behavior
