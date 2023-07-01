import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { useServerTimeLoader } from '~/routes/layout';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  const appUsername= 'siguici';
  const appName = 'Sigui';
  const appAuthor = 'Sigui Kessé Emmanuel';
  const appLang = 'en';
  const appLocale = 'en_US';
  const appUrl = loc.url.href;
  const serverDate = useServerTimeLoader().value.date;
  const appDate = serverDate.substring(0, serverDate.indexOf('T'));
  const appYear = serverDate.substring(0, serverDate.indexOf('-'));
  const appProfile = appUrl+'profile.jpg';

  const pageTitle = head.title;

  return (
    <>
      <title>{head.title}</title>
      <base href="/"/>
      <meta charSet="UTF-8"/>

      <link rel="canonical" href={appUrl} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="shotcut icon" type="image/x-icon" href="/favicon.ico"/>
      <link rel="icon" type="image/png" href="/favicon.png"/>

      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="Content-Language" content={appLang}/>
      <meta name="author" content={appAuthor}/>
      <meta name="robots" content="index,follow"/>
      <meta name="revisit-after" content="1 days"/>
      <meta name="googlebot" content="index,follow"/>
      <meta name="googlebot-news" content="index,follow"/>
      <meta name="googlebot-image" content="index,follow"/>
      <meta name="googlebot-video" content="index,follow"/>
      <meta name="googlebot-shop" content="index,follow"/>

      <meta property="og:title" content={pageTitle}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={appUrl}/>
      <meta property="og:site_name" content={appName}/>
      <meta property="og:image" content={appProfile}/>
      <meta property="og:description" content={appAuthor}/>
      <meta property="og:locale" content={appLocale}/>
      <meta property="og:locale:alternate" content={appLocale}/>

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content={appUsername}/>
      <meta name="twitter:title" content={pageTitle}/>
      <meta name="twitter:description" content={appAuthor}/>
      <meta name="twitter:image" content={appProfile}/>
      <meta name="twitter:creator" content={appUsername}/>
      <meta name="twitter:site" content={appUsername}/>
      <meta name="twitter:domain" content="sikessem.com"/>
      <meta name="twitter:app:name:iphone" content={appName}/>
      <meta name="twitter:app:name:ipad" content={appName}/>
      <meta name="twitter:app:name:googleplay" content={appName}/>
      <meta name="twitter:app:url:iphone" content={appUrl}/>
      <meta name="twitter:app:url:ipad" content={appUrl}/>
      <meta name="twitter:app:url:googleplay" content={appUrl}/>
      <meta name="twitter:app:id:iphone" content=""/>
      <meta name="twitter:app:id:ipad" content=""/>
      <meta name="twitter:app:id:googleplay" content=""/>

      <meta item-prop="name" content={appName}/>
      <meta item-prop="description" content={appAuthor}/>
      <meta item-prop="image" content={appProfile}/>
      <meta item-prop="url" content={appUrl}/>
      <meta item-prop="author" content={appAuthor}/>
      <meta item-prop="publisher" content={appAuthor}/>
      <meta item-prop="datePublished" content={appDate}/>
      <meta item-prop="dateModified" content={appDate}/>
      <meta item-prop="copyrightYear" content={appYear.toString()}/>
      <meta item-prop="inLanguage" content={appLang}/>
      <meta item-prop="isFamilyFriendly" content="true"/>
      <meta item-prop="isPartOf" content={appName}/>

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
