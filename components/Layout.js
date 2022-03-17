import Head from 'next/head'

const Layout = ({ children, title, canonical, descriptionContent, jsonLD, activePage }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={descriptionContent} />
        <meta name='keywords' content='' />

        <meta property='og:title' content='Mustafa Masoudi' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://mustafadesigner.com/' />
        <meta property='og:image' content='https://mustafadesigner.com/images/logo.png' />
        <meta property='og:site_name' content='Mustafa Masoudi' />
        <meta
          property='og:description'
          content='Dynamic and innovative professional with years of invaluable hands-on experience in handling several simultaneous creative design projects, concept creation, animation, video production and visual conceptualization.'
        />
        <meta
          property='og:image:secure_url'
          content='https://mustafadesigner.com/images/logo.png'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Mustafa Masoudi' />
        <meta
          name='twitter:description'
          content='Dynamic and innovative professional with years of invaluable hands-on experience in handling several simultaneous creative design projects, concept creation, animation, video production and visual conceptualization.'
        />
        <meta name='twitter:image' content='https://mustafadesigner.com/images/logo.png' />

        <link rel='icon' href='/images/favicon.png' type='image.png' />
        <title>{title}</title>
        <script type='application/ld+json'>{jsonLD}</script>
      </Head>
      <div className=''>{children}</div>
    </>
  )
}

export default Layout
