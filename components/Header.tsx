import Image from "next/image";

// Header.tsx
const Header: React.FC = () => {
    return (
      <div className="flex justify-between px-8 py-4">
        <div>
          <Image height={200} width={200} alt="logo" src={"https://assets-global.website-files.com/64b11f315314a4ef84c12744/64b6ea3396b81f6613411c51_svg%20logo.svg"}/>
        </div>
        <div>
          <ul className="flex gap-6 text-md pt-2">
            <li>Features</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Partner Program</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-6">
            <div className="px-4 py-2 border border-black rounded-lg">Login</div>
            <div className="px-4 py-2 border text-white bg-[#6938ef] rounded-lg">Get Started</div>
          </div>
        </div>

      </div>
    );
  };
  
  export default Header;
  