import { Button, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Icon from "../UI/Icon/Icon";
import { commonColors, semanticColors } from "@nextui-org/theme";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  return (
    <Navbar classNames={{ base: 'bg-primary-200' }}>
      <NavbarBrand as={Link} href="/">
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="black"
            fillRule="evenodd"
          />
        </svg>
        <p className="font-bold text-black">ACME</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search..."
            size="sm"
            startContent={<Icon name="search" color={semanticColors.light.primary[500]!} />}
            type="search"
          />
        </NavbarItem> */}
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="#" variant="light">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="primary-600 border-primary-600" variant="ghost" href="#">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
