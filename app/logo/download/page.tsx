import LogoDownload from "@/components/logo-download"

export default function LogoDownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Download Your Logo</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-700 mb-8 text-center">
          Download your logo in different formats for use across your brand materials.
        </p>

        <LogoDownload />

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Usage Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Maintain clear space around the logo equal to the height of the "S" character</li>
            <li>Do not stretch or distort the logo</li>
            <li>When using on colored backgrounds, ensure there's enough contrast</li>
            <li>The primary color is #ff6347, but you can use monochrome versions when needed</li>
            <li>For favicon and small icons, use the icon-only version without text</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
