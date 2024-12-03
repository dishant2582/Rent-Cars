import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-20 mb-5 flex flex-col">
      <main className="flex-grow">
        {/* Page content goes here */}
      </main>

      <footer className="border-t border-gray-300 w-full bg-gray-50 pt-20"> {/* Adjusted margin */}
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between gap-y-8 md:gap-y-0">
            {/* Logo and About Section */}
            <div className="flex flex-col gap-y-8">
              <div className="flex items-center gap-2 text-xl">
                <img
                  width="100"
                  height="60"
                  src="https://th.bing.com/th/id/OIP.fDxs6KnOCbY9gxLgMkxHFwHaHa?rs=1&pid=ImgDetMain"          
                  alt="Logo"
                  className="h-16 w-auto rounded-md"
                />
                <span className="font-bold text-gray-700">Rent IT</span>
              </div>
              <p className="text-sm text-gray-600 w-[90%]">
                Find the best deals for budget and luxury cars. Our services are
                available in select cities across the globe.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-between gap-12 text-sm text-gray-700">
              {/* Buying & Selling */}
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-gray-800">Buying & Selling</h3>
                <ul className="space-y-8">
                  <li>
                    <a href="/find-a-car" className="hover:text-blue-600 transition">
                      Find a Car
                    </a>
                  </li>
                  <li>
                    <a href="/sell-your-car" className="hover:text-blue-600 transition">
                      Sell Your Car
                    </a>
                  </li>
                  <li>
                    <a href="/certified-pre-owned" className="hover:text-blue-600 transition">
                      Certified Pre-Owned
                    </a>
                  </li>
                  <li>
                    <a href="/car-reviews" className="hover:text-blue-600 transition">
                      Car Reviews
                    </a>
                  </li>
                </ul>
              </div>

              {/* For Dealer Partners */}
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-gray-800">For Dealer Partners</h3>
                <ul className="space-y-8">
                  <li>
                    <a href="/platform-log-in" className="hover:text-blue-600 transition">
                      Platform Log-In
                    </a>
                  </li>
                  <li>
                    <a href="/dealer-insights" className="hover:text-blue-600 transition">
                      Dealer Insights
                    </a>
                  </li>
                  <li>
                    <a href="/media-network" className="hover:text-blue-600 transition">
                      Media Network
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Info */}
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-gray-800">Our Company</h3>
                <ul className="space-y-8">
                  <li>
                    <a href="/about" className="hover:text-blue-600 transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-blue-600 transition">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="hover:text-blue-600 transition">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/investor-relations" className="hover:text-blue-600 transition">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 mt-6"> {/* Reduced the margin */}
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Car Store. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-xs hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
