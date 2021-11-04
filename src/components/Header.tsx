import Image from 'next/image';

const EMAIL = 'info@gratisingent.be';

const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <Image src="/images/top_logo.jpg" alt="[GRATIS IN GENT]" width={600} height={140} />
      </div>
      <div className="bg-black text-white px-14">
        <p>GRATIS OPTREDENS, VERNISSAGES, TRYOUTS, LEZINGEN, FESTIVALS</p>
        <p>ALL THE FREE EVENTS THIS WEEK</p>
      </div>
      <div className="px-14 py-8">
        <p>
          Wie zelf iets gratis organiseert, kan het laten weten op{' '}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>

        <p className="italic">
          If you organise a free event yourself, let us know on{' '}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
