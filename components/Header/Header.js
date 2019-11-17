import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/blog">
        <a style={linkStyle}>Blog</a>
      </Link>
      <Link href="/dynamic-blog">
        <a style={linkStyle}>Dynamic Blog</a>
      </Link>
      <Link href="/batman-shows">
        <a style={linkStyle}>Batman Shows</a>
      </Link>
    </header>
  );
};

export default Header;
