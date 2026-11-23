import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  globalSettings?: any
}

export default function Footer({ globalSettings }: FooterProps) {

  return (
    <footer className="bg-[#22333D] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {globalSettings?.businessName}
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>
                {globalSettings?.phoneNumber}
              </p>

              <p>
                {globalSettings?.emailAddress}
              </p>

              <p>
                Melbourne, Victoria
              </p>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Solutions
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/solutions/excavator-buckets"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Excavator Buckets
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions/excavator-attachments"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Excavator Attachments
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions/quarry-mining-recycling"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Screeners, Feeders & Crushers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/why-steelform"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Why Steelform
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#F27224] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Trust */}
          <div className="flex flex-col items-start lg:items-center">
            <h3 className="text-lg font-bold mb-4">
              Industry Credentials
            </h3>

            <Image
              src="/branding/australian-made.png"
              alt="Australian Made"
              width={60}
              height={60}
              className="w-auto h-auto"
            />

            <p className="mt-4 text-sm text-slate-300 text-center">
              25+ Years Experience<br/>
              Locally Made & Supported
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-400">
            © 2027 {globalSettings?.businessName}
          </p>

          <div className="flex items-center gap-4">

            {globalSettings?.socialLinks?.map(
              (social: any, index: number) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#F27224] transition-colors"
                >
                  {social.platform}
                </a>
              )
            )}

          </div>

        </div>
      </div>
    </footer>
  )
}