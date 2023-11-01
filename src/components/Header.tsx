type HeaderProps = {
  image: Record<string, string>;
  children: React.ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      {/* <img {...image} /> */}
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
