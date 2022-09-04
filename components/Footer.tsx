import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import logo from '@/data/bg-logo.png'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="w-1/4">
          <h2 className="pb-6 text-xl font-bold text-gray-900 dark:text-gray-100">Explore</h2>
          <div className="text-gray-500 dark:text-gray-100">
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">NFT's</h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">Crypto</h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">
              Metaverse
            </h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">Defi</h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">DAO</h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">DAI</h3>
          </div>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold text-gray-900 dark:text-gray-100">About</h2>
          <div className="text-gray-500 dark:text-gray-100">
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">About</h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">
              News Letter
            </h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">
              Privacy Policy
            </h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">
              Vission
            </h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">
              Support
            </h3>
            <h3 className="cursor-pointer text-lg transition-all hover:text-primary-500">Learn</h3>
          </div>
        </div>
        <div className="w-2/5">
          <div className="mr-8 text-center">
            <Image src={logo} alt={siteMetadata.headerTitle} width={100} height={100} />
          </div>
          {siteMetadata.newsletter.provider !== '' && (
            <div className="flex w-full items-center justify-center pt-4">
              <NewsletterForm />
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">Meta Magsine Platform</Link>
        </div>
      </div>
    </footer>
  )
}
