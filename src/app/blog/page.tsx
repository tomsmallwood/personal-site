'use client'

import { Box, Header, SpaceBetween, TextContent } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import Link from 'next/link';
import SitePage from '../components/sitepage';

export default function Blog() {

  return (
    <SitePage
      header='Blog'
      content={
        <Box>
          <SpaceBetween size="l">
            <Header variant="h2">1. Free static website</Header>
            <TextContent>
              <p>I chose <Link href={"https://www.typescriptlang.org/"}>Typescript</Link> , developed by Microsoft, as I like that it is strongly-typed.
                After some investigation, the frontend stack I decided to go with was:
                <ol>
                  <li><Link href={"https://nextjs.org/docs"}>NextJS</Link> React Framework for its client & server rendering capabilities</li>
                  <li><Link href={"https://cloudscape.design/get-started/"}>CloudScape</Link> which is AWS' new open-source component library, and</li>
                  <li><Link href={"https://yarnpkg.com/getting-started"}>Yarn</Link> for Javascript package management</li>
                </ol>
              </p>
              <p>During my investigation I looked at hosting options, from <Link href={"https://vercel.com/"}>Vercel</Link>, and <Link
                href={"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"}>Amazon S3</Link> or <Link
                  href={"https://www.serverless.com/blog/serverless-nextjs"}>Serverless-NextJs</Link>  etc.
                However, the hosting option I went with was:
                <ol>
                  <li><Link href={"https://pages.github.com/"}>Github Pages</Link> for its free static site hosting</li>
                  <li><Link href={"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow"}>
                    Github Actions</Link> to automatically publish my site changes</li>
                </ol>
              </p>
              <p>Github pages with Github actions turned out a great solution for hosting my site publicly for absolutely no cost to me.</p>
            </TextContent>
          </SpaceBetween>
        </Box>
      }
    />
  );
}
