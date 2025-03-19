'use client'

import { Box, SpaceBetween, TextContent } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import Link from 'next/link';
import SitePage from '../../components/sitepage';

export default function Blog() {

  return (
    <SitePage
      header='1. Free static website'
      content={
        <Box>
          <SpaceBetween size="l">
            <TextContent>
              <p>
                I conducted an investigation to find the best frontend stack and static site hosting combination that offered IPv6 and HTTPS, while keeping costs to a minium.
              </p>
              <p>For the frontend I decided to go with:</p>
              <ul>
                <li><Link href={"https://www.typescriptlang.org/"}>Typescript</Link> frontend programming language as I like that it's strongly-typed</li>
                <li><Link href={"https://nextjs.org/docs"}>NextJS</Link> React Framework for its client & server rendering capabilities</li>
                <li><Link href={"https://cloudscape.design/get-started/"}>CloudScape</Link> which is AWS' new open-source component library for the theme</li>
                <li><Link href={"https://yarnpkg.com/getting-started"}>Yarn</Link> for Javascript package management</li>
              </ul>
              <p>To host the site I looked at several options including <Link href={"https://vercel.com/"}>Vercel</Link>, <Link
                href={"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"}>Amazon S3</Link> and <Link
                  href={"https://www.serverless.com/blog/serverless-nextjs"}>Serverless-NextJs</Link>, but in the end I chose:</p>
              <ul>
                <li><Link href={"https://pages.github.com/"}>Github Pages</Link> for its free static site hosting, and HTTPS & IPv6 support</li>
                <li><Link href={"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow"}>
                  Github Actions</Link> to automatically publish my site changes</li>
              </ul>
              <p>Github pages with Github actions turned out to be the ideal solution for hosting my site publicly, and the only cost is my custom domain.</p>
            </TextContent>
          </SpaceBetween>
        </Box>
      }
    />
  );
}
