import LogoPreview from "@/components/logo-preview"
import Logo from "@/components/logo"

export default function LogoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Logo</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Logo Preview</h2>
            <LogoPreview />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Logo Variations</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Full Logo</p>
                <div className="p-4 border border-gray-200 rounded-md flex justify-center">
                  <Logo size={40} />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Icon Only</p>
                <div className="p-4 border border-gray-200 rounded-md flex justify-center">
                  <Logo size={40} withText={false} />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">On Dark Background</p>
                <div className="p-4 bg-black rounded-md flex justify-center">
                  <Logo size={40} textColor="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Usage Instructions</h2>
          <p className="text-gray-700 mb-4">
            Your logo is implemented as an SVG component, making it scalable to any size without losing quality. You can
            use it across your website, social media profiles, and marketing materials.
          </p>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm font-medium mb-2">To use the logo in your components:</p>
            <pre className="bg-gray-800 text-gray-200 p-3 rounded-md overflow-x-auto">
              <code>{`import Logo from "@/components/logo"

// Full logo with text
<Logo size={32} />

// Icon only
<Logo size={32} withText={false} />

// Custom colors
<Logo size={32} color="#ff6347" textColor="black" />`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
