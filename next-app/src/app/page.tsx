import mainpicture from '/public/images/image_assets/mainpic.png';
import logo from '/public/images/image_assets/logo.png';
import { ButtonLink } from '@/common/button-link';
import { APP_DESCRIPTION } from '@/common/common-utils';
import { Container } from '@/common/container';
import { Divider } from '@/common/divider';
import { routes } from '@/routing/routing-utils';
import Image from 'next/image';
import React from 'react';

export default function LandingPage() {

  return (
    <main>
      <Container maxWidth="xl" className="flex flex-col items-center justify-center p-4 lg:flex-row">
        <Image src={mainpicture} alt="Whiskey collection" width={1000} height={300} />
        <div className="flex flex-col items-center gap-4 px-4 py-12 text-center md:order-2">
          <Image src={logo} alt="Whiskey collection" width={1000} height={300} />
          <Divider />
          <p className="text-lg font-semibold text-muted-foreground sm:text-xl">{APP_DESCRIPTION}</p>
          <div className="flex gap-4">
            <ButtonLink variant="primary" href={routes.learnmore()}>
              Learn More
            </ButtonLink>
            <ButtonLink variant="primary" href={routes.search()}>
              Explore
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
